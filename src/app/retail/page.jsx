import RetailCard from "./components/RetailCard";
import WhiteFooter from "../components/WhiteFooter";
import photo1 from "../photos/retail/bio-food-market-woman-stand 1.png"
import photo2 from "../photos/retail/shallow-focus-african-female-seller-showing-content-phone-customer-market 1.png"
import photo3 from "../photos/retail/african-american-pharmacist-working-drugstore-hospital-pharmacy-african-healthcare 1.png"

export default function Retail() {
  const headings = [
    "Customer Engagement, Effortless and Effective",
    "Always Keep the Right Stock.",
    "Order Management Made Simple",
  ];
  const texts = [
    "Strengthen your customer relationships effortlessly with Limm. Utilize easy customer management tools to keep track of preferences, plan promotion campaigns, and create loyal patrons.",
    "Experience inventory bliss with Limm. Keep track of stock levels in real-time, prevent overstocking or stockouts, and ensure your shelves are consistently filled with the products your customers desire.",
    "Simplify your order process with Limm. From purchase to delivery, our platform streamlines the entire process, ensuring accuracy.",
  ];
  return (
    <div className="pt-32 px-12">
      <div className="px-36">
        <h1 className="text-[54px] font-bold">
        Inventory Intelligence, Every Item Counts.
        </h1>
        <p className="text-2xl">
        Manage sales, track inventory, and analyze customer preferences to keep your shelves stocked with what your customers love.
        </p>

        <RetailCard
          reversed={false}
          withSecondImage={true}
          mainImage={photo1}
          heading={headings[0]}
          text={texts[0]}
        />
        <RetailCard
          reversed={true}
          mainImage={photo2}
          heading={headings[1]}
          text={texts[1]}
        />
        <RetailCard
          reversed={false}
          mainImage={photo3}
          heading={headings[2]}
          text={texts[2]}
        />
      </div>
      <WhiteFooter />
    </div>
  );
}
