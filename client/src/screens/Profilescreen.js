import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";

export default function Profilescreen() {
  const loginstate = useSelector((state) => state.loginReducer);
  const currentUser = loginstate.currentUser;
  const [name, setname] = useState(currentUser.name);
  const [email, setemail] = useState(currentUser.email);

  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  function update() {
    if (password == cpassword) {
      const updateduser = {
        name: name,
        email: email,
        password: password,
      };
    } else {
      alert("Passwords Don't Match!");
    }
  }

  return (
    <div className="signup-form container">
      <form className="card" onSubmit={update}>
        <h4>Update Your Profile</h4>
        <h1 className="text-center">
          Please fill in this form to create an account!
        </h1>
        {loading && <Loader />}
        {error && (
          <div class="alert alert-danger" role="alert">
            Something went wrong!
          </div>
        )}
        {success && (
          <div class="alert alert-success" role="alert">
            Update Successful.
          </div>
        )}
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
              value={email}
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
          <button
            type="submit"
            className="w-100 btn btn-lg btn-dark btn-outline-info"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
