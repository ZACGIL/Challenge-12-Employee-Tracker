const { connect, disconnect } = require('./connection');
let client;

async function init(){
    client = await connect();
}

async function fetchAllDepartments() {
    let res = await client.query("SELECT * FROM DEPARTMENT;")
    return res.rows;
}

async function fetchAllRoles() {
    let res = await client.query("SELECT * FROM ROLE;")
    return res.rows;
}

async function fetchAllEmployees() {
    let res = await client.query("SELECT * FROM EMPLOYEE;")
    return res.rows;
}

async function viewDepartments() {
    let departments = await fetchAllDepartments();
    console.table(departments);
}

async function viewRoles() {
    let roles = await fetchAllRoles();
    console.table(roles);
}

async function viewEmployees() {
    let employees = await fetchAllEmployees();
    console.table(employees);
}

init();

module.exports = { viewDepartments, viewRoles, viewEmployees }