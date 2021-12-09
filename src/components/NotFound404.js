import React from "react";
import { Link } from "react-router-dom";

const NotFound404 = () => {
  return (
    <div className="card text-center m-5">
      <div className="card-header">Featured Page</div>
      <div className="card-body">
        <h5 className="card-title">What you trying to find?</h5>
        <p className="card-text">
          You must be looking for something very special. But, it's not here.
        </p>
        <Link to="/" className="btn btn-primary">
          Go to Homepage
        </Link>
      </div>
      <div className="card-footer text-muted">Head to Homepage</div>
    </div>
  );
};

export default NotFound404;
