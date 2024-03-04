import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("user")) || []
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    const val = [...users, info];
    setUsers([...users, info]);
    e.preventDefault();

    setInfo({
      name: "",
      email: "",
      password: "",
    });
    console.log(val);
    localStorage.setItem("user", JSON.stringify(val));
    // navigate("/home");
  };

  return (
    <div>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h2>Create your account</h2>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body">
            <div className="d-flex justify-content-around">
              <h2>img</h2>
              <form onSubmit={handleSubmit}>
                <label>
                  Name:
                  <input
                    type="text"
                    value={info.name}
                    onChange={handleChange}
                    name="name"
                    required
                  />
                </label>
                <br />
                <label>
                  Email:
                  <input
                    type="email"
                    value={info.email}
                    onChange={handleChange}
                    name="email"
                    required
                  />
                </label>
                <br />
                <label>
                  Password:
                  <input
                    type="password"
                    value={info.password}
                    onChange={handleChange}
                    name="password"
                    required
                  />
                </label>
                <br />
                <input
                  type="submit"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  data-bs-target="loginModal"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
