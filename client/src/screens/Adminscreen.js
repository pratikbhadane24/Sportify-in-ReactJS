import React from "react";
import { Switch, Route } from "react-router";

export default function Adminscreen() {
  return (
    <div>
      <nav
        id="sidebarMenu"
        class="collapse d-lg-block sidebar collapse bg-white"
      >
        <div class="position-sticky text-start  ">
          <div class="list-group list-group-flush mx-3 mt-4">
            <a
              href="/admin/userlist"
              class="list-group-item list-group-item-action py-2 ripple"
            >
              <i class="fa fa-users fa-fw me-3"></i>
              <span>Users List</span>
            </a>
            <a
              href="/admin/productslist"
              class="list-group-item list-group-item-action py-2 ripple"
            >
              <i class="fa fa-list fa-fw me-3"></i>
              <span>Product Lists</span>
            </a>
            <a
              href="/admin/addnewproduct"
              class="list-group-item list-group-item-action py-2 ripple"
            >
              <i class="fa fa-plus-square fa-fw me-3"></i>
              <span>Add New Product</span>
            </a>
            <a
              href="/admin/orderslist"
              class="list-group-item list-group-item-action py-2 ripple"
            >
              <i class="fa fa-bar-chart fa-fw me-3"></i>
              <span>Orders List</span>
            </a>
            <Switch>



            </Switch>
          </div>
        </div>
      </nav>
    </div>
  );
}
