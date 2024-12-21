import photo1 from "../photos/retail/bio-food-market-woman-stand 1.png";
import photo2 from "../photos/retail/shallow-focus-african-female-seller-showing-content-phone-customer-market 1.png";
import photo3 from "../photos/retail/african-american-pharmacist-working-drugstore-hospital-pharmacy-african-healthcare 1.png";
import layer1 from "../photos/retail/layer-1.png";
import layer2 from "../photos/retail/layer-2.png";
import layer3 from "../photos/retail/checkout.png";
import BusinessCards from "../components/BusinessCards";

export default function Retail() {
  const pageDetails = {
    pageHeading: "Inventory Intelligence, Every Item Counts.",
    pageDescription:
      "Manage sales, track inventory, and analyze customer preferences to keep your shelves stocked with what your customers love.",
    cards: [
      {
        id: "1",
        mainImage: photo1,
        hasSubImages: true,
        subImages: [layer1, layer2, layer3],
        feature: "Customer Engagement, Effortless and Effective",
        description:
          "Strengthen your customer relationships effortlessly with Limm. Utilize easy customer management tools to keep track of preferences, plan promotion campaigns, and create loyal patrons.",
        href: "#",
        subImagePosition: "bottom-right",
      },
      {
        id: "2",
        mainImage: photo2,
        hasSubImages: false,
        subImages: [],
        feature: "Always Keep the Right Stock.",
        description:
          "Experience inventory bliss with Limm. Keep track of stock levels in real-time, prevent overstocking or stockouts, and ensure your shelves are consistently filled with the products your customers desire.",
        href: "#",
      },
      {
        id: "3",
        mainImage: photo3,
        hasSubImages: false,
        subImages: [],
        feature: "Order Management Made Simple",
        description:
          "Simplify your order process with Limm. From purchase to delivery, our platform streamlines the entire process, ensuring accuracy.",
        href: "#",
      },
    ],
  };
  return <BusinessCards pageDetails={pageDetails} />;
}
