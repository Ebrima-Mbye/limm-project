export const plansForMobileApp = [
  {
    planName: "FREEMIUM",
    prices: {
      XOF: { symbol: "CFA", value: 0 },
      GMD: { symbol: "D", value: 0 },
      USD: { symbol: "$", value: 0 },
      EUR: { symbol: "€", value: 0 },
    },
    bottonText: "Download",
    perks: [
      "Unlimited Invoicing",
      "1.8% commission on Invoices",
      "Free POS checkout for up to 10 items",
    ],
  },
  {
    planName: "PRO",
    prices: {
      XOF: { symbol: "CFA", value: 3000 },
      GMD: { symbol: "D", value: 5000 },
      USD: { symbol: "$", value: 50 },
      EUR: { symbol: "€", value: 45 },
    },
    bottonText: "Choose",
    perks: [
      "All free features",
      "Unlimited POS checkout item",
      "Advanced analytics & reports",
      "Enhanced customer support",
    ],
  },
];

export const plansForTabletApp = [
  {
    planName: "STANDARD",
    prices: {
      XOF: { symbol: "CFA", value: 4500 },
      GMD: { symbol: "D", value: 7000 },
      USD: { symbol: "$", value: 70 },
      EUR: { symbol: "€", value: 65 },
    },
    bottonText: "Download",
    perks: [
      "Up to 2 users",
      "50 products",
      "POS app",
      "Staff management",
      "Accounting, invoicing & quotes",
      "Business reports",
    ],
  },
  {
    planName: "PREMIUM",
    prices: {
      XOF: { symbol: "CFA", value: 9000 },
      GMD: { symbol: "D", value: 15000 },
      USD: { symbol: "$", value: 150 },
      EUR: { symbol: "€", value: 140 },
    },
    bottonText: "Choose",
    perks: [
      "All standard features",
      "Unlimited users",
      "Unlimited products",
      "Priority customer service",
      "Phone & tablet apps",
    ],
  },
];
