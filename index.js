#!/usr/bin/env node

/**
 * vue-create-component
 * Create vue component from CLI
 *
 * @author Nikola Stankovic </>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const fs = require('node:fs');
const process = require('node:process');
const path = require('path');
const { ComponentTemplate } = require('./templates/ComponentTemplate');
const chalk = require('chalk');

const input = cli.input;
const flags = cli.flags;
const { clear, debug, view, lang } = flags;

(async () => {
  init({ clear });
  input.includes(`help`) && cli.showHelp(0);

  debug && log(flags);

  // Determine the folder and file name for the new component
  const inputArr = input[0].split('.');
  let folderName = inputArr.slice(0, inputArr.length - 1).join('/');
  let componentName = inputArr[inputArr.length - 1];
  if (!componentName) {
    componentName = folderName;
    folderName = '';
  }
  componentName =
    componentName.charAt(0).toUpperCase() + componentName.slice(1); // Make first letter uppercase
  const fileName = `${componentName}.vue`;

  // Determine the path where the component file should be created
  const baseDir = view ? 'src/views' : 'src/components';
  const folderPath = folderName ? path.join(baseDir, folderName) : baseDir;
  const filePath = folderName
    ? path.join(folderPath, fileName)
    : path.join(baseDir, fileName);

  // If folderName is not empty, we need to create the folder if it doesn't exist
  if (folderName) {
    try {
      fs.mkdirSync(path.join(baseDir, folderName), { recursive: true });
    } catch (error) {
      if (error.code !== 'EEXIST') {
        console.log(chalk.bgRed.white('ERROR'));
        console.log(
          `${chalk.red(
            'ERROR:'
          )} An error occurred while creating the folder: ${error.message}`
        );
        process.exit(1);
      }
    }
  } else if (baseDir) {
    try {
      fs.mkdirSync(path.join(baseDir), { recursive: true });
    } catch (error) {
      if (error.code !== 'EEXIST') {
        console.log(chalk.bgRed.white('ERROR'));
        console.log(
          `${chalk.red(
            'ERROR:'
          )} An error occurred while creating the folder: ${error.message}`
        );
        process.exit(1);
      }
    }
  }

  // Check if the component file already exists
  if (fs.existsSync(filePath)) {
    console.log(chalk.bgRed.bold(' ERROR '));
    console.log(`${chalk.red('ERROR:')} The file ${filePath} already exists.`);
    process.exit(1);
  } else {
    // Create the component file
    fs.writeFileSync(filePath, ComponentTemplate(componentName, lang));
    console.log(`${chalk.bgGreen.bold(' COMPONENT CREATED ')} 🎉`);
    console.log('\n');
    console.log(`${chalk.green.bold('PATH:')} ${filePath}`);
    console.log(
      `${chalk.green.bold('MESSAGE:')} Component ${componentName} created!`
    );
  }
})();
