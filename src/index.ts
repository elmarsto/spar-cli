const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const path = require('path');
const program = require('commander');
const spar  = require('spar-lib');

clear();

console.log(chalk.red(figlet.textSync(spar.translate("some other str"), { horizontalLayout: 'full' })));
