const { getCharacter } = require('./superAgent');

describe('futarami API tests', () => {
  it('gets a request from the futarami api', () => {
    return getCharacter('id')
      .then(character => {
        expect(character).toEqual({

        });
      });
  });
});
