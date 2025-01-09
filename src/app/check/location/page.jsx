"use client";

import FullPage from "../components/FullPage";
import { useState } from "react";

export default function Location() {
  const [location, setLocation] = useState("");
  const [currency, setCurrency] = useState("");

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const APIURL = `
    https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en
    `;

    fetch(APIURL)
      .then((response) => response.json())
      .then((data) => {
        setLocation(data.locality);

        // Use the ISO country code
        const countryCode = data.countryCode; // e.g., "US", "GB", "IN"
        if (countryCode) {
          fetch(`https://restcountries.com/v3.1/alpha/${countryCode}?fields=currencies`)
            .then((response) => response.json())
            .then((countryData) => {
              // Extract currency details
              const currencyCode = Object.keys(countryData.currencies)[0];
              const currencyName = countryData.currencies[currencyCode].name;
              setCurrency(`${currencyName} (${currencyCode})`);
            })
            .catch((err) => {
              console.error("Error fetching currency:", err);
              setCurrency("Could not fetch currency.");
            });
        } else {
          setCurrency("Country code not found.");
        }
      })
      .catch((err) => {
        console.error("Error fetching location:", err);
        setLocation("Could not fetch location.");
      });
  };

  const error = () => {
    setLocation("Could not find location");
    setCurrency(""); // Clear currency if location isn't found
  };

  const findMyState = () => {
    navigator.geolocation.getCurrentPosition(success, error);
  };

  return (
    <FullPage>
      <div className="flex h-screen w-full items-center justify-center">
        <div className="bg-gray-400 p-5 pt-10">
          <div className="mb-5 flex items-center justify-center text-3xl">
            {location}
          </div>
          <div className="mb-5 flex items-center justify-center text-2xl">
            {currency}
          </div>
          <button
            onClick={findMyState}
            className="w-full bg-black p-2 text-2xl text-white"
          >
            FIND MY LOCATION
          </button>
        </div>
      </div>
    </FullPage>
  );
}
