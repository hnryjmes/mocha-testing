module.exports = {
    "env": {
        "node": true,
        "mocha": true
    },
    "extends": "airbnb-base",
    "plugins": [
        "mocha",
        "chai-friendly"
    ],
    "rules": {
        "mocha/no-exclusive-tests": "error"
    }
};