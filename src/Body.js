import Header from "./Header";
import Footer from "./Footer";

function Body() {
  return (
    <>
      <Header />
      <div className="row">
        <span className="col-sm-6">
          <img src="hero-img.webp" alt="img" />
        </span>
        <span className="col-sm-6">
          <h1 className="display-1">
            Up Your Skills To Advance Your Career Path
          </h1>
          <p>
            Unleash your potential with our exclusive hub of cutting-edge
            technology training!
          </p>
          <div>
            <button type="button" className="btn btn-outline-primary">
              Get Started
            </button>
            &nbsp; &nbsp;
            <button type="button" className="btn btn-outline-primary">
              Access Courses
            </button>
          </div>
        </span>
      </div>
      <Footer />
    </>
  );
}

export default Body;
