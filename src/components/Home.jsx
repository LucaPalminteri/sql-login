import '../styles/Home.css'
import { useState } from 'react';
//const mysql = require('../Server/connectionSQL')


const Home = ()=> {

    const [inputs, setInput] = useState({
        nickname: "",
        email: "",
        login: "",
        password: "",
      });

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inputs)
    };

    const TABLE = `usuarios`;

      function submitBtn() {
        let q = `INSERT INTO ${TABLE}
            (nickname,
                email,
                login,
                password) 
            VALUES
            (${inputs.nickname},
                ${inputs.email},
                ${inputs.login},
                ${inputs.password})`
                console.log(q);

        fetch('http://localhost:3000/users', requestOptions)
        //.then(response => response.json())
        .then(data => console.log(data) )
        .catch(err => console.log(err))
      }


    return(
        <div>
            <h1>Home</h1>
            <ul>
                <li>Log Out</li>
                <li>Profile</li>
                <li>Settings</li>
            </ul>

            <div className='inputs'>
                <label htmlFor="nickname">Nickname</label>
                <input type="text" name="nickname" id="nickname" 
                    onChange={(e) => setInput((prev) => ({ ...prev, nickname: e.target.value }))}
                />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" 
                    onChange={(e) => setInput((prev) => ({ ...prev, email: e.target.value }))}
                />
                <label htmlFor="login">Login</label>
                <input type="text" name="login" id="login" 
                    onChange={(e) => setInput((prev) => ({ ...prev, login: e.target.value }))}
                />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" 
                    onChange={(e) => setInput((prev) => ({ ...prev, password: e.target.value }))}
                />
                <button type='submit' onClick={submitBtn}>Submit</button>
            </div>

        </div>
    )
}

export default Home