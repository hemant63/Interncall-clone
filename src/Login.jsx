import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
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
    e.preventDefault();

    let val = users.find((v, i, arr) => {
      return v.email === info.email && v.password === info.password;
    });
    console.log(val, "vals");
    // setUsers([...users, info]);
    if (val) {
      localStorage.setItem("data", JSON.stringify(val));
      navigate("/home");
    }
    setInfo({
      email: "",
      password: "",
    });
    console.log();
  };

  return (
    <div>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h2>SignIn</h2>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body">
            <div className="d-flex justify-content-around">
              <form onSubmit={handleSubmit}>
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
                <button className="btn btn-primary" data-bs-dismiss="modal">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
