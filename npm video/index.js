// const chalk=require("chalk");

// console.log(chalk.blue('Hello world!'));
import chalk from 'chalk';
import validator from 'validator';
// console.log(chalk.blue('Hello world!'));
const res=validator.isEmail('foo@bar.com');
console.log(res ? chalk.green.inverse(res):chalk.red.inverse(res));
