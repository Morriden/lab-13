const { getQoute } = require('./apiRequest');

jest.mock('superagent', () => ({
  get: () => {
    return Promise.resolve({
      body: 
      [
        {
          character: 'Bender',
          quote: 'Bodies are for hookers and fat people.',
          image: 'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png'
        }
      ]
    });
  }
}));

describe('futarami API tests', () => {
  it('gets a request from the futarami api', () => {
    return getQoute('http://futuramaapi.herokuapp.com/api/quotes/1')
      .then(character => {
        expect(character).toEqual({
          character: 'Bender',
          quote: 'Bodies are for hookers and fat people.',
          image: 'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png'
        });
      });
  });
});
