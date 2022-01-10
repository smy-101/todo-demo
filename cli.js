const program = require('commander')
const api = require('./index.js')

program
  .option('-d, --debug', 'output extra debugging')
  // .option('-s, --small', 'small pizza size')
  // .option('-p, --pizza-type <type>', 'flavour of pizza');

program
  .command('add')
  .description('add a task')
  .action((x) => {
    // console.log(x);
    api.add(x)
  });

program
  .command('clear')
  .description('clear all tasks')
  .action(() => {
    console.log('clear');
  });

program.parse(process.argv);