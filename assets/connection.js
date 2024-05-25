const pg = require('pg');
const { Client } = pg;

const client = new Client({
    user: 'postgres',
    password: '1',
    host: 'localhost',
    port: 5432,
    database: 'tracker',
})

async function connect() {
    await client.connect()
       
    return client;
}

async function disconnect() {
    await client.end()
}

module.exports = { connect, disconnect }