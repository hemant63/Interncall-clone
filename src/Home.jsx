import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <div>
        <Navbar />
        <h5>Practice</h5>
        <h3>Dashbord</h3>
      </div>
      <div
        style={{
          backgroundColor: "rgb(247, 247, 247)",
          padding: "50px",
        }}
      >
        <div
          style={{
            // padding: "40px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <span
            className="card shadow "
            style={{ width: "30rem", padding: "20px" }}
          >
            <div className="card-body">
              <h6 className="card-title lead">
                <strong>LANGUAGE LEARNING</strong>
              </h6>
              <h4 className="card-title">Algorithms</h4>
              <div
                className="progress"
                role="progressbar"
                aria-label="Example 1px high"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ height: "6px" }}
              >
                <div className="progress-bar" style={{ width: "0%" }}></div>
              </div>
              <p className="card-text">progress text</p>
            </div>
            <a href="#" className="btn btn-primary">
              Start Practice
            </a>
          </span>
          <span
            className="card shadow"
            style={{ width: "30rem", padding: "20px" }}
          >
            <div className="card-body">
              <h6 className="card-title">LEARN TO CODE IN 30 DAYS</h6>
              <h4 className="card-title">Learn to code in 30 days</h4>
              <div
                className="progress"
                role="progressbar"
                aria-label="Example 1px high"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ height: "6px" }}
              >
                <div className="progress-bar" style={{ width: "0%" }}></div>
              </div>
              <p className="card-text">progress text</p>
            </div>
            <a href="#" className="btn btn-primary">
              View tutorial
            </a>
          </span>
        </div>

        <div>
          <h4>Skills Available For Practice</h4>
          <table className="table " style={{ padding: "100px" }}>
            <tbody>
              <tr
                className="btn-group shadow"
                role="group"
                aria-label="First group"
              >
                <td
                  type="button"
                  style={{ width: "300px" }}
                  className="btn btn-outline-secondary"
                >
                  Algorithms
                </td>
                <td
                  type="button"
                  style={{ width: "300px" }}
                  className="btn btn-outline-secondary"
                >
                  Data Structures
                </td>
                <td
                  type="button"
                  style={{ width: "300px" }}
                  className="btn btn-outline-secondary"
                >
                  Mathematics
                </td>
              </tr>
              <tr
                className="btn-group shadow"
                role="group"
                aria-label="First group"
              >
                <td
                  type="button"
                  style={{ width: "300px" }}
                  className="btn btn-outline-secondary shadow"
                >
                  C
                </td>
                <td
                  type="button"
                  style={{ width: "300px" }}
                  className="btn btn-outline-secondary"
                >
                  C++
                </td>
                <td
                  type="button"
                  style={{ width: "300px" }}
                  className="btn btn-outline-secondary"
                >
                  Java
                </td>
              </tr>
              <tr
                className="btn-group shadow"
                role="group"
                aria-label="First group"
              >
                <td
                  type="button"
                  style={{ width: "300px" }}
                  className="btn btn-outline-secondary shadow"
                >
                  Python
                </td>
                <td
                  type="button"
                  style={{ width: "300px" }}
                  className="btn btn-outline-secondary"
                >
                  Ruby
                </td>
                <td
                  type="button"
                  style={{ width: "300px" }}
                  className="btn btn-outline-secondary"
                >
                  Linux Shell
                </td>
              </tr>
              <tr
                className="btn-group shadow"
                role="group"
                aria-label="First group"
              >
                <td
                  type="button"
                  style={{ width: "300px" }}
                  className="btn btn-outline-secondary "
                >
                  Functional Programming
                </td>
                <td
                  type="button"
                  style={{ width: "300px" }}
                  className="btn btn-outline-secondary"
                >
                  Artificial Intelligence
                </td>
                <td
                  type="button"
                  style={{ width: "300px" }}
                  className="btn btn-outline-secondary"
                >
                  SQL
                </td>
              </tr>
              <tr
                className="btn-group shadow"
                role="group"
                aria-label="First group"
              >
                <td
                  type="button"
                  style={{ width: "300px" }}
                  className="btn btn-outline-secondary"
                >
                  Databases
                </td>
                <td
                  type="button"
                  style={{ width: "300px" }}
                  className="btn btn-outline-secondary"
                >
                  Regex
                </td>
                <td style={{ width: "300px" }}></td>
              </tr>
            </tbody>
          </table>
        </div>
        <h4>Courses</h4>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <span
            className="card shadow"
            style={{ width: "20rem", padding: "20px" }}
          >
            <div className="card-body">
              <h6 className="card-title">WEB DEVELOPMENT</h6>
              <h4 className="card-title">Javascript Zero to Hero Bootcamp</h4>

              <p className="card-text">
                Fundamentals of Javascript | DOM Manipulation | Asynchronous
                Javascript | Building Interactive Web Applications | Real World
                Projects
              </p>
            </div>
            <a href="#" className="btn btn-primary">
              Register
            </a>
          </span>
          <span
            className="card shadow"
            style={{ width: "20rem", padding: "20px" }}
          >
            <div className="card-body">
              <h6 className="card-title">WEB DEVELOPMENT</h6>
              <h4 className="card-title">Free Guide to LinkedIn</h4>

              <p className="card-text">
                Know everything about LinkedIn which helps you to grow
              </p>
            </div>
            <a href="#" className="btn btn-primary">
              Register
            </a>
          </span>
          <span
            className="card shadow "
            style={{ width: "20rem", padding: "20px" }}
          >
            <div className="card-body">
              <h6 className="card-title">ANALYTICS</h6>
              <h4 className="card-title">
                Data Analytics Advanced 2023:Power BI
              </h4>
              <p className="card-text">c</p>
            </div>
            <a href="#" className="btn btn-primary">
              Register
            </a>
          </span>
        </div>
      </div>
    </>
  );
}

export default Home;
