import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
// import { BrowserRouter as Routes, Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import { AuthProvider } from "./auth/AuthProvider";
//import { PrivateRoute } from "./auth/PrivateRoute";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </AuthProvider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
