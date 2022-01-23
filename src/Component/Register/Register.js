import React, { useState } from "react";

function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  async function registerUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        rePassword,
      }),
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <div>
      <h1>Registrations Form</h1>
      <form onSubmit={registerUser}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
