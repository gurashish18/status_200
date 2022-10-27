import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login_container">
      <form className="login_from" onSubmit={() => alert("Hello")}>
        <h1>Welcom back!</h1>
        <p>
          Don't have an Account? <Link to="/signup">Click here</Link>
        </p>

        <input type="text" placeholder="Email id" />
        <input type="password" placeholder="Password" />

        <input className="button" type="submit" value="LOGIN" />
      </form>
    </div>
  );
}

export default Login;
