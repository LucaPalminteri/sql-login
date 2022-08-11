const PORT = 3000;
const mysql = require('mysql')
const express = require('express');
const path = require('path')
const fs = require('fs');
const app = express();
const cors = require('cors');
app.use(cors());

// Express

// app.get('/', function (req, res) {
//     res.writeHead(200, {'content-type': 'text/html'})
//     fs.createReadStream('index.html').pipe(res);
// })

const server = app.listen(PORT, function () {
   const host = server.address().address
   const port = server.address().port

   console.log("Example app listening at http://", host, port)
})


// Database MySql

const conection = mysql.createConnection(
    {host: 'localhost',
    user: 'user',
    password: 'user',
    database: 'platziblog'
    }
)

conection.connect( (err)=> {
    if(err) throw err
    console.log('conection works');
})

function insertInSQL() {

}

// const insert = `INSERT INTO usuarios 
//         (email,
//         login,
//         nickname,
//         password) 
//         VALUES 
//         ('pedroExample@gmail.com',
//         'PedroExample',
//         'NickPedrExa',
//         'password'
//         )`
//const insert = "DELETE FROM usuarios WHERE email=NULL"

// conection.query(insert,(err,rows) => {
//     if(err) throw err
// })

conection.query('SELECT * FROM usuarios', (err,rows)=> {
    if(err) throw err
    usuarios = [];
    rows.forEach(row => {
        console.log(row);
        dataRow = {
            ID: row.id,
            Login: row.login,
            Nickname: row.nickname,
            Password: row.password,
            Email: row.email}
        usuarios.push(dataRow);
    })
    app.get('/users', function (req, res) {
        res.send(usuarios);
     })
})

conection.end();