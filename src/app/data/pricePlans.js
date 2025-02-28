export const getMobileAppHeader = {
  en: "MOBILE APP",
  fr: "APPLICATION MOBILE",
  es: "APLICACIÓN MÓVIL",
};
export const getTabletAppHeader = {
  en: "POS TABLET",
  fr: "TABLETTE POS",
  es: "TABLETA POS",
};
export const getPlansForMobileApp = {
  en: [
    {
      planName: "FREEMIUM",
      prices: {
        XOF: { symbol: "CFA", value: 0 },
        GMD: { symbol: "D", value: 0 },
        USD: { symbol: "$", value: 0 },
        EUR: { symbol: "€", value: 0 },
      },
      buttonText: "Download",
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
      buttonText: "Choose",
      perks: [
        "All free features",
        "Unlimited POS checkout item",
        "Advanced analytics & reports",
        "Enhanced customer support",
      ],
    },
  ],
  fr: [
    {
      planName: "GRATUIT",
      prices: {
        XOF: { symbol: "CFA", value: 0 },
        GMD: { symbol: "D", value: 0 },
        USD: { symbol: "$", value: 0 },
        EUR: { symbol: "€", value: 0 },
      },
      buttonText: "Télécharger",
      perks: [
        "Facturation illimitée",
        "Commission de 1,8 % sur les factures",
        "Validation POS gratuite pour jusqu'à 10 articles",
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
      buttonText: "Choisir",
      perks: [
        "Toutes les fonctionnalités gratuites",
        "Validation POS illimitée",
        "Analyses et rapports avancés",
        "Support client amélioré",
      ],
    },
  ],
  es: [
    {
      planName: "GRATIS",
      prices: {
        XOF: { symbol: "CFA", value: 0 },
        GMD: { symbol: "D", value: 0 },
        USD: { symbol: "$", value: 0 },
        EUR: { symbol: "€", value: 0 },
      },
      buttonText: "Descargar",
      perks: [
        "Facturación ilimitada",
        "Comisión del 1,8 % en las facturas",
        "Validación POS gratuita para hasta 10 artículos",
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
      buttonText: "Elegir",
      perks: [
        "Todas las características gratuitas",
        "Validación POS ilimitada",
        "Analíticas y informes avanzados",
        "Soporte al cliente mejorado",
      ],
    },
  ],
};

export const getPlansForTabletApp = {
  en: [
    {
      planName: "STANDARD",
      prices: {
        XOF: { symbol: "CFA", value: 4500 },
        GMD: { symbol: "D", value: 7000 },
        USD: { symbol: "$", value: 70 },
        EUR: { symbol: "€", value: 65 },
      },
      buttonText: "Download",
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
      buttonText: "Choose",
      perks: [
        "All standard features",
        "Unlimited users",
        "Unlimited products",
        "Priority customer service",
        "Phone & tablet apps",
      ],
    },
  ],
  fr: [
    {
      planName: "STANDARD",
      prices: {
        XOF: { symbol: "CFA", value: 4500 },
        GMD: { symbol: "D", value: 7000 },
        USD: { symbol: "$", value: 70 },
        EUR: { symbol: "€", value: 65 },
      },
      buttonText: "Télécharger",
      perks: [
        "Jusqu'à 2 utilisateurs",
        "50 produits",
        "Application POS",
        "Gestion du personnel",
        "Comptabilité, facturation & devis",
        "Rapports d'activité",
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
      buttonText: "Choisir",
      perks: [
        "Toutes les fonctionnalités standard",
        "Utilisateurs illimités",
        "Produits illimités",
        "Service client prioritaire",
        "Applications pour téléphone et tablette",
      ],
    },
  ],
  es: [
    {
      planName: "ESTÁNDAR",
      prices: {
        XOF: { symbol: "CFA", value: 4500 },
        GMD: { symbol: "D", value: 7000 },
        USD: { symbol: "$", value: 70 },
        EUR: { symbol: "€", value: 65 },
      },
      buttonText: "Descargar",
      perks: [
        "Hasta 2 usuarios",
        "50 productos",
        "Aplicación POS",
        "Gestión de personal",
        "Contabilidad, facturación y presupuestos",
        "Informes empresariales",
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
      buttonText: "Elegir",
      perks: [
        "Todas las características estándar",
        "Usuarios ilimitados",
        "Productos ilimitados",
        "Servicio al cliente prioritario",
        "Aplicaciones para teléfono y tableta",
      ],
    },
  ],
};
