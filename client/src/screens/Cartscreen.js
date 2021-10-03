import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../actions/cartActions";

export default function Cartscreen() {
  const cartreducerstate = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const { cartItems } = cartreducerstate;

  return (
    <div>
      <div className="row mt-5 justify-content-center">
        <h3 className="text-cnter m-5">My Cart</h3>
        <div className="col-md-8">
          <table className="table table-striped table-bordered table-hover mb-5">
            <thead className="bg-dark text-light">
              <tr>
                <th>Name</th>
                <th>Initial Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {cartItems.map((item) => {
                return (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                      <select
                        className="custom-select"
                        value={item.quantity}
                        onChange={(e) => {
                          dispatch(addToCart(item, e.target.value));
                        }}
                      >
                        {[...Array(item.countInStock).keys()].map((x, i) => {
                          return <option value={i + 1}>{i + 1}</option>;
                        })}
                      </select>
                    </td>
                    <td>{item.quantity * item.price}</td>
                    <td>
                      <i
                        class="fa fa-trash"
                        onClick={()=>dispatch(deleteFromCart(item))}
                      ></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
