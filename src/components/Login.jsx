import React from "react";
import "../styles/Login.css";
import { useState, useEffect } from "react";

export default function Login() {
  const [dataRow, setDataRow] = useState([]);
  const [isConsult, setIsConsult] = useState(false);
  const [isHelp, setIsHelp] = useState(false);
  const [inputs, setInput] = useState({
    ID: 1,
    username: "",
    password: "",
  });

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setDataRow(data));
  }, []);

  function consultHandler() {
    setIsConsult(prev => !prev);
  }

  if(!isHelp && isConsult) setIsConsult(false)

  function singupHandler() {
    alert('create acount')
  }

  function loginHandler() {
    let response = false;
    dataRow.forEach((element) => {
      if (
        element.Login == inputs.username ||
        element.Nickname == inputs.username ||
        (element.Email == inputs.username &&
          element.Password == inputs.password)
      )
        response = true;
    });
    if (response) alert("Successfully logged");
    else alert("wrong");
  }

  return (
    <div className="login">
      <h1>MySQL</h1>
      <div className="login__input">
        <h2>Log In</h2>
        <label htmlFor="username">Username</label>
        <input
          onChange={(e) =>
            setInput((prev) => ({ ...prev, username: e.target.value }))
          }
          type="text"
          name="username"
          id="username"
          placeholder="Type username"
        />
        <label htmlFor="username">Password</label>
        <input
          onChange={(e) =>
            setInput((prev) => ({ ...prev, password: e.target.value }))
          }
          type="password"
          name="password"
          id="password"
          placeholder="Type Password"
        />
        <div className="btn-container">
          <button id="btn-singup" onClick={singupHandler}>
            Sing Up
          </button>
          <button id="btn-login" onClick={loginHandler}>
            Log In
          </button>
        </div>
          <button className="btn-help" id="btn-login" onClick={()=>setIsHelp(prev => !prev)}>
            {isHelp ? "Hide Help" : "Show Help"}
          </button>
        {isHelp ? <div className="help"><label htmlFor="name">ID:</label>
        <input
          type="number"
          name="name"
          id="name"
          min="1"
          max={dataRow.length}
          value={inputs.ID}
          onChange={(e) =>
            setInput((prev) => ({ ...prev, ID: e.target.value }))
          }
        />
        <button id="btn-consult" onClick={consultHandler}>
          {isConsult ? "Hide" : "Consult"}
        </button></div> : <></>}
      </div>
      {isConsult && 
      <div className="consult">
        <span><strong>ID</strong>: {dataRow[inputs.ID - 1].ID}</span> <br/>
        <span><strong>Email</strong>: {dataRow[inputs.ID - 1].Email}</span> <br/>
        <span><strong>Nickname</strong>: {dataRow[inputs.ID - 1].Nickname}</span> <br/>
        <span><strong>Login</strong>: {dataRow[inputs.ID - 1].Login}</span> <br/>
        <span><strong>Password</strong>: {dataRow[inputs.ID - 1].Password}</span>
        </div>}
    </div>
  );
}
