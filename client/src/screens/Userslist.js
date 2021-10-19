import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAllUsers } from "../actions/userActions";
import Loader from "../components/Loader";
import Error from "../components/Error";

export default function Userslist() {
  const getallusersstate = useSelector((state) => state.getAllUsersReducer);
  const { users, loading, error } = getallusersstate;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div className="pt-2 p-5 mt-0 shadow-lg p-3 mb-5 bg-body rounded table-responsive">
      <h4 className="text-start mb-3">Users List</h4>

      <table className="table table-striped table-bordered table-hover mb-5">
        <thead className="bg-dark text-light">
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        {loading && <Loader />}
        <tbody>
          {error && <Error error="Something Went Wrong" />}
          {users &&
            users.map((user) => {
              return (
                <tr>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <i
                      class="fa fa-trash"
                      onClick={() => {
                        dispatch(deleteUser(user._id));
                      }}
                    ></i>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
