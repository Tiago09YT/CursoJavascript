import * as controller from './modulo-es6/controller.js';
import chalk from 'chalk';


const sum = controller.suma(1,2)
const mult = controller.multiplica(4,5)
console.log(sum)
console.log(chalk.green(mult))

