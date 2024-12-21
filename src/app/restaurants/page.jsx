import RestaurantCard from "./components/RestaurantCard";
import WhiteFooter from "../components/WhiteFooter";
import manCalculating from "../photos/restaurants/man-calculating.png";
import smileyWoman from "../photos/restaurants/smiley-woman.png";
import womanWithTablet from "../photos/restaurants/woman-reading-tablet.png";

export default function Restaurant() {
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
    <div className="pt-32 px-12">
      <div className="px-36">
        <h1 className="text-[54px] font-bold">
          Simplified Restaurant Management.
        </h1>
        <p className="text-2xl">
          Limm simplifies inventory control, staff scheduling, and transactions,
          giving you more time to focus on delivering exceptional cuisine.
        </p>

        <div>
          <RestaurantCard
            reversed={false}
            withSecondImage={true}
            mainImage={manCalculating}
            heading={headings[0]}
            text={texts[0]}
          />
          <RestaurantCard
            reversed={true}
            mainImage={smileyWoman}
            heading={headings[1]}
            text={texts[1]}
          />
          <RestaurantCard
            reversed={false}
            mainImage={womanWithTablet}
            heading={headings[2]}
            text={texts[2]}
          />
        </div>
      </div>
      <WhiteFooter />
    </div>
  );
}
