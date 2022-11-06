import { useState } from "react";


export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.username;
  };
  // userToken?.token;  the key was name token
  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.username);
  };

  // userToken.token
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("token")));

  const logout = () => {
    localStorage.removeItem("token");

    setUser(null);
  };

  return {
    setToken: saveToken,
    token,
    logout,
    user,
  };
}

  