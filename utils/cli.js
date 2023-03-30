import meow from 'meow';
import meowHelp from 'cli-meow-help';

const flags = {
  help: {
    type: `boolean`,
    default: false,
    alias: `h`,
    desc: `Print help info`
  },
  version: {
    type: `boolean`,
    alias: `v`,
    desc: `Should file be saved in views folder`
  },
  lang: {
    type: `string`,
    alias: `l`,
    desc: `Lang for the script and the style tag`
  },
  sass: {
    type: `boolean`,
    default: false,
    desc: `Use Sass in your component`
  }
};

const commands = {
  help: { desc: `Print help info` },
  component: { desc: `Make component, required component name after command` },
  view: {
    desc: `Make component in view folder, required component name after command`
  }
};

const helpText = meowHelp({
  name: `vcreate`,
  flags,
  commands
});

const options = {
  inferType: true,
  description: false,
  hardRejection: false,
  flags
};

export default meow(helpText, options);
