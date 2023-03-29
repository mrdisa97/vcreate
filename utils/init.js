const welcome = require('cli-welcome');
const pkg = require('./../package.json');
const unhandled = require('cli-handle-unhandled');
const fs = require('fs');

const INIT_FLAG_FILE = './.vuecreatecomponentinit';

module.exports = ({ clear = true }) => {
  unhandled();

  if (!fs.existsSync(INIT_FLAG_FILE)) {
    // First run, show welcome message and create init flag file
    welcome({
      title: `vue-create-component`,
      tagLine: `by Nikola Stankovic`,
      description: pkg.description,
      version: pkg.version,
      bgColor: '#36BB09',
      color: '#000000',
      bold: true,
      clear
    });

    fs.writeFileSync(INIT_FLAG_FILE, '');
  }
};
