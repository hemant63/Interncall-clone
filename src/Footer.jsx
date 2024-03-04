function Footer() {
  return (
    <div
      style={{
        backgroundColor: "black",
        display: "flex",
        justifyContent: "space-between",
        paddingRight: "100px",
        paddingLeft: "100px",
        paddingTop: "50px",
        paddingBottom: "50px",
        width: "1400px",
        bottom: "0",
      }}
    >
      <h1 style={{ color: "grey" }}>InternCall</h1>
      <div>
        <h3 style={{ color: "gray" }}>Product</h3>
        <span style={{ color: "whitesmoke" }}>
          <p>Programs</p>
          <p>Courses</p>
          <p>InterviewKit</p>
          <p>Bootcamp</p>
        </span>
      </div>
      <div>
        <h3 style={{ color: "gray" }}>Company</h3>
        <span style={{ color: "whitesmoke" }}>
          <p>About us</p>
          <p>News</p>
          <p>Press</p>
        </span>
      </div>
      <div>
        <h3 style={{ color: "gray" }}>Legal</h3>
        <span style={{ color: "whitesmoke" }}>
          <p>SignIn</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </span>
      </div>
    </div>
  );
}

export default Footer;
