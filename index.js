const inquirer = require('inquirer');

const employees = [ 'employees go here' ]

function init() {
    startCLI();
}

function startCLI() {
    return inquirer
    .prompt([
        {
            type: 'list',
            name: 'option',
            message: 'Please select an option:',
            choices: [ 
            'view all deparments', 
            'view all roles', 
            'view all employees', 
            'add a department',
            'add a role',
            'add an employee',
            'update an employee role'
        ]}
    ])
    .then((res) => {
        checkOption(res.option);
    })
}

function checkOption(option) {
    if(option === 'view all deparments')
        return console.log('--show departments--');
    if(option === 'view all roles')
        return console.log('--show roles--');
    if(option === 'view all employees')
        return console.log('--show employees--');
    if(option === 'add a department')
        return addDepartmentCLI();
    if(option === 'add a role')
        return addRoleCLI();
    if(option === 'add an employee')
        return addEmployeeCLI();
    if(option === 'update an employee role')
        return updateEmployeeCLI();
}

function addDepartmentCLI() {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'department',
            message: 'What is the name of the department?'
        },
    ])
    .then(({ department }) => {
        console.log(`${department} has been added to Departments`);
    })
    .then(() => {
        startCLI();
    })
}

function addRoleCLI() {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'role',
            message: 'What is the name of the role?'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is its salary?'
        },
        {
            type: 'input',
            name: 'department',
            message: 'What department is it in?'
        },
    ])
    .then(({ role, salary, department }) => {
        console.log(`${role} has been added to Roles`);
    })
    .then(() => {
        startCLI();
    })
}

function addEmployeeCLI() {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'firstname',
            message: 'What is the employees first name?'
        },
        {
            type: 'input',
            name: 'lastname',
            message: 'What is the employees last name?'
        },
        {
            type: 'input',
            name: 'role',
            message: 'What is the their role?'
        },
        {
            type: 'input',
            name: 'manager',
            message: 'Who is their manager?'
        },
    ])
    .then(({ firstname, lastname, role, manager }) => {
        const name = `${firstname} ${lastname}`;
        console.log(`${name} has been added to Employees`);
    })
    .then(() => {
        startCLI();
    })
}

function updateEmployeeCLI() {
    return inquirer
    .prompt([
        {
            type: 'list',
            name: 'employee',
            message: 'Please select an employee:',
            choices: employees
        },
        {
            type: 'input',
            name: 'role',
            message: 'What is their new role?'
        }
    ])
    .then(({ employee, role }) => {
        console.log(`${employee}'s new role is ${role}`);
    })
    .then(() => {
        startCLI();
    })
}

init();