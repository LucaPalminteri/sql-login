const express = require('express');
const cors = require('cors');
const db = require('./db')

const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());

// Express

const server = app.listen(PORT, function () {
   const host = server.address().address
   const port = server.address().port

   console.log("Example app listening at http://", host, port)
})

// Route to get all posts

db.connect( (err)=> {
    if(err) throw err
    console.log('conection works');
})

// db.query("SELECT * FROM usuarios", (err,result)=>{
//     app.get("/users", (req,res)=>{
//         console.log(result);
//         if(err) {
//         console.log(err)
//         } 
//     res.send(result)
//     });   
// });
function insertInSQL(q) {
    db.query(q, (err,result)=>{
        if(err) {
        console.log(err)
        } 
        console.log(result)
    }); 
}

// db.query('', (err,rows)=> {
//     if(err) throw err
// })

//const insert = "DELETE FROM usuarios WHERE email=NULL"

// const insert = `INSERT INTO usuarios
// (nickname,
//     email,
//     login,
//     password) 
// VALUES
// (1,
//     1,
//     1,
//     1)`

// db.query(insert,(err,rows) => {
//     if(err) throw err
// })

db.query('SELECT * FROM usuarios', (err,rows)=> {
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

db.end();