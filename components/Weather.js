import React, { Component } from "react";
import { Cloud, Camera } from "react-feather";
function Weather(props) {
  const { forecast } = props;
  const dayForcest = forecast.data.forecast.forecastday;
  const currentTemp = forecast.data.current;
  console.log(dayForcest);
  return (
    <div className=" container flex items-center justify-center mx-auto mt-5 lg:-mt-2">
      <div className="bg-white cursor-pointer shadow-lg transition-all duration-200 ease-in  p-5 w-1/2 rounded w-full lg:w-1/2 hover:shadow-2xl">
        <div className="flex justify-between items-center">
          <div className="flex">
            <Cloud className="text-lightBlue-400" />
            <span className="text-md font-bold ml-3">Weather </span>
          </div>
          <span className="text-gray-400 text-sm">
            {forecast.data.location.name} , {forecast.data.location.country}
          </span>
        </div>
        <div className="p-5 flex justify-between">
          <div className="text-4xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
              {currentTemp.temp_c}°C
            </span>
          </div>
          <div className="flex font-medium">
            {dayForcest.map((fc, index) => {
              return (
                <div
                  className="flex items-center justify-center flex-col"
                  key={index}
                >
                  <span className="mr-2 ml-2 text-gray-400 hover:text-gray-600 cursor-pointer">
                    {new Intl.DateTimeFormat("id-ID", {
                      weekday: "short",
                    }).format(new Date(fc.date))}{" "}
                  </span>
                  <img
                    src={`http://${fc.day.condition.icon}`}
                    alt={fc.day.condition.text}
                    width="50"
                    height="50"
                  />
                  <p className="text-sm font-bold text-gray-400">
                    {fc.day.avgtemp_c}°
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
