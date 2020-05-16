const path = require("path");
const conf = require("./__base/conf");
const custom = {
  require: ['@babel/register'],
  spec: [path.join('.', './test/specs/')]
};

module.exports = {
  ...conf,
  ...custom
};
