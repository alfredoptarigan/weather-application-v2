import React, { useState, useEffect } from "react";
import axios from "axios";

function LandingCovid() {
  const [AllCountries, setAllCountries] = useState([]);
  const [countries, setCountries] = useState("Global");
  const [confirmed, setConfirmed] = useState();
  const [deaths, setDeaths] = useState();
  const [recovered, setRecovered] = useState();
  const [date, setDate] = useState();
  const getAllCountries = async () => {
    try {
      let response = await axios.get(
        `https://covid19.mathdro.id/api/countries`
      );
      setAllCountries(response.data.countries);
    } catch (err) {
      console.log(err.message);
    }
  };

  const getData = async (countries) => {
    if (countries === "Global") {
      try {
        let response = await axios.get(`https://covid19.mathdro.id/api`);
        setConfirmed(response.data.confirmed.value);
        setDeaths(response.data.deaths.value);
        setRecovered(response.data.recovered.value);
        setDate(response.data.lastUpdate);
      } catch (err) {
        console.log(err.message);
      }
    } else {
      try {
        let response = await axios.get(
          `https://covid19.mathdro.id/api/countries/${countries}`
        );
        setConfirmed(response.data.confirmed.value);
        setDeaths(response.data.deaths.value);
        setRecovered(response.data.recovered.value);
        setDate(response.data.lastUpdate);
      } catch (err) {
        console.log(err.message);
      }
    }
  };
  useEffect(() => {
    getAllCountries();
    getData(countries);
    return () => {
      setConfirmed("");
      setDeaths("");
      setRecovered("");
    };
  }, getData(countries));
  return (
    <div>
      <div
        className="py-5 flex justify-between mt-24"
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        <div className="mt-24 hidden lg:flex">
          <img
            src="/remote-work-man.svg"
            alt="Weather Application Illustration"
            width="400"
            height="400"
          />
        </div>
        <div className="mt-24">
          <p className="text-2xl lg:text-5xl font-bold text-lightBlue-900">
            Let's Help <br />{" "}
            <span className="text-yellow-500">Recover The Earth,</span> <br />
            Start From Us!
          </p>
          <p className="leading-relaxed text-gray-400 text-sm lg:text-md md:text-md mt-3">
            Mari membantu menurunkan tingkat COVID-19 <br />
            dan membuat bumi menjadi lebih sehat.
          </p>
        </div>
      </div>
      <div
        className="flex flex-col justify-center items-center mt-24"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <p className="text-2xl font-medium text-lightBlue-500 mb-8">
          Find Your Countries Here
        </p>
        <select
          name="#"
          id=""
          className="w-72 focus:outline-none"
          value={countries}
          onChange={(e) => setCountries(e.target.value)}
        >
          <option value="Global">Global</option>
          {AllCountries.map((ac, index) => {
            return (
              <option value={ac.name} key={index}>
                {ac.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center mt-8 w-full">
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className=" bg-white  mt-4 mb-4 cursor-pointer shadow-lg transition-all duration-200 ease-in   w-full ml-2 mr-2 rounded l  ml-2 mr-2 hover:shadow-2xl"
        >
          <div className="bg-green-500 w-full p-3 rounded-t"></div>
          <div className="p-5">
            <p className="text-lg text-green-500 font-medium">Recovered</p>
            <p className="text-lg text-green-500 font-bold">{recovered}</p>
            <p className="text-sm text-gray-500">
              Last Update : {new Date(date).toDateString()}
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="bg-white  mt-4 mb-4 cursor-pointer shadow-lg transition-all duration-200 ease-in w-full ml-2 mr-2 rounded   ml-2 mr-2 hover:shadow-2xl"
        >
          <div className="bg-yellow-500 w-full p-3 rounded-t"></div>
          <div className="p-5">
            <p className="text-lg text-yellow-500 font-medium">Confirmed</p>
            <p className="text-lg text-yellow-500 font-bold">{confirmed}</p>
            <p className="text-sm text-gray-500">
              Last Update : {new Date(date).toDateString()}
            </p>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          className="bg-white  mt-4 mb-4 cursor-pointer shadow-lg transition-all duration-200 ease-in   w-full ml-2 mr-2 rounded   ml-2 mr-2 hover:shadow-2xl"
        >
          <div className="bg-red-500 w-full p-3 rounded-t"></div>
          <div className="p-5">
            <p className="text-lg text-red-500 font-medium">Deaths</p>
            <p className="text-lg text-red-500 font-bold">{deaths}</p>
            <p className="text-sm text-gray-500">
              Last Update : {new Date(date).toDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingCovid;
