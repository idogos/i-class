const path = require("path");
module.exports = {
  require: ['@babel/register'],
  spec: [path.join('.', './test/specs/')]
};
