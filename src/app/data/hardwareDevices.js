import limmRegister from "../photos/register.png";
import limmRegisterWithBG from "../photos/register-with-bg.png";
import limmBluetoothPrinter from "../photos/bluetooth-printer.png";
import limmBluetoothPrinterWithBG from "../photos/bluetooth-printer-with-bg.png";

const hardwareDevices = [
  {
    id: "1",
    name: "LIMM REGISTER",
    price: "250.000 F",
    image: limmRegister,
    bigImage: limmRegisterWithBG,
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
    bigImage: limmBluetoothPrinterWithBG,
    description:
      "Mini Portable bluetooth receipt printer. Generate instant, receipts and labels for your busioness by connecting to the mobile app.",
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
];

export default hardwareDevices;
