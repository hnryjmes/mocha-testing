const crypto = require('crypto');

function md5(string, callback) {
  const withCallback = typeof callback === 'function';

  try {
    const hash = crypto.createHash('md5')
      .update(string)
      .digest('hex');

    // eslint-disable-next-line no-unused-vars
    const thing = withCallback && callback(null, hash);
  } catch (e) {
    if (withCallback) callback(e);
    else throw e;
  }
}

module.exports = md5;
