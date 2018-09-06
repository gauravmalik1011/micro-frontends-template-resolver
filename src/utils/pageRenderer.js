import express from "express";
import path from "path";
import fs from "fs";
import cheerio from "cheerio";

import fetch from "../utils/fetch";
import templateRegistry from "../templateRegistry";
import { createScriptTag, createStyleTag } from "../utils";

const MODULE_RESOLVER_ENDPOINT =
  process.env.MODULE_RESOLVER_ENDPOINT || "http://localhost:8001";

const pageRenderer = async (req, res, next) => {
  const pageName = req.path.split("/")[1];

  if (templateRegistry[pageName]) {
    const $ = cheerio.load(
      fs.readFileSync(
        path.resolve(__dirname, "../templates/", templateRegistry[pageName])
      )
    );

    const modulesPromiseList = [];

    $("[data-module]").each((index, element) => {
      const $element = $(element);
      const moduleName = $element.attr("data-module");

      modulesPromiseList.push(
        fetch(MODULE_RESOLVER_ENDPOINT + "/" + moduleName, content => {
          $element.html(content.html);

          content.css.forEach(function(link) {
            createStyleTag(link, $);
          });

          content.js.forEach(function(src) {
            createScriptTag(src, $);
          });
        })
      );
    });

    await Promise.all(modulesPromiseList);

    res.send($.html());
  } else res.send("Unknown page.");
};

export default pageRenderer;
