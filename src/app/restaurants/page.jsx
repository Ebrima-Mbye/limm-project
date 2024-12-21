import BusinessCards from "../components/BusinessCards";
import phoneImage from "../photos/restaurants/phone.png";
import manCalculating from "../photos/restaurants/man-calculating.png";
import smileyWoman from "../photos/restaurants/smiley-woman.png";
import womanWithTablet from "../photos/restaurants/woman-reading-tablet.png";

export default function Restaurant() {
  const pageDetails = {
    pageHeading: "Simplified Restaurant Management.",
    pageDescription:
      "Limm simplifies inventory control, staff scheduling, and transactions, giving you more time to focus on delivering exceptional cuisine.",
    cards: [
      {
        id: "1",
        mainImage: manCalculating,
        hasSubImages: true,
        subImages: [phoneImage],
        feature: "Streamlined Service = Happy Customers",
        description:
          "Streamlined restaurant management means quicker service, and accurate orders. Elevate customer satisfaction and keep them coming back for more.",
        href: "#",
        subImagePosition: "top-left",
      },
      {
        id: "2",
        mainImage: smileyWoman,
        hasSubImages: false,
        subImages: [],
        feature: "Inventory Mastery, No Headaches",
        description:
          "Optimize your kitchen's efficiency with intuitive inventory tools. Prevent wastage, track ingredients in real-time, and ensure your menu is always well-stocked.",
        href: "#",
      },
      {
        id: "3",
        mainImage: womanWithTablet,
        hasSubImages: false,
        subImages: [],
        feature: "Staff Coordination",
        description:
          "Keep your kitchen in sync with staff management tools. Simplify scheduling, track shifts, and enhance communication, ensuring a well-coordinated team for smooth operations.",
        href: "#",
      },
    ],
  };
  return <BusinessCards pageDetails={pageDetails} />;
}
