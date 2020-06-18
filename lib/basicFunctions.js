const fsPromises = require('fs').promises;

const reverseString = (string) => {
  let splitString = string.split('');
  let reverseString = splitString.reverse();
  let joinedString = reverseString.join('');

  return joinedString;
};

const copyFile = (src, dst) => {
  return fsPromises.readFile(src)
    .then(result => fsPromises.writeFile(dst, result));
};

const transformSRC = (path) => {
  return fsPromises.readFile(path, { encoding: 'utf8' })
    .then(string => string.replace(/[^a-z]/g, ''))
    .then(string => string.toUpperCase())
    .then(string => reverseString(string));
};

module.exports = {
  copyFile,
  transformSRC
};
