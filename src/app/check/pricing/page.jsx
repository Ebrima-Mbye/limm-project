"use client";

import FullPage from "../components/FullPage";
import { useState } from "react";
import prices from "./Prices.js"; // Import the Prices class

export default function Location() {
  const [location, setLocation] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [price, setPrice] = useState(null);

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const APIURL = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
    fetch(APIURL)
      .then((response) => response.json())
      .then((data) => {
        setLocation(data.locality);
        setCurrency(data.currency.code); // Set the user's currency
        updatePrice(data.currency.code); // Update the price
      });
  };

  const error = (err) => {
    setLocation("Could not find location");
  };

  const findMyState = () => {
    navigator.geolocation.getCurrentPosition(success, error);
  };

  const updatePrice = (userCurrency) => {
    const prices = new Prices(); // Create an instance of the Prices class
    const item = "item1"; // Example item (you can make this dynamic)
    const localPrice = prices.getPriceInLocalCurrency(userCurrency, item);
    setPrice(localPrice); // Update the displayed price
  };

  return (
    <FullPage>
      <div className="flex h-screen w-full items-center justify-center border border-red-400">
        <div className="bg-gray-400 p-5 pt-10">
          <div className="mb-5 flex items-center justify-center text-3xl">
            {location ? `${location} - ${currency}` : "Find your location"}
          </div>
          <div className="mb-5 text-center text-2xl">
            {price ? `Price: ${price} ${currency}` : "Price: $10 (Default)"}
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
