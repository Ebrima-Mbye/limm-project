import BusinessCard from "./BusinessCard";
import WhiteFooter from "./WhiteFooter";

export default function Cards({ pageDetails }) {
  return (
    <div className="pt-32 px-4 lg:px-12">
      <div className="px-4 lg:px-36">
        <h1 className="text-4xl text-center md:text-start md:text-5xl mb-4 leading-[50px] md:text-[54px] font-semibold md:font-medium">
          {pageDetails.pageHeading}
        </h1>
        <p className="text-2xl">{pageDetails.pageDescription}</p>

        <div>
          {pageDetails.cards.map((card, index) => (
            <BusinessCard
              key={card.id}
              withSecondImage={card.hasSubImages}
              mainImage={card.mainImage}
              heading={card.feature}
              text={card.description}
              subImages={card.hasSubImages ? card.subImages : []}
              href={card.href}
              subImagePosition={card.subImagePosition}
              index={index}
            />
          ))}
        </div>
      </div>
      <WhiteFooter />
    </div>
  );
}