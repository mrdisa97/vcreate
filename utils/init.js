import welcome from 'cli-welcome';
import unhandled from 'cli-handle-unhandled';

const initCli = () => {
  unhandled();

  welcome({
    title: `vcreate`,
    tagLine: `by Nikola Stankovic`,
    description: 'Create vue component from CLI for more options type `vcreate help`',
    version: '0.0.3',
    bgColor: '#36BB09',
    color: '#000000',
    bold: true,
    clear: false
  });
};

export default initCli;
