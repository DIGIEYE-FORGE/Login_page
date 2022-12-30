import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router";

const LoginPage = ({ user, setUser, handleLogin }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const nav = useNavigate()
  if (user) return <Navigate to="/page1" replace />;
  return (
    <div className="globalpage">
      <div
        className="form"
      >
        <div className="input-container ic2">
          <input
            id="email"
            className="input"
            type="text"
            placeholder="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="input-container ic1">
          <input
            id="password"
            className="input"
            type="password"
            placeholder="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button
          onClick={(e) => {
            if (email && password)
            {
                handleLogin(email, password)
                nav('/page1')
            }
          }}
          className="submit"
        >
          submit
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
