var express = require("express");
var path = require("path");
var fs = require("fs");
var cheerio = require("cheerio");

var fetch = require("../utils/fetch");
var templates = require("../templates");
var MODULE_RESOLVER_ENDPOINT =
  process.env.MODULE_RESOLVER_ENDPOINT || "http://localhost:8500";
var { createScriptTag, createStyleTag } = require("../utils");

function pageRenderer(req, res, next) {
  var pageName = req.path.split("/")[1];
  if (templates[pageName]) {
    const $ = cheerio.load(
      fs.readFileSync(
        path.join(__dirname, "../templates/", templates[pageName])
      )
    );

    var modulesPromiseList = [];

    $("[data-module]").each(function(index, element) {
      (function(element) {
        var moduleName = element.attr("data-module");
        modulesPromiseList.push(
          fetch(MODULE_RESOLVER_ENDPOINT + "/" + moduleName, function(content) {
            element.html(content.html);

            content.css.forEach(function(link) {
              createStyleTag(link, $);
            });

            content.js.forEach(function(src) {
              createScriptTag(src, $);
            });
          })
        );
      })($(element));
    });

    Promise.all(modulesPromiseList).then(function() {
      res.send($.html());
    });
  } else res.end();
}

module.exports = pageRenderer;
