import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { loginWithEmailAndPassword } from "../firebase";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginWithEmailAndPassword(email, password);
      console.log(res);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email address"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Register
        </button>
        <p>
          Don't Have an Accout?
          <NavLink to="/register">Register</NavLink>
        </p>
      </form>
    </div>
  );
};

export default Register;
