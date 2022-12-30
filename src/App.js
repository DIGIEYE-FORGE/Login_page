import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import LoginPage from "./pages/login";

const  App = () => {
  const [user, setUser] = useState(null);
  // const nav = useNavigate()
  const handleLogin = (email, pass) => {
    setUser({ email: email, pass: pass });
    // nav('/page1')
  };
  const handleLogout = () => setUser(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LoginPage
              user={user}
              setUser={setUser}
              handleLogin={handleLogin}
              handleLogout={handleLogout}
            />
          }
        ></Route>
        <Route
          path="/page1"
          element={<Page1 user={user} setUser={setUser} />}
        ></Route>
        <Route
          path="/page2"
          element={<Page2 user={user} setUser={setUser} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
