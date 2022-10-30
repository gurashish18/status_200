import React from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="login_container">
      <form className="login_from" onSubmit={() => navigate("/home")}>
        <h1>Welcome back!</h1>
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
