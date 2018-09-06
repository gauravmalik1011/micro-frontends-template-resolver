import nodeFetch from "node-fetch";

const fetch = (url, callback) => {
  return nodeFetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(callback);
};

export default fetch;
