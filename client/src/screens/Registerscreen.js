import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerNewUser } from "../actions/userActions";

export default function Registerscreen() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

const dispatch = useDispatch()

  const register = (e) => {
    e.preventDefault();
    const user = {
      name: name,
      email: email,
      password: password,
    };
    if (password == cpassword) {
      dispatch(registerNewUser())
    } else {
      alert("The passwords don't match.");
    }
  };

  return (
    <div className="signup-form">
      <form onSubmit={register}>
        <h4>Sign Up</h4>
        <h1 className="text-center">
          Please fill in this form to create an account!
        </h1>
        <hr />
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <span className="fa fa-user fa-2x"></span>
              </span>
            </div>
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              value={name}
              required
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fa fa-envelope fa-lg"></i>
              </span>
            </div>
            <input
              type="email"
              placeholder="E-mail"
              className="form-control"
              value={name}
              required
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fa fa-lock fa-2x"></i>
              </span>
            </div>
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              value={password}
              required
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fa fa-lock fa-2x"></i>
                <i className="fa fa-check fa-4x"></i>
              </span>
            </div>
            <input
              type="password"
              placeholder="Confirm Password"
              className="form-control"
              value={cpassword}
              required
              onChange={(e) => {
                setcpassword(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="form-check-label">
            <input type="checkbox" required="required" /> I accept the{" "}
            <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a>
          </label>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-lg">
            Register
          </button>
        </div>
      </form>
      <div className="text-center">
        Already have an account?{" "}
        <a className="text-dark" href="/login">
          Login here
        </a>
      </div>
    </div>
  );
}
