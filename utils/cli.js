import meow from 'meow';
import meowHelp from 'cli-meow-help';

// Define flags for the application
const flags = {
  help: {
    type: `boolean`,
    default: false,
    alias: `h`,
    desc: `Show CLI help`
  },
  version: {
    type: `boolean`,
    alias: `v`,
    desc: `Show the version of current CLI`
  },
  type: {
    type: `string`,
    alias: `t`,
    default: `composition`,
    desc: `Specify which type of script you want to include in the generated code.`
  },
  lang: {
    type: `string`,
    alias: `l`,
    desc: `Lang for the script tag lang="ts"`
  },
  scss: {
    type: `boolean`,
    default: false,
    desc: `Use sass in your style tag lang="scss"`
  },
  scoped: {
    type: `boolean`,
    default: false,
    desc: `Use scoped style`
  }
};

// Define application commands
const commands = {
  help: { desc: `Print help info` },
  component: { desc: `Make component, required component name after command` },
  view: {
    desc: `Make component in views folder, required component name after command`
  }
};

// Define help cli
const helpText = meowHelp({
  name: `vcreate`,
  flags,
  commands
});

// Define aviliable options
const options = {
  inferType: true,
  description: false,
  hardRejection: false,
  flags
};

export default meow(helpText, options);
