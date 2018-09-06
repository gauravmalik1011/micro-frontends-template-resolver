export const createScriptTag = (src, $) => {
  if (src) {
    var scriptTag = $("<script>");
    scriptTag.attr({
      type: "text/javascript",
      src: src
    });
    $("body").append(scriptTag);
  }
};

export const createStyleTag = (link, $) => {
  if (link) {
    var linkTag = $("<link>");
    linkTag.attr({
      type: "text/css",
      rel: "stylesheet",
      href: link
    });
    $("head").append(linkTag);
  }
};
