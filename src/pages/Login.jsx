import React from "react";

function Login() {
  return (
    <div>
      <div>
        <div>
          <img src="/login-photo.jpg" alt="login" />
        </div>
        <div>
          <label>Jag loggar in som </label>
          <select>
            <option>Vårdgivare</option>
            <option>Vårdtagare</option>
            <option>Anhörig</option>
          </select>
        </div>
        <div>
          <label>Username</label>
          <input placeholder="Enter username" />
          <label>Password</label>
          <input placeholder="Enter password" />
        </div>
        <div>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
