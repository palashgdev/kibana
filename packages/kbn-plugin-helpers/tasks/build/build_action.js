var join = require('path').join;
var resolve = require('path').resolve;
var inquirer = require('inquirer');

var createBuild = require('./create_build');
var createPackage = require('./create_package');

module.exports = function (plugin, run, options) {
  options = options || {};
  var buildVersion = plugin.version;
  var kibanaVersion = (plugin.pkg.kibana && plugin.pkg.kibana.version) || plugin.pkg.version;
  var buildFiles = plugin.buildSourcePatterns;
  var buildTarget = join(plugin.root, 'build');

  // allow source files to be overridden
  if (options.files && options.files.length) {
    buildFiles = options.files;
  }

  // allow options to override plugin info
  if (options.buildDestination) buildTarget = resolve(plugin.root, options.buildDestination);
  if (options.buildVersion) buildVersion = options.buildVersion;
  if (options.kibanaVersion) kibanaVersion = options.kibanaVersion;

  var buildStep;
  if (kibanaVersion === 'kibana') {
    buildStep = askForKibanaVersion().then(function (customKibanaVersion) {
      return createBuild(plugin, buildTarget, buildVersion, customKibanaVersion, buildFiles);
    });
  } else {
    buildStep = createBuild(plugin, buildTarget, buildVersion, kibanaVersion, buildFiles);
  }

  return buildStep
    .then(function () {
      if (options.skipArchive) return;
      return createPackage(plugin, buildVersion);
    })
    .catch(function (err) {
      console.log('BUILD ACTION FAILED:', err);
    });
};

function askForKibanaVersion(cb) {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'kibanaVersion',
      message: 'What version of Kibana are you building for?'
    }
  ]).then(function (answers) {
    return answers.kibanaVersion;
  });
}