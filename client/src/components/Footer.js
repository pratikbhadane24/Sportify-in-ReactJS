import React from "react";

export default function Footer() {
  return (
    <div className="footer bg-dark text-white ">
      <div className="container foot">
        <div className="row">
          <div className="col-4 offset-1 col-sm-2 text-start">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <a className="active foot-color" href="/">
                  <span className="fa fa-home"></span>&nbsp; Home
                </a>
              </li>
              <li>
                <a className="foot-color" href="/about-us">
                  <span className="fa fa-info"></span>&nbsp;&nbsp;&nbsp; About
                </a>
              </li>
              <li>
                <a className="foot-color" href="#">
                  <span className="fa fa-address-book"></span>&nbsp; Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-7 col-sm-5 text-start">
            <h5>Our Address</h5>
            <address>
              <span className="fa fa-map-marker"></span>&nbsp; Xavier Institute of
              Engineering, Mahim
              <br />
              &nbsp;&nbsp;&nbsp;Mumbai- 400016
              <div className="">
                <i className="fa fa-phone"></i> +852 1234 5678
                <br />
                <i className="fa fa-fax"></i> +852 8765 4321
                <br />
                <i className="fa fa-envelope"></i>{" "}
                <a className="foot-color" href="mailto:sportify@gmail.com">
                  sportify@gmail.com
                </a>
              </div>
            </address>
          </div>
          <div className="col-12 col-sm-4 align-self-center">
            <div className="text-center">
              <h3>Connect Us</h3>
              <a
                className="btn btn-social-icon wa btn-whatsapp foot-color"
                href="http://wa.me/"
              >
                <i className="fa fa-whatsapp fa-lg "></i>
              </a>
              <a
                className="btn btn-social-icon twt btn-twitter foot-color"
                href="http://twitter.com/"
              >
                <i className="fa fa-twitter fa-lg"></i>
              </a>
              <a
                className="btn btn-social-icon fb btn-facebook foot-color"
                href="http://www.facebook.com/profile.php?id="
              >
                <i className="fa fa-facebook fa-lg"></i>
              </a>
              <a
                className="btn btn-social-icon twt btn-linkedin shadow foot-color"
                href="http://www.linkedin.com/in/"
              >
                <i className="fa fa-linkedin fa-lg"></i>
              </a>
              <a
                className="btn btn-social-icon btn yt foot-color"
                href="http://youtube.com/"
              >
                <i className="fa fa-youtube-play fa-lg"></i>
              </a>
              <a className="btn btn-social-icon mail foot-color" href="mailto:">
                <i className="fa fa-envelope fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>© Copyright Group-18 ~ 2021 </p>
          </div>
        </div>
      </div>
    </div>
  );
}
