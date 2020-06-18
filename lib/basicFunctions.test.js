const fsPromise = require('fs').promises;
const { copyFile, transformSRC } = require('./basicFunctions');

describe('Function testings', () => {
  beforeAll(() => {
    return fsPromise.writeFile('./test-file1.txt', 'Info In Test File1');
  });
  afterAll(() => {
    return Promise.all([
      fsPromise.unlink('./test-file1.txt'),
      fsPromise.unlink('./test-file2.txt')
    ]);
  });

  it('copys a file', () => {
    return copyFile('./test-file1.txt', './test-file2.txt')
      .then(() => {
        return fsPromise.readFile('./test-file2.txt', { encoding: 'utf8' });
      })
      .then(newFile => {
        expect(newFile).toEqual('Info In Test File1');
      });
  });

  it('transforms a file, removes capitols, makes all letters capitols, then reverse string', () => {
    return transformSRC('./test-file1.txt')
      .then(transformedString => {
        expect(transformedString).toEqual('ELITSENOFN');
      });
  });
});
