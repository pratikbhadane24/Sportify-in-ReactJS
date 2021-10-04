import React from "react";

export default function Loader() {
  return (
    <div className="m-5 p-5">
      <div className="spinner-border m-5 p-5" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
