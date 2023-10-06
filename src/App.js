import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Banner from "./components/Banner";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <div className="md:container md:mx-auto p-4">
        <Banner />
        <Home />
      </div>
    </div>
  );
};

export default App;
