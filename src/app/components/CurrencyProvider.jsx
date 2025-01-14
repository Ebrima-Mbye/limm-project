"use client";

import React, { createContext, useContext, useState } from "react";

const CurrencyContext = createContext();
export const useCurrency = () => useContext(CurrencyContext);

const BillingCycleContext = createContext();
export const useBillingCycle = () => useContext(BillingCycleContext);

export const CurrencyProvider = ({ children }) => {
  const [selectedCurrency, setSelectedCurrency] = useState("XOF");

  const [billingCycle, setBillingCycle] = useState("monthly"); // "monthly" or "yearly"

  return (
    <CurrencyContext.Provider value={{ selectedCurrency, setSelectedCurrency }}>
      <BillingCycleContext.Provider value={{ billingCycle, setBillingCycle }}>
        {children}
      </BillingCycleContext.Provider>
    </CurrencyContext.Provider>
  );
};
