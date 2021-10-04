import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";

export default function Loginscreen() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const dispatch = useDispatch();

  const login = (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    dispatch(loginUser(user));
  };

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div className="login-body">
      <div className="form-signin">
        <form onSubmit={login}>
          <img
            src="https://i.ibb.co/kJHDDW1/loginlogo.gif"
            width="300"
            height="120"
          />
          <br />
          <br />
          <h1 className="h3 mb-3 text-center fw-normal">Please Log in</h1>
          <div className="form-floating">
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
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
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
            <label for="floatingPassword">Password</label>
          </div>
          <button
            id="sign-in-button"
            className="w-100 btn btn-lg btn-dark btn-outline-info"
            type="submit"
          >
            Log in
          </button>
          <br />
          <br />
          <label>
            New Here? <a href="/register">Register</a>
          </label>
          <br />
          <br />
          <div className="row">
            <div className="col-md-12">
              <a
                className="w-100 btn btn-lg btn-google btn-block btn-outline bg-info ghov"
                href="#"
              >
                <img
                  src="https://img.icons8.com/color/16/000000/google-logo.png"
                  height="30"
                />{" "}
                Login With Google
              </a>
            </div>
          </div>

          <br />
          <p className="mt-5 mb-3 text-muted text-center">
            &copy; Sportify ~ 2021
          </p>
        </form>
      </div>
    </div>
  );
}
