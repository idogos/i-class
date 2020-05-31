const fs = require("fs");
const path = require("path");
const Mocha = require("mocha");
const { lookupFilesHandler, cover } = require("./helper");
const options = require("./__base/conf");


const { spec } = options;
const requires = options.require;
const cwd = (exports.cwd = process.cwd());
const mocha = new Mocha(options);

// 加载前置依赖
requires.forEach(mod => {
  let modPath = mod;
  if(fs.existsSync(path.join(cwd, mod)) || fs.existsSync(path.join(cwd, `${mod}.js`))) {
    modPath = path.resolve(mod);
  }
  require(modPath);
});

async function run() {
  lookupFilesHandler(spec)
    .forEach(specFile => {
      mocha.addFile(specFile);
    });
  mocha.reporter(cover);
  await mocha.loadFilesAsync();
  return mocha.run();
}

try {
  return run();
} catch (err) {
  console.log(err);
}
