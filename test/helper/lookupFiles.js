const fs = require("fs");
const path = require("path");

/**
 * 查找文件
 * @param {Array} filesArgs
 * @returns {Array}
 */
function lookupFiles(filesArgs) {
  const files = [];
  _dfs(filesArgs);
  return files;
  function _dfs(args) {
    args.forEach(file => {
      let stat = fs.statSync(file);
      if(stat.isDirectory()) {
        fs.readdirSync(file).forEach(subFile => {
          const fileName = path.join(file, subFile);
          files.concat(_dfs([fileName]));
        });
      }
      if(stat.isFile()) {
        if(/\.spec\.(js|ts)$/.test(file)) {
          files.push(file);
        }
      }
    });
  }
}

module.exports = lookupFiles;
