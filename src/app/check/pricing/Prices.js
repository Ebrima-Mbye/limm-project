export default class Prices {
  constructor() {
    this.prices = {
      USD: {
        item1: 10,
        item2: 20,
        item3: 30,
      },
      EUR: {
        item1: 9,
        item2: 18,
        item3: 27,
      },
      GBP: {
        item1: 8,
        item2: 16,
        item3: 24,
      },
      GMD: {
        item1: 600,
        item2: 1200,
        item3: 1800,
      },
      // Add more currencies and their prices as needed
    };
  }

  getPriceInUSD(item) {
    return this.prices.USD[item] || "Price not available";
  }

  getPriceInLocalCurrency(currency, item) {
    if (this.prices[currency] && this.prices[currency][item]) {
      return this.prices[currency][item]; // Return the price in the local currency if it exists
    }
    return this.getPriceInUSD(item); // Fallback to USD price if not found
  }
}
