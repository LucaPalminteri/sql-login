const mysql = require('mysql')
const db = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'user',
    database: 'platziblog'
})

module.exports = db;