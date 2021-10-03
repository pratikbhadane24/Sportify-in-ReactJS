import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Navbar() {
  const addtocartreducer = useSelector((state) => state.addToCartReducer);

  const { cartItems } = addtocartreducer;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
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
            <span className="navbar-text ms-auto p-3">
              <a href="/register">
                <span className="fa fa-user-plus"></span> Register
              </a>
            </span>
            <span className="navbar-text p-3">
              <a href="/">
                <span className="fa fa-sign-in" aria-hidden="true"></span> Login
              </a>
            </span>
            <span className="navbar-text p-3">
              <a className="nav-link" href="/">
                <i class="fa fa-lg fa-shopping-cart"></i>&nbsp; {cartItems.length}
              </a>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}
