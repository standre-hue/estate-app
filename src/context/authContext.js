import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    const res = await axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/login',
      data: inputs,
      config: { headers: {'Content-Type': 'multipart/form-data' }}
      })
      /*.then(function (response) {
          //handle success
          const data = response
          console.log(data);
      })*/
      /*.catch(function (response) {
          //handle error
          console.log(response);
      });*/

    setCurrentUser(res);
    localStorage.setItem("user", JSON.stringify(res.data));
  };

  const logout = async (inputs) => {
    await axios.post("http://localhost:8000/api/logout");
    setCurrentUser(null);
    localStorage.removeItem("user");
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
