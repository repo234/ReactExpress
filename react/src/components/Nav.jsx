import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <img src="images/logo.png" alt="logo here..." />
        </div>
        <div className="col-lg-8 ">
          <ul className="nav justify-content-center mt-5 fs-2">
            <li className="nav-item m-2 ">
            <Link to="/">Home</Link>
            </li>
            <li className="nav-item m-2 ">
            <Link to="/products">Products</Link>
            </li>
            <li className="nav-item m-2 ">
            <Link to="/products/new">Add Product</Link>
            </li>
            <li className="nav-item m-2 ">
            <Link to="/login">Login</Link>
            </li>
            <li className="nav-item m-2 ">
            <Link to="/signin">Signin</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
