// Importar el módulo 'pg'
const { Client, Pool } = require('pg');

// Configuración para la conexión como Cliente
const cliente = new Client({
    user: 'node_user',
    host: 'localhost',
    database: 'db_node',
    password: 'node_password',
    port: 5432,
});

// Conectar como Cliente y verificar la conexión
cliente.connect();
cliente.query('SELECT NOW()', (err, res) => {
    console.log('Conexión Cliente:', err ? err.stack : res.rows[0]);
    cliente.end();
});

// Configuración para la conexión como Pool
const pool = new Pool({
    user: 'node_user',
    host: 'localhost',
    database: 'db_node',
    password: 'node_password',
    port: 5432,
});

// Conectar como Pool y verificar la conexión
pool.query('SELECT NOW()', (err, res) => {
    console.log('Conexión Pool:', err ? err.stack : res.rows[0]);
    pool.end();
});

// Conexión usando URI String
const connectionString = 'postgresql://node_user:node_password@localhost:5432/db_node';

// Conectar usando Pool con URI String
const poolUri = new Pool({ connectionString });
poolUri.query('SELECT NOW()', (err, res) => {
    console.log('Conexión URI Pool:', err ? err.stack : res.rows[0]);
    poolUri.end();
});

// Conectar usando Cliente con URI String
const clientUri = new Client({ connectionString });
clientUri.connect();
clientUri.query('SELECT NOW()', (err, res) => {
    console.log('Conexión URI Cliente:', err ? err.stack : res.rows[0]);
    clientUri.end();
});
