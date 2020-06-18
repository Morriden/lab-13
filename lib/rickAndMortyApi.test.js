const { getCharacter, getArrayOfCharacter } = require('./rickAndMortyApi');

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

  it('gets many characters with an array of ids', () => {
    return getArrayOfCharacter([1, 2, 3])
      .then(characters => {
        expect(characters).toEqual([
          {
            name: 'Rick Sanchez',
            status: 'Alive',
            species: 'Human'
          },
          {
            name: 'Morty Smith',
            status: 'Alive',
            species: 'Human' 
          },
          {
            name: 'Summer Smith',
            status: 'Alive',
            species: 'Human' 
          }
        ]);
      });
  });
});
