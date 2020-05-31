const path = require("path");
module.exports = {
  require: ['@babel/register', 'chai/register-assert', 'chai/register-expect', 'chai/register-should'],
  spec: [path.join('.', './test/specs/')]
};
