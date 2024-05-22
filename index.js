const inquirer = require('inquirer');

function init() {
    cli();
}

function cli() {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'hello?'
        }
    ])
    .then((res) => {
        console.log(res);
    })
}

init();