import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Navbar() {
  const cartreducer = useSelector((state) => state.cartReducer);

  const { cartItems } = cartreducer;

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="/">
            Sportify
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <span className="fa fa-home"></span> Home
                  <span className="sr-only"></span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about-us">
                  <span className="fa fa-info"></span> About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span className="fa fa-address-book"></span> Contact Us
                </a>
              </li>
            </ul>

            <div className="navbar-nav ms-auto">
              {currentUser ? (
                <div className="dropdown mt-2">
                  <button
                    className="btn btn-dark dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {currentUser.name}
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="/profile">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Orders
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item">Logout</a>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="mt-3">
                  <span className="navbar-text p-3">
                    <a href="/register">
                      <span className="fa fa-user-plus"></span> Register
                    </a>
                  </span>
                  <span className="navbar-text p-3">
                    <a href="/login">
                      <span className="fa fa-sign-in" aria-hidden="true"></span>{" "}
                      Login
                    </a>
                  </span>
                </div>
              )}
              ;
              <span className="navbar-text">
                <a className="nav-link" href="/cart">
                  <i className="fa fa-lg fa-shopping-cart"></i>&nbsp;{" "}
                  {cartItems.length}
                </a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
