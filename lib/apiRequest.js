const request = require('superagent');

const getQoute = (url) => {
  return request
    .get(url)
    .then(({ body: [{ character, quote, image }] }) => ({
      character,
      quote,
      image
    }));
};

module.exports = {
  getQoute
};
