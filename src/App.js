import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Counter from "./counter";
import Protected from "./Protected";
import Profile from "./Profile";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to={"/"}>Home </Link>
          </li>
          <li>
            <Link to={"/counter"}>Counter</Link>
          </li>
          <li>
            <Link to={"/protected"}>Protected</Link>
          </li>

          {isLogin ? (
            <li>
              <button onClick={handleLogin}>Logout</button>
            </li>
          ) : (
            <li>
              <button onClick={handleLogin}>Login</button>
            </li>
          )}
        </ul>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route
            path="/protected"
            element={
              <Protected isLogin={isLogin}>
                <Profile />
              </Protected>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
