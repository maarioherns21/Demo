import { useState } from "react";
import "./Login.css";
import PropTypes from "prop-types";


export default function Login({ setToken }) {
  const [isLogin, setIsLogin] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = { username: loginForm.username, password: loginForm.password };
    await fetch("http://localhost:4000/movies/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(token),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("==>", data);
        setToken(data);
        setIsLogin(true);
      })
      .catch((error) => {
        console.log(error.message);
        setIsLogin(false);
      });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h1>Please Login</h1>
        <input
          type="text"
          placeholder="username"
          value={loginForm.username}
          onChange={(e) =>
            setLoginForm({ ...loginForm, username: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="password"
          value={loginForm.password}
          onChange={(e) =>
            setLoginForm({ ...loginForm, password: e.target.value })
          }
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
