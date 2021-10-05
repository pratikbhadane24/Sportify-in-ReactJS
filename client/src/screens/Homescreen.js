import React from "react";
import axios from "axios";
import Product from "../components/Product";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../actions/productActions";
import { getAllProductsReducer } from "../reducers/productReducer";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Filter from "../components/Filter";

export default function Homescreen() {
  const getallproductsstate = useSelector(
    (state) => state.getAllProductsReducer
  );

  const { loading, products, error } = getallproductsstate;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div>
      <section className="m-2 pt-5">
        <div className="container">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <a href="/product/615634397db4e95a0b48b7db">
                    <img src="https://i.ibb.co/GVZxJQc/Slide1.png" className="d-block w-100" alt="..."/></a>
                  </div>
                  <div className="carousel-item">
                    <img src="https://i.ibb.co/GVZxJQc/Slide1.png" className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="https://i.ibb.co/GVZxJQc/Slide1.png" className="d-block w-100" alt="..."/>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
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
                <div className="bg-light card card-zoom">
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
