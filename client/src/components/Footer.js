import React from "react";

export default function Footer() {
  return (
    <div class="footer bg-dark text-white ">
      <div class="container foot">
        <div class="row">
          <div class="col-4 offset-1 col-sm-2 text-start">
            <h5>Links</h5>
            <ul class="list-unstyled">
              <li>
                <a class="active foot-color" href="/">
                  <span class="fa fa-home"></span>&nbsp; Home
                </a>
              </li>
              <li>
                <a class="foot-color" href="/about-us">
                  <span class="fa fa-info"></span>&nbsp;&nbsp;&nbsp; About
                </a>
              </li>
              <li>
                <a class="foot-color" href="#">
                  <span class="fa fa-address-book"></span>&nbsp; Contact
                </a>
              </li>
            </ul>
          </div>
          <div class="col-7 col-sm-5 text-start">
            <h5>Our Address</h5>
            <address>
              <span class="fa fa-map-marker"></span>&nbsp; Xavier Institute of
              Engineering, Mahim
              <br />
              &nbsp;&nbsp;&nbsp;Mumbai- 400016
              <div class="">
                <i class="fa fa-phone"></i> +852 1234 5678
                <br />
                <i class="fa fa-fax"></i> +852 8765 4321
                <br />
                <i class="fa fa-envelope"></i>{" "}
                <a class="foot-color" href="mailto:sportify@gmail.com">
                  sportify@gmail.com
                </a>
              </div>
            </address>
          </div>
          <div class="col-12 col-sm-4 align-self-center">
            <div class="text-center">
              <h3>Connect Us</h3>
              <a
                class="btn btn-social-icon wa btn-whatsapp foot-color"
                href="http://wa.me/"
              >
                <i class="fa fa-whatsapp fa-lg "></i>
              </a>
              <a
                class="btn btn-social-icon twt btn-twitter foot-color"
                href="http://twitter.com/"
              >
                <i class="fa fa-twitter fa-lg"></i>
              </a>
              <a
                class="btn btn-social-icon fb btn-facebook foot-color"
                href="http://www.facebook.com/profile.php?id="
              >
                <i class="fa fa-facebook fa-lg"></i>
              </a>
              <a
                class="btn btn-social-icon twt btn-linkedin shadow foot-color"
                href="http://www.linkedin.com/in/"
              >
                <i class="fa fa-linkedin fa-lg"></i>
              </a>
              <a
                class="btn btn-social-icon btn yt foot-color"
                href="http://youtube.com/"
              >
                <i class="fa fa-youtube-play fa-lg"></i>
              </a>
              <a class="btn btn-social-icon mail foot-color" href="mailto:">
                <i class="fa fa-envelope fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-auto">
            <p>© Copyright Group-18 ~ 2021 </p>
          </div>
        </div>
      </div>
    </div>
  );
}
