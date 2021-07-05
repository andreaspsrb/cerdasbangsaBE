// const mysql2 = require('mysql2');
let dotenv = require('dotenv');
let env = dotenv.config();
const mysql2 = require('mysql2');
const conn = mysql2.createConnection({
    host: process.env.heri_HOST,
    user: process.env.heri_USERNAME,
    password: process.env.heri_PASSWORD,
    database: process.env.heri_DATABASE,
})


conn.connect((err) => {
    if (err) {
        throw err;
    } else {
        console.log('Mysql terkoneksi');
    }
})


module.exports = conn;