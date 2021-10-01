import React from "react";
import axios from "axios";
import Product from "../components/Product";
import { useEffect, useState } from "react";

export default function Homescreen() {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    axios
      .get("/api/products/getallproducts")
      .then((res) => {
        console.log(res);
        setproducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="row justify-content-center">
        {products.length &&
          products.map((product) => {
            return (
              <div className="col-md-3 m-3 card p-2" key={product._id}>
                {" "}
                <Product product={product} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
