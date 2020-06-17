const { getCharacter } = require('./rickAndMortyApi');

describe('rick and morty api tests', () => {
  it('gets a character by id', () => {
    return getCharacter('7')
      .then(character => {
        expect(character).toEqual({
          name: 'Abradolf Lincler',
          status: 'unknown',
          species: 'Human'
        });
      });
  });
});
