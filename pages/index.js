import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import LandingWeather from "../components/LandingWeather";
import LandingCovid from "../components/LandingCovid";

function Home() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <LandingWeather />
      <LandingCovid />
    </div>
  );
}

export default Home;
