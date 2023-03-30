const welcome = require('cli-welcome');
const pkg = require('./../package.json');
const unhandled = require('cli-handle-unhandled');

module.exports = () => {
  unhandled();

  // First run, show welcome message and create init flag file
  welcome({
    title: `vcreate`,
    tagLine: `by Nikola Stankovic`,
    description: pkg.description,
    version: pkg.version,
    bgColor: '#36BB09',
    color: '#000000',
    bold: true,
    clear: false
  });
};
