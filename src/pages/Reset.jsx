import React, { useState } from "react";
import { sendPasswordReset } from "../firebase";

const Reset = () => {
  const [email, setEmail] = useState();

  const handleReset = async (e) => {
    e.preventDefault();
    sendPasswordReset(email);
  };
  return (
    <div>
      <h1>Reset Password</h1>
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

        <button type="submit" onClick={handleReset}>
          Send Password Reset Email
        </button>
      </form>
    </div>
  );
};

export default Reset;
