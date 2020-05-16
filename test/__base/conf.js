const conf = require("../mocha.conf");
module.exports = {
  ...{
    diff: true,
    require: [],
    config: false,
    extension: ['js', 'cjs', 'mjs'],
    reporter: 'spec',
    slow: '75',
    timeout: '2000',
    timeouts: '2000',
    ui: 'bdd',
    watchIgnore: ['node_modules', '.git'],
    spec: []
  },
  ...conf
};
