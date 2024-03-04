import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { useState } from "react";

function Navbar() {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );
  console.log("test");
  console.log("hello2");
  console.log("hellos");
  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     let val = users.find((v, i, arr) => {
  //       return v.email === info.email && v.password === info.password;
  //     });
  //     console.log(val, "vals");
  //     // setUsers([...users, info]);
  //     if (val) {
  //       return val.name;
  //     }
  //   };
  return (
    <div>
      <div className="container " id="navbar">
        <nav
          className="shadow"
          style={{
            backgroundColor: "white",
            display: "flex",
            justifyContent: "space-between",
            paddingRight: "100px",
            paddingLeft: "100px",
          }}
        >
          <img
            src="logo.webp"
            alt="logo"
            style={{ width: "200px", height: "70px" }}
          />

          <div className="dropdown" id="profile">
            <a
              className="dropdown-toggle"
              href="#"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="fs-5 fw-bold">My Profile</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className=" bi bi-person-circle "
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                />
              </svg>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Logout
                </a>
              </li>
            </ul>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-bell float-end"
            viewBox="0 0 16 16"
            id="notification"
          >
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
          </svg>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
