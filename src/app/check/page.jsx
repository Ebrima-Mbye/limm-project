import Card from "./components/Card";
import Cards from "./components/Cards";
import WhiteFooter from "../components/WhiteFooter";
import manCalculating from "../photos/restaurants/man-calculating.png";
import smileyWoman from "../photos/restaurants/smiley-woman.png";
import phoneImage from "../photos/restaurants/phone.png";
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

  const headings = [
    "Streamlined Service = Happy Customers",
    "Inventory Mastery, No Headaches",
    "Staff Coordination",
  ];
  const texts = [
    "Streamlined restaurant management means quicker service, and accurate orders. Elevate customer satisfaction and keep them coming back for more.",
    "Optimize your kitchen's efficiency with intuitive inventory tools. Prevent wastage, track ingredients in real-time, and ensure your menu is always well-stocked.",
    "Keep your kitchen in sync with staff management tools. Simplify scheduling, track shifts, and enhance communication, ensuring a well-coordinated team for smooth operations.",
  ];
  return (
    <div className="pt-32 px-4 lg:px-12 border-red-400 border">
      <div className="px-4 lg:px-36">
        <h1 className="text-5xl mb-4 leading-[50px] md:text-[54px] font-medium">
          Simplified Restaurant Management.
        </h1>
        <p className="text-2xl">
          Limm simplifies inventory control, staff scheduling, and transactions,
          giving you more time to focus on delivering exceptional cuisine.
        </p>

        <div>
          <Card
            reversed={false}
            withSecondImage={true}
            mainImage={manCalculating}
            heading={headings[0]}
            text={texts[0]}
            index={0}
          />
          <Card
            reversed={true}
            mainImage={smileyWoman}
            heading={headings[1]}
            text={texts[1]}
            index={1}
          />
          <Card
            reversed={false}
            mainImage={womanWithTablet}
            heading={headings[2]}
            text={texts[2]}
            index={2}
          />
        </div>
      </div>
      <Cards pageDetails={pageDetails} />
      <WhiteFooter />
    </div>
  );
}
