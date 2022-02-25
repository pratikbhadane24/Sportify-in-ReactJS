import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../actions/userActions";
import Loader from "../components/Loader";

export default function Profilescreen() {
  const loginstate = useSelector((state) => state.loginReducer);
  const updateuserstate = useSelector((state) => state.updateReducer);
  const { loading, success, error } = updateuserstate;
  const currentUser = loginstate.currentUser;
  const [name, setname] = useState(currentUser.name);
  const [email, setemail] = useState(currentUser.email);
  const dispatch = useDispatch();
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  function update(e) {
    e.preventDefault();
    // eslint-disable-next-line
    if (password == cpassword) {
      const updateduser = {
        name: name,
        email: email,
        password: password,
      };
      dispatch(updateUser(currentUser._id, updateduser));
    } else {
      alert("Passwords Don't Match!");
    }
  }

  return (
    <div className="signup-form container">
      <form
        className="card shadow-lg p-3 mb-5 bg-body rounded"
        onSubmit={update}
      >
        <h4>Update Your Profile</h4>
        <h1 className="text-center">You can update your Profile from here:</h1>
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
        <br />
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
