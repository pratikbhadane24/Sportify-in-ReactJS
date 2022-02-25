import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { Link } from "react-router-dom";
import { getAllProducts, deleteProduct } from "../actions/productActions";

export default function Productslist() {
  const getallproductsstate = useSelector((state) => state.getAllProductsReducer);
  const { products, loading, error } = getallproductsstate;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="pt-2 p-5 mt-0 shadow-lg p-5 m-5 bg-body rounded table-responsive">
      <h4 className="text-start mt-3 mb-3">Products List</h4>
      <table className="table table-striped table-bordered table-hover mb-5 table-responsive-sm">
        <thead className="bg-dark text-light">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        {loading && <Loader />}

        <tbody>
          {error && <Error error="Something Went Wrong" />}
          {products &&
            products.map((product) => {
              return (
                <tr>
                  <td>{product.name}</td>
                  <td>₹{product.price}</td>
                  <td>{product.countInStock}</td>
                  <td>{product._id}</td>
                  <td>
                    <i
                      class="fa fa-trash"
                      onClick={() => {
                        dispatch(deleteProduct(product._id));
                      }}></i>
                    &nbsp; &nbsp;
                    <Link to={`/admin/editproduct/${product._id}`}>
                      <i className="fa fa-pencil-square-o text-dark"></i>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
