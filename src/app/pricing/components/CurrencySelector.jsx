"use client";
import { useCurrency } from "@/hooks/CurrencyContext";
import { useLanguage } from "@/hooks/LanguageContext";

export default function CurrencySelector() {
  const supportedCurrencies = ["XOF", "GMD", "USD", "EUR"];
  const { selectedCurrency, setSelectedCurrency } = useCurrency();
  const { language } = useLanguage();

  const getCurrencyText = {
    en: "Currency:",
    fr: "Devise:",
    es: "Moneda:",
  };

  const currencyText = getCurrencyText[language];

  return (
    <div className="flex items-center gap-3">
      <p className="mr-[-6px]">{currencyText}</p>
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
    </div>
  );
}
