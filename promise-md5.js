const md5 = require('./md5');

function promiseMd5(string) {
  return new Promise((resolve, reject) => {
    md5(string, (err, hash) => (err ? reject(err) : resolve(hash)));
  });
}

module.exports = promiseMd5;
