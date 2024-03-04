import { ReactDOM } from "react";
import React from "react";
import Signin from "./Signin";
import Login from "./Login";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="container-fluid">
      <img
        src="logo.webp"
        alt="logo"
        style={{ width: "200px", height: "70px" }}
      />
      <button
        type="button"
        className="float-end btn btn-outline-primary"
        data-bs-toggle="modal"
        data-bs-target="#registerModal"
      >
        Register
      </button>
      <button
        type="button"
        className="float-end btn btn-outline-primary"
        data-bs-toggle="modal"
        data-bs-target="#loginModal"
      >
        Login
      </button>
      <div className="modal" id="registerModal">
        <Signin />
      </div>
      <div className="modal" id="loginModal">
        <Login />
      </div>
    </div>
  );
}

export default Header;
