"use client";
import { useCurrency } from "@/components/CurrencyProvider";

export default function CurrencySelector() {
  const supportedCurrencies = ["XOF", "GMD", "USD", "EUR"];
  const { selectedCurrency, setSelectedCurrency } = useCurrency();

  return (
    <select
      id="currency-selector"
      className="rounded-full border-2 border-gray-700 bg-inherit px-2 py-2 text-center font-bold"
      value={selectedCurrency}
      onChange={(e) => setSelectedCurrency(e.target.value)}
    >
      {supportedCurrencies.map((currency, index) => (
        <option key={index} value={currency} className="">
          {currency}
        </option>
      ))}
    </select>
  );
}
