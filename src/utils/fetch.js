import nodeFetch from "node-fetch";

const fetch = (url, options, callback) => {
  return nodeFetch(url, typeof options === "object" ? options : undefined)
    .then(function(response) {
      return response.json();
    })
    .then(typeof options === "function" ? options : callback);
};

export default fetch;
