import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Data from "./Data";
import Body from "./Body";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/home" element={<Home />} />
          <Route path="/data" element={<Data />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
