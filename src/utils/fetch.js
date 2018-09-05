var nodeFetch = require("node-fetch");

function fetch(url, callback) {
  return nodeFetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(callback);
}

module.exports = fetch;
