const { connect } = require('./connection');
let client;

async function init(){
    client = await connect();
    //console.log('hello');
}

init();

async function fetchAllDepartments() {
    let string = "SELECT * FROM department;"
    let res = await client.query(string)
    return res.rows;
}

async function fetchAllRoles() {
    let string = "SELECT * FROM role JOIN department ON department.id = role.department_id;"
    let res = await client.query(string)
    return res.rows;
}

async function fetchAllEmployees() {
    let string = "SELECT * FROM employee;"
    let res = await client.query(string)
    return res.rows;
}

async function insertDepartment(department) {
    const string = 'INSERT INTO department(department_name) VALUES($1)'
    const values = [`${department}`];
    await client.query(string, values);
}

async function insertRole(role, salary, department) {
    const string = 'INSERT INTO role(title, salary, department_id) VALUES($1, $2, $3) RETURNING *'
    const values = [`${role}`, `${salary}`, `${department}`];
    await client.query(string, values);
}

async function insertEmployee(first, last, role, manager) {
    const string = 'INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES($1, $2, $3, $4)'
    const values = [`${first}`, `${last}`, `${role}`, `${manager}`];
    await client.query(string, values);
}

async function updateEmployee(role, name) {
    const string = `UPDATE employee SET role_id = ${role} WHERE last_name = '${name}';`
    await client.query(string);
}

async function fetchEmployeesArray() {
    const string = `SELECT last_name FROM employee`
    let res = await client.query(string)
    let employeesByLastName = await res.rows.map(el => el.last_name);
    return await employeesByLastName;
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

module.exports = { viewDepartments, viewRoles, viewEmployees,
    insertDepartment, insertRole, insertEmployee, updateEmployee, fetchEmployeesArray }