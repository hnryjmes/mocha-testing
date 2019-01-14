const { expect } = require('chai');
const promiseMd5 = require('../promise-md5');

describe('#promiseMd5()', () => {
  context('with string argument', () => {
    it('should compute MD5 hash', () => (
      promiseMd5('Glad Chinda')
        .then((hash) => {
          expect(hash)
            .to.be.a('string')
            .that.matches(/^[a-f0-9]{32}$/)
            .and.equal('877dbb93f50eb8a89012e15bd37ee7e4');
        })
    ));
  });

  context('with non-string argument', () => {
    it('should throw an error', () => (
      promiseMd5()
        .catch((err) => {
          expect(() => { throw err; })
            .to.throw(TypeError, 'Data must be a string or a buffer');
        })
    ));
  });
});
