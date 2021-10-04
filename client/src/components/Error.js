import React from "react";

export default function Error({ error }) {
  return (
    <div className="m-5 p-5">
      <div className="m-5 p-5 alert alert-danger" role="alert">
        {error}
      </div>
    </div>
  );
}
