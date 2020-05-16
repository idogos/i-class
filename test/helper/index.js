const lookupFiles = require("./lookupFiles");

module.exports = {
  lookupFilesHandler(specs) {
    console.info('确保测试用例以.spec.js或者.spec.ts结尾');
    return lookupFiles(specs);
  }
};
