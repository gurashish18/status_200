import React from "react";
import "./Signup.scss";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  return (
    <div className="signup_container">
      <form className="signup_from" onSubmit={() => navigate("/home")}>
        <h1>Signup</h1>

        <p>
          Already have an Account? <Link to="/login">Click here</Link>
        </p>

        <div className="input_group">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>

        <input type="email" placeholder="Email id" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />

        <input className="button" type="submit" value="SIGN UP" />
      </form>
    </div>
  );
}

export default Signup;
