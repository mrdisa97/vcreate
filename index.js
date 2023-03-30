#!/usr/bin/env node

/**
 * vcreate
 * Create vue component from CLI
 *
 * @author Nikola Stankovic <https://www.github.com/mrdisa97>
 */

import initCli from './utils/init.js';
import cli from './utils/cli.js';
import fs from 'node:fs';
import process from 'node:process';
import path from 'path';
import { ComponentTemplate } from './templates/ComponentTemplate.js';
import chalk from 'chalk';

const input = cli.input;
const flags = cli.flags;
const { lang, sass } = flags;

function handleError(message, exitCode = 1) {
  console.log(chalk.bgRed.white(' ERROR '));
  console.log(`${chalk.red('MESSAGE:')} ${message}`);
  // eslint-disable-next-line no-process-exit
  process.exit(exitCode);
}

(async () => {
  const validOptions = ['component', 'c', 'view', 'v'];
  const inputOptions = input.filter(option => validOptions.includes(option));

  // Help option
  if (input.includes('help')) {
    cli.showHelp(0);
  }

  // Check if the user just typed vcreate
  if (input.length === 0) {
    await initCli();
    return;
  }

  // Options and component name validation
  if (inputOptions.length === 0) {
    handleError('No valid options provided');
  } else if (inputOptions.length === 1 && !input[1]) {
    handleError('Component name is missing');
  }

  // Options
  if (
    inputOptions.includes('component') ||
    inputOptions.includes('c') ||
    inputOptions.includes('view') ||
    inputOptions.includes('v')
  ) {
    // Determine the folder and file name for the new component
    const view = inputOptions.includes('view') || inputOptions.includes('v');
    const inputArr = input[1].split('.');
    let folderName = inputArr.slice(0, inputArr.length - 1).join('/');
    let componentName = inputArr[inputArr.length - 1];
    if (!componentName) {
      componentName = folderName;
      folderName = '';
    }
    componentName = componentName.charAt(0).toUpperCase() + componentName.slice(1); // Make first letter uppercase
    const fileName = `${componentName}.vue`;

    // Determine the path where the component file should be created
    const baseDir = view ? 'src/views' : 'src/components';
    const folderPath = folderName ? path.join(baseDir, folderName) : baseDir;
    const filePath = folderName ? path.join(folderPath, fileName) : path.join(baseDir, fileName);

    // If folderName is not empty, we need to create the folder if it doesn't exist
    if (inputArr.length > 0) {
      try {
        fs.mkdirSync(folderPath, { recursive: true });
      } catch (error) {
        if (error.code !== 'EEXIST') {
          handleError(`An error occurred while creating the folder: ${error.message}`);
        }
      }
    } else if (!fs.existsSync(baseDir)) {
      try {
        fs.mkdirSync(baseDir, { recursive: true });
      } catch (error) {
        if (error.code !== 'EEXIST') {
          handleError(`An error occurred while creating the folder: ${error.message}`);
        }
      }
    }

    // Check if the component file already exists
    if (fs.existsSync(filePath)) {
      handleError(`The file ${filePath} already exists.`);
    } else {
      // Create the component file
      fs.writeFileSync(filePath, ComponentTemplate(componentName, lang, sass));
      console.log(`${chalk.bgGreen.bold(' COMPONENT CREATED ')} 🎉`);
      console.log('\n');
      console.log(`${chalk.green.bold('PATH:')} ${filePath}`);
      console.log(`${chalk.green.bold('MESSAGE:')} Component ${componentName} created!`);
    }
  }
})();
