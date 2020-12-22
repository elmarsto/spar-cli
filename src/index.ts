const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const path = require('path');
const program = require('commander');
const spar  = require('spar-lib');

const src = `
public function hello() {
    console.log("hello, whirl!");
}
`
clear();

console.log(chalk.red(spar.translate(src)));
