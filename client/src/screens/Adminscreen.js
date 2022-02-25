import React, { useEffect } from "react";
import { Switch, Route } from "react-router";
import Userslist from "./Userslist";
import Productslist from "./Productslist";
import Addproduct from "./Addproduct";
import Orderslist from "./Orderslist";
import Editproduct from "./Editproduct";
import { useSelector } from "react-redux";

export default function Adminscreen() {
  const userstate = useSelector((state) => state.loginReducer);

  const currentUser = userstate.currentUser;
  useEffect(() => {
    if (currentUser) {
      if (!currentUser.isAdmin) {
        window.location.href = "/";
      }
    } else {
      window.location.href = "/";
    } // eslint-disable-next-line
  }, []);

  return (
    <div className="row">
      <nav id="sidebarMenu" className="col-3 collapse d-sm-block sidebar collapse bg-white">
        <div className="position-sticky text-start  ">
          <div className="list-group list-group-flush mx-3 mt-4">
            <a
              href="/admin/userslist"
              className="list-group-item list-group-item-action py-2 ripple">
              <i className="fa fa-users fa-fw me-3"></i>
              <span>Users List</span>
            </a>
            <a
              href="/admin/productslist"
              className="list-group-item list-group-item-action py-2 ripple">
              <i className="fa fa-list fa-fw me-3"></i>
              <span>Product Lists</span>
            </a>
            <a
              href="/admin/addnewproduct"
              className="list-group-item list-group-item-action py-2 ripple">
              <i className="fa fa-plus-square fa-fw me-3"></i>
              <span>Add New Product</span>
            </a>
            <a
              href="/admin/orderslist"
              className="list-group-item list-group-item-action py-2 ripple">
              <i className="fa fa-bar-chart fa-fw me-3"></i>
              <span>Orders List</span>
            </a>
          </div>
        </div>
      </nav>
      <div className="col-9 p-4">
        <h4 className="text-center">Admin Panel</h4>
        <Switch>
          <Route path="/admin/userslist" component={Userslist} />
          <Route path="/admin/productslist" component={Productslist} />
          <Route path="/admin/addnewproduct" component={Addproduct} />
          <Route path="/admin/orderslist" component={Orderslist} />
          <Route path="/admin/editproduct/:productid" component={Editproduct} />
        </Switch>
      </div>
    </div>
  );
}
