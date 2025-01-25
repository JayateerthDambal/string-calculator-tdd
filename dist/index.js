#!/usr/bin/env node
import { Command } from 'commander';
import { add } from './stringCalculator.js';
import chalk from 'chalk';
const program = new Command();
// console.log(
//     figlet.textSync('String Calculator', {
//         horizontalLayout: 'default',
//         verticalLayout: 'default',
//         font: "Banner3-D"
//     })
// );
console.log(`${chalk.bgBlueBright.black("String Calculator - TDD")}  ${chalk.bgCyanBright.black("--> By Jayateerth Dambal")}`);
program
    .name('string-calculator')
    .description(chalk.greenBright('A CLI tool for testing the String Calculator built with TDD'))
    .version('1.0.0');
program
    .command('add')
    .description('Add numbers from a string input')
    .argument('<input>', chalk.yellow('Comma-separated numbers or custom delimiter string'))
    .action((input) => {
    try {
        const result = add(input);
        console.log(`\n${chalk.bold.green('Operation:')} ${chalk.cyan(input)}`);
        console.log(`${chalk.bold.green('Result:')} ${chalk.bgBlueBright.black(` ${result} `)}\n`);
    }
    catch (error) {
        console.error(`\n${chalk.redBright('Error:')} ${error.message}\n`);
    }
});
program
    .command('benchmark')
    .description('Run a benchmark with a large and complex input')
    .action(() => {
    console.log(chalk.blueBright('\nStarting benchmark...'));
    const largeInput = Array(10000)
        .fill(null)
        .map(() => Math.floor(Math.random() * 1001))
        .join(',');
    const iterations = 1000;
    const times = [];
    console.log(`${chalk.cyan('Benchmarking')} ${chalk.yellow(iterations)} iterations on a large input...\n`);
    for (let i = 0; i < iterations; i++) {
        const start = performance.now();
        add(largeInput);
        const end = performance.now();
        times.push(end - start);
    }
    // Calculates avg execution time
    const totalTime = times.reduce((sum, time) => sum + time, 0);
    const avgTime = totalTime / iterations;
    console.log(`${chalk.green('Average Execution Time:')} ${chalk.yellow(`${avgTime.toFixed(2)}ms`)}`);
    console.log(`${chalk.green('Total Time for')} ${chalk.yellow(iterations)} ${chalk.green('iterations:')} ${chalk.yellow(`${totalTime.toFixed(2)}ms`)}\n`);
    console.log(chalk.blueBright('Benchmark complete!'));
});
program
    .command('test')
    .description('Run predefined test cases')
    .action(() => {
    console.log(chalk.blueBright('\nRunning Test Cases...\n'));
    const testCases = [
        { input: '', expected: 0, description: 'Empty string' },
        { input: '9', expected: 9, description: 'Single number' },
        { input: '4,5', expected: 9, description: 'Two comma-separated numbers' },
        { input: '9\n8,7', expected: 24, description: 'Newline delimiters' },
        { input: '//;\n1;2', expected: 3, description: 'Custom delimiters' },
        { input: '//[***]\n1***2***3', expected: 6, description: 'Multi-character delimiter' },
        { input: '//[*][%]\n1*2%3', expected: 6, description: 'Multiple delimiters' },
        { input: '//[##][$$]\n4##3$$2', expected: 9, description: 'Multiple delimiters (complex)' },
        { input: '//[.*+]\n5.*+3.*+2', expected: 10, description: 'Special regex characters as delimiter' },
        { input: '-1,2', expected: 'negatives not allowed: -1', description: 'Negative input (single)' },
        { input: '2,-4,-5', expected: 'negatives not allowed: -4, -5', description: 'Negative input (multiple)' },
        { input: '2,1001', expected: 2, description: 'Ignores numbers > 1000 (single)' },
        { input: '1001,1002', expected: 0, description: 'Ignores numbers > 1000 (all ignored)' },
        { input: '5,1200,3', expected: 8, description: 'Ignores numbers > 1000 (partial sum)' },
        { input: '1000,2', expected: 1002, description: 'Edge case: Number equal to 1000' },
    ];
    testCases.forEach(({ input, expected, description }, index) => {
        try {
            const result = add(input);
            const success = result === expected;
            console.log(`${chalk.bold.green(`Test ${index + 1}:`)} ${chalk.cyan(description)}`);
            console.log(`${chalk.bold.yellow('Input:')} ${chalk.white(input)}`);
            console.log(`${chalk.bold.yellow('Expected:')} ${chalk.white(expected)}`);
            console.log(`${chalk.bold.yellow('Result:')} ${success
                ? chalk.bgGreen.black(` ${result} `)
                : chalk.bgRed.white(` ${result} `)}`);
            if (success) {
                console.log(chalk.green('✔ Test Passed\n'));
            }
            else {
                console.log(chalk.red('✘ Test Failed\n'));
            }
        }
        catch (error) {
            const errorMessage = error.message;
            const success = errorMessage === expected;
            console.log(`${chalk.bold.green(`Test ${index + 1}:`)} ${chalk.cyan(description)}`);
            console.log(`${chalk.bold.yellow('Input:')} ${chalk.white(input)}`);
            console.log(`${chalk.bold.yellow('Expected:')} ${chalk.white(expected)}`);
            console.log(`${chalk.bold.yellow('Error:')} ${success
                ? chalk.bgGreen.black(` ${errorMessage} `)
                : chalk.bgRed.white(` ${errorMessage} `)}`);
            if (success) {
                console.log(chalk.green('✔ Test Passed\n'));
            }
            else {
                console.log(chalk.red('✘ Test Failed\n'));
            }
        }
    });
    console.log(chalk.blueBright('All tests completed!\n'));
});
program.parse(process.argv);
if (!process.argv.slice(2).length) {
    program.outputHelp();
}
