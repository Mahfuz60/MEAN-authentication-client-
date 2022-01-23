import React, { useState } from "react";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  async function loginUser(event) {
    event.preventDefault();
    const responseData = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        rePassword,
      }),
    });
    const data = await responseData.json();
    console.log(data);
  }

  return (
    <div>
      <h1>LogIn Form</h1>
      <form onSubmit={loginUser}>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input
          type="password"
          value={rePassword}
          placeholder="ReType Password"
          onChange={(e) => setRePassword(e.target.value)}
        />
        <br />
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
}

export default Login;
