const request = require('superagent');

const getCharacter = (id) => {
  return request
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ body }) => ({
      name: body.name,
      status: body.status,
      species: body.species
    })
    );};

const getArrayOfCharacter = (array) => {
  return Promise.all(array.map(id => getCharacter(id)));
};

module.exports = {
  getCharacter,
  getArrayOfCharacter
};
