const fs = require("fs");
const path = require("path");
const istanbul = require("istanbul");
const rollupPluginIstanbul = require("rollup-plugin-istanbul");
const { Spec } = require("../__base/reporters");

module.exports = function (runner, option) {
  const collector = new istanbul.Collector();
  const reporter = new istanbul.Reporter();
  // rollupPluginIstanbul({
  //   exclude: [path.resolve('test/**/*'), 'node_modules/**/*']
  // });
  reporter.addAll(['lcov', 'json']);
  new Spec(runner);
  runner.on('end', function () {
    collector.add(global.__coverage__ || {});
    reporter.write(collector, false, function () {
      console.log('All reports generated');
    });
  });
};
