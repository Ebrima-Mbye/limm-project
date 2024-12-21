import Card from "./Card";

export default function Cards({ pageDetails }) {
  //   const details = {
  //     pageHeading: "Simplified Restaurant Management.",
  //     pageDescription:
  //       "Limm simplifies inventory control, staff scheduling, and transactions, giving you more time to focus on delivering exceptional cuisine.",
  //     cards: [
  //       {
  //         mainImage: manCalculating,
  //         hasSubImages: true,
  //         subImages: [phoneImage],
  //         feature: "Streamlined Service = Happy Customers",
  //         description:
  //           "Streamlined restaurant management means quicker service, and accurate orders. Elevate customer satisfaction and keep them coming back for more.",
  //         href: "#",
  //       },
  //       {
  //         mainImage: smileyWoman,
  //         hasSubImages: false,
  //         subImages: [],
  //         feature: "Inventory Mastery, No Headaches",
  //         description:
  //           "Optimize your kitchen's efficiency with intuitive inventory tools. Prevent wastage, track ingredients in real-time, and ensure your menu is always well-stocked.",
  //         href: "#",
  //       },
  //       {
  //         mainImage: womanWithTablet,
  //         hasSubImages: false,
  //         subImages: [],
  //         feature: "Staff Coordination",
  //         description:
  //           "Keep your kitchen in sync with staff management tools. Simplify scheduling, track shifts, and enhance communication, ensuring a well-coordinated team for smooth operations.",
  //         href: "#",
  //       },
  //     ],
  //   };

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
          {pageDetails.pageHeading}
        </h1>
        <p className="text-2xl">{pageDetails.pageDescription}</p>

        <div>
          {pageDetails.cards.map((card, index) => (
            <Card
              key={card.id}
              withSecondImage={card.hasSubImages}
              mainImage={card.mainImage}
              heading={card.feature}
              text={card.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
