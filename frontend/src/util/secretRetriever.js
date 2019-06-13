const fetch = require("node-fetch");

export const retrieveSecret = (input, abortController) => {
  let headers = {"Content-Type": "application/json"};
  let domain = process.env.REACT_APP_DOMAIN;
  return fetch("http://" + domain + ":8000/?input=" + input, {signal: abortController, headers, })
    .then(res => res.json())
    .catch(err => {throw err;});
}
