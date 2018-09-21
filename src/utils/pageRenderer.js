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

    $("fragment").each((index, element) => {
      const $element = $(element);
      const moduleName = $element.attr("data-module");

      modulesPromiseList.push(
        fetch(
          MODULE_RESOLVER_ENDPOINT + "/" + moduleName,
          {
            method: "POST",
            body: JSON.stringify({
              api: $element.attr("data-api") || ""
            }),
            headers: { "Content-Type": "application/json" }
          },
          content => {
            const $newElement = $(
              $.parseHTML(content.html, cheerio.Document, true)[0]
            );

            const attributes = $element.attr();

            Object.keys(attributes).forEach(key => {
              $newElement.attr(key, attributes[key]);
            });
            $element.replaceWith($newElement);

            content.css.forEach(function(link) {
              createStyleTag(link, $);
            });

            content.js.forEach(function(src) {
              createScriptTag(src, $);
            });
          }
        )
      );
    });

    await Promise.all(modulesPromiseList);

    res.send($.html());
  } else res.send("Unknown page.");
};

export default pageRenderer;
