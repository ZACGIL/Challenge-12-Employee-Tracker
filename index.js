const inquirer = require('inquirer');
const { viewDepartments, viewRoles, viewEmployees, insertDepartment, insertRole, insertEmployee, updateEmployee, fetchEmployeesArray } = require('./assets/queries.js');
let employees = [];

function init() {
    startCLI();
    getEmployees();
    //console.log('goodbye');
}

function startCLI() {
    return inquirer
    .prompt([
        {
            type: 'list',
            name: 'option',
            message: 'Please select an option:',
            choices: [ 
            'View All Departments', 
            'View All Roles', 
            'View All Employees', 
            'Add a Department',
            'Add a Role',
            'Add an Employee',
            'Update an Employee Role',
            'Exit'
        ]}
    ])
    .then((res) => {
        checkOption(res.option);
    })
}

function checkOption(option) {
    if(option === 'View All Departments')
        return viewDepartments().then(()=>startCLI());
    if(option === 'View All Roles')
        return viewRoles().then(()=>startCLI());
    if(option === 'View All Employees')
        return viewEmployees().then(()=>startCLI());
    if(option === 'Add a Department')
        return addDepartmentCLI();
    if(option === 'Add a Role')
        return addRoleCLI();
    if(option === 'Add an Employee')
        return addEmployeeCLI();
    if(option === 'Update an Employee Role')
        return updateEmployeeCLI();
    if(option === 'Exit')
        return process.exit();
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
        insertDepartment(department);
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
            message: 'What department is it in (enter ID)?'
        },
    ])
    .then(({ role, salary, department }) => {
        console.log(`${role} has been added to Roles`);
        insertRole(role, salary, department);
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
            message: 'What is the their role (enter ID)?'
        },
        {
            type: 'input',
            name: 'manager',
            message: 'Who is their manager (enter ID)?'
        },
    ])
    .then(({ firstname, lastname, role, manager }) => {
        const name = `${firstname} ${lastname}`;
        console.log(`${name} has been added to Employees`);
        insertEmployee(firstname, lastname, role, manager);
        employees.push(lastname);
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
            name: 'name',
            message: 'Please select an employee:',
            choices: employees
        },
        {
            type: 'input',
            name: 'role',
            message: 'What is their new role (enter ID)?'
        }
    ])
    .then(({ name, role }) => {
        console.log(`${name}'s new role is ${role}`);
        updateEmployee(role, name);
    })
    .then(() => {
        startCLI();
    })
}

function getEmployees() {
    employees = [ 'Rodriguez', 'Brown', 'Lourd', 'Tupik', 'Doe', 'Singh', 'Allen', 'Chan' ];

    return employees;
}

init();
