"use client";

import FullPage from "../components/FullPage";
import { useState } from "react";

export default function Location() {
  const [location, setLocation] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [priceInLocalCurrency, setPriceInLocalCurrency] = useState(null);

  // Variable to hold the price of the item in USD
  const itemPriceInUSD = 10; // Example: $10

  const findMyState = () => {
    // Geolocation success callback
    const success = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const APIURL = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

      fetch(APIURL)
        .then((response) => response.json())
        .then((data) => {
          setLocation(data.locality || "Unknown Location");
          const detectedCurrency = data.currency?.code || "USD"; // Default to USD
          setCurrency(detectedCurrency);
          updatePrice(detectedCurrency); // Fetch exchange rate and update price
        })
        .catch(() => {
          setLocation("Could not find location");
          setCurrency("USD");
          setPriceInLocalCurrency(itemPriceInUSD.toFixed(2)); // Fallback to USD price
        });
    };

    // Geolocation error callback
    const error = () => {
      setLocation("Could not find location");
      setCurrency("USD");
      setPriceInLocalCurrency(itemPriceInUSD.toFixed(2)); // Fallback to USD price
    };

    // Request geolocation
    navigator.geolocation.getCurrentPosition(success, error);
  };

  const updatePrice = (userCurrency) => {
    const EXCHANGE_API = `https://api.exchangerate.host/latest?base=USD&symbols=${userCurrency}`;

    fetch(EXCHANGE_API)
      .then((response) => response.json())
      .then((data) => {
        const exchangeRate = data.rates[userCurrency];
        if (exchangeRate) {
          const localPrice = (itemPriceInUSD * exchangeRate).toFixed(2); // Convert and format
          setPriceInLocalCurrency(localPrice);
        } else {
          setPriceInLocalCurrency("Conversion error");
        }
      })
      .catch((error) => {
        console.error("Error fetching exchange rate:", error);
        setPriceInLocalCurrency("Error fetching price");
      });
  };

  return (
    <FullPage>
      <div className="flex h-screen w-full items-center justify-center border border-red-400">
        <div className="bg-gray-400 p-5 pt-10">
          <div className="mb-5 flex items-center justify-center text-3xl">
            {location ? `${location} - ${currency}` : "Find your location"}
          </div>
          <div className="mb-5 text-center text-2xl">
            {priceInLocalCurrency
              ? `Price: ${priceInLocalCurrency} ${currency}`
              : `Price: ${itemPriceInUSD} USD (Default)`}
          </div>
          <div className="mb-5 text-center text-lg text-gray-700">
            {`Base price of the item: $${itemPriceInUSD}`}
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
