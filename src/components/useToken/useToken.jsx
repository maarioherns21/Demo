import { useState } from "react";


export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.username;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.username);
  };

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

  