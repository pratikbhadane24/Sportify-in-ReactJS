import React from "react";
import Product from "../components/Product";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Filter from "../components/Filter";

export default function Homescreen() {
  const getallproductsstate = useSelector((state) => state.getAllProductsReducer);

  const { loading, products, error } = getallproductsstate;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <section className="mb-2 pt-2 pb-5">
        <div className="container">
          <h4 className="p-3 bg-dark text-info">Featured Products</h4>
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <a href="/product/615634397db4e95a0b48b7db">
                  <img
                    src="https://lh3.googleusercontent.com/lFxM-qbMQrokqLYET4QWCDr0ZiWTyahiKw3Exe6fdCiMTvNscMcT_FXP7SRhxvBEACjK5FNK33q7F-0xtd1tErY8FFmKX7t2fkveSzXLD67R19BT6xrnJWEGBf0Ui9Nvau_zgxI=w2400"
                    className="d-block w-100"
                    alt="..."
                  />
                </a>
              </div>
              <div className="carousel-item">
                <a href="/product/615634397db4e95a0b48b7da">
                  <img
                    src="https://lh3.googleusercontent.com/mqWS0nUIGVkdcv7y2HW-adYJIHmEEdr9oxLwlqhn1vv-mnikzulWN0rhxLKCZYYiXCgD4qJkcqjG6OEJuOm-pcuZCyVIQ7-a8szA1-XXj_a3jAZ-TUmAiXO_yLrGwpDJaKsNahI=w2400"
                    className="d-block w-100"
                    alt="..."
                  />
                </a>
              </div>
              <div className="carousel-item">
                <a href="/product/61694872838e35531229b5fc">
                  <img
                    src="https://lh3.googleusercontent.com/Hwc3ZfBsSTmmoyD_15ueuQJ8FUyY2CGJIvOg-zvlA66POJNcHBgNTU1JVltkdP3Dxcm0Q_gUFcJNeokABQ8dOABNenFQSfUOYFKnOzyckBaOzL-pWKkxueWQ7Cj4nqRYVnX_rk-z=w2400"
                    className="d-block w-100"
                    alt="..."
                  />
                </a>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
      <Filter />
      <div className="row justify-content-center">
        {loading ? (
          <Loader />
        ) : error ? (
          <Error error="Something went wrong...!" />
        ) : (
          products.map((product) => {
            return (
              <div className="col-md-3 m-2 p-2">
                <div className="bg-light card-zoom">
                  <Product product={product} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
