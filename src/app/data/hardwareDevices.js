const limmRegister = "/images/limm_register.png";
const limmBluetoothPrinter = "/images/limm_bluetooth.png";

export const header = {
  en: {
    heading: "SEGMENTS",
    subHeading: "Find the Solution that best fits your Business",
  },
  fr: {
    heading: "SEGMENTS",
    subHeading:
      "Trouvez la solution qui correspond le mieux à votre entreprise",
  },
  es: {
    heading: "SEGMENTOS",
    subHeading: "Encuentra la solución que mejor se adapte a tu negocio",
  },
};

export const hardwareDevices = {
  en: [
    {
      id: "1",
      name: "LIMM REGISTER",
      price: "250.000 F",
      image: limmRegister,
      description:
        "Our complete user-friendly point-of-sale Register machine with a touch screen, easy-to-use software options and built-in payments.",
      details: [
        {
          heading: "Touch Screen",
          text: "Intuitive interface with a responsive touch screen, enhancing user interaction and operational efficiency.",
        },
        {
          heading: "QR Code & Bar Code Scanner",
          text: "Advanced scanning capabilities for quick and accurate reading of QR and bar codes, streamlining the checkout process.",
        },
        {
          heading: "Thermal Receipt Printer",
          text: "Reliable and fast printing of receipts with a thermal printer that ensures clear, long-lasting prints.",
        },
      ],
    },
    {
      id: "2",
      name: "LIMM BLUETOOTH PRINTER",
      price: "30.000 F",
      image: limmBluetoothPrinter,
      description:
        "Mini Portable bluetooth receipt printer. Generate instant receipts and labels for your business by connecting to the mobile app.",
      details: [
        {
          heading: "Portable",
          text: "Fits in your pocket or bag, allowing you to print receipts anywhere, anytime.",
        },
        {
          heading: "Fast and efficient",
          text: "Prints receipts instantly with minimal wait time.",
        },
        {
          heading: "Wireless connection",
          text: "Connects seamlessly to your smartphone or tablet via Bluetooth for easy printing.",
        },
      ],
    },
  ],
  fr: [
    {
      id: "1",
      name: "ENREGISTREUR LIMM",
      price: "250.000 F",
      image: limmRegister,
      description:
        "Notre machine d'enregistrement conviviale et complète avec écran tactile, options logicielles simples et paiements intégrés.",
      details: [
        {
          heading: "Écran Tactile",
          text: "Interface intuitive avec un écran tactile réactif, améliorant l'interaction utilisateur et l'efficacité opérationnelle.",
        },
        {
          heading: "Scanner de Codes QR et Barres",
          text: "Capacités de numérisation avancées pour une lecture rapide et précise des codes QR et barres, simplifiant le processus de caisse.",
        },
        {
          heading: "Imprimante de Reçus Thermique",
          text: "Impression fiable et rapide des reçus avec une imprimante thermique qui garantit des impressions claires et durables.",
        },
      ],
    },
    {
      id: "2",
      name: "IMPRIMANTE BLUETOOTH LIMM",
      price: "30.000 F",
      image: limmBluetoothPrinter,
      description:
        "Mini imprimante portable de reçus Bluetooth. Générez instantanément des reçus et des étiquettes pour votre entreprise en vous connectant à l'application mobile.",
      details: [
        {
          heading: "Portable",
          text: "Tient dans votre poche ou sac, vous permettant d'imprimer des reçus partout et à tout moment.",
        },
        {
          heading: "Rapide et efficace",
          text: "Imprime des reçus instantanément avec un temps d'attente minimal.",
        },
        {
          heading: "Connexion sans fil",
          text: "Se connecte facilement à votre smartphone ou tablette via Bluetooth pour une impression facile.",
        },
      ],
    },
  ],
  es: [
    {
      id: "1",
      name: "REGISTRADOR LIMM",
      price: "250.000 F",
      image: limmRegister,
      description:
        "Nuestra máquina registradora amigable y completa con pantalla táctil, opciones de software fáciles de usar y pagos integrados.",
      details: [
        {
          heading: "Pantalla Táctil",
          text: "Interfaz intuitiva con una pantalla táctil receptiva que mejora la interacción del usuario y la eficiencia operativa.",
        },
        {
          heading: "Escáner de Códigos QR y de Barras",
          text: "Capacidades de escaneo avanzadas para una lectura rápida y precisa de códigos QR y de barras, agilizando el proceso de pago.",
        },
        {
          heading: "Impresora Térmica de Recibos",
          text: "Impresión confiable y rápida de recibos con una impresora térmica que garantiza impresiones claras y duraderas.",
        },
      ],
    },
    {
      id: "2",
      name: "IMPRESORA BLUETOOTH LIMM",
      price: "30.000 F",
      image: limmBluetoothPrinter,
      description:
        "Mini impresora portátil de recibos Bluetooth. Genera recibos y etiquetas al instante para tu negocio conectándote a la aplicación móvil.",
      details: [
        {
          heading: "Portátil",
          text: "Cabe en tu bolsillo o bolso, permitiéndote imprimir recibos en cualquier momento y lugar.",
        },
        {
          heading: "Rápida y eficiente",
          text: "Imprime recibos instantáneamente con un tiempo de espera mínimo.",
        },
        {
          heading: "Conexión inalámbrica",
          text: "Se conecta sin problemas a tu smartphone o tableta mediante Bluetooth para una impresión fácil.",
        },
      ],
    },
  ],
};

export default hardwareDevices;
