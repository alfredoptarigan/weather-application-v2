import React, { useState, useEffect } from "react";
import axios from "axios";
import Weather from "../components/Weather";

function LandingWeather() {
  const [forecast, setForecast] = useState("");
  const [location, setLocation] = useState("");

  const getWeathers = async (e) => {
    // Handle submit
    e.preventDefault();
    // API
    try {
      let response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=54086a9b00a34b81abd51752210301&q=${location}&days=3`
      );
      setForecast(response);
    } catch (err) {
      console.log(err.message);
    }
    // Empty State
    setLocation("");
  };
  return (
    <>
      <div className=" py-5 flex items-center justify-between">
        <div className="mt-5" data-aos="fade-right" data-aos-duration="2000">
          <p className="text-2xl lg:text-5xl font-bold text-lightBlue-900">
            Different kinds of <br /> weather inside <br /> of 24 hours
          </p>
          <p className="leading-relaxed text-gray-400 text-sm lg:text-md md:text-md mt-3">
            Various versions have evolved over the years, <br /> sometimes by
            accident, somtimes on purposes <br />
          </p>
          <div className="inline-flex items-center justify-center">
            <form onSubmit={getWeathers}>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-white p-5 mt-5 w-96 rounded 
            focus:outline-none 
            focus:ring focus:ring-blue-500 w-full lg:w-auto"
                placeholder="Search your cities here..."
              />
              <button
                type="submit"
                className="px-8 py-5 bg-gray-700 mt-5 
          focus:outline-none text-white hover:bg-gray-800"
              >
                Search
              </button>
            </form>
          </div>
          <p className="text-blue-500 mt-5 font-medium text-sm lg:text-md">
            Best way to know your city weather easily
          </p>
        </div>
        <div className="mt-5" data-aos="fade-left" data-aos-duration="2000">
          <img
            src="/illustration.svg"
            alt="Weather Application Illustration"
            width="400"
            height="400"
            className="hidden lg:flex"
          />
        </div>
      </div>
      {forecast !== "" ? <Weather forecast={forecast} /> : ""}
    </>
  );
}

export default LandingWeather;
