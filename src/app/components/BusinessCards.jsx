import BusinessCard from "@/components/BusinessCard";
import BlackFooter from "@/components/BlackFooter";

export default function Cards({ pageDetails }) {
  return (
    <>
      <div className="mb-24 px-4 pt-32 lg:px-12">
        <div className="px-4 lg:px-36">
          <h1 className="leading-2xl mb-2 text-center text-3xl font-bold md:text-start md:text-5xl md:text-[54px] md:font-semibold md:leading-[54px]">
            {pageDetails.pageHeading}
          </h1>
          <p className="">{pageDetails.pageDescription}</p>

          <div>
            {pageDetails.cards.map((card, index) => (
              <BusinessCard
                key={card.id}
                identifier={pageDetails.identifier}
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
      </div>
      <BlackFooter />
    </>
  );
}
