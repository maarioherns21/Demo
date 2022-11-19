import { useState } from "react";
import "./Login.css";
import PropTypes from "prop-types";


export default function Login({setToken}) {
"http://localhost:4000/movies/login"
const [loginData, setLoginData] = useState({ username: "", password: "" });
const [log, setLog] = useState(true);

const handleLogin = async (e) => {
  e.preventDefault();
  const token = { username: loginData.username, password: loginData.password };
  await fetch("http://localhost:9000/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(token),
  })
    .then((res) => res.json())
    .then((data) => {
      setToken(data);
      console.log(data);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const handleLog = async (e) => {
  e.preventDefault();
  const token = { username: loginData.username, password: loginData.password };
  await fetch("http://localhost:9000/users")
    .then((res) => res.json())
    .then((data) => {
      for (let tok in data) {
        if (
          token.username.toLowerCase() === data[tok].username.toLowerCase() &&
          token.password.toLowerCase() === data[tok].password.toLowerCase()
        ) {
          setToken(token);
          setLog(true);
        } else {
          console.log("the passowrd wasnt correct");
          setLog(false);
        }
      }
    })
    .catch((error) => {
      console.log(error.message);
    });
};

return (
  <div className="form">
   {log ? (
   <> 
     <h1>Log in</h1>
    <form onSubmit={handleLog} >
      <input type="email" value={loginData.username} onChange={(e)=> setLoginData({...loginData, username: e.target.value})} placeholder="email" />
      <input type="password" value={loginData.password} onChange={(e)=> setLoginData({...loginData, password: e.target.value})} placeholder="password" />
      <button>Log in</button>
    </form>
    </> 
    ) : (
      <>
      <h1>Sign up</h1>
      <form onSubmit={handleLogin} >
      <input type="email" value={loginData.username} onChange={(e)=> setLoginData({...loginData, username: e.target.value})} placeholder="email" />
      <input type="password" value={loginData.password} onChange={(e)=> setLoginData({...loginData, password: e.target.value})} placeholder="password" />
      <button>Sign Up</button>
    </form>
      </>
    )}
  </div>
)

}
  
Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
