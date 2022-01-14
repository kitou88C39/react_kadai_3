import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
//import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  //const navigate = useNavigate();
  //サインアップ後認証情報を更新
  //const signup = async (name, email, password, history) => {
  const signup = async (name, email, password, navigate) => {
    try {
      await auth.createUserWithEmailAndPassword(name, email, password);
      auth.onAuthStateChanged((user) => setCurrentUser(user));
      //history.push("/");
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };

  //ログインさせる
  //const login = async (email, password, history) => {
  const login = async (email, password, navigate) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      auth.onAuthStateChanged((user) => setCurrentUser(user));
      //history.push("/");
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };

  //初回アクセス時に認証済みかチェック
  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ signup, login, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider };
