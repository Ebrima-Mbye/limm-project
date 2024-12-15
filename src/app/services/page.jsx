import ServiceCard from "./components/ServiceCard";
import WhiteFooter from "../components/WhiteFooter";
import photo1 from "../photos/services/medium-shot-man-holding-smartphones 1.png"
import photo2 from "../photos/services/employee-listens-client-car-request 1.png"
import photo3 from "../photos/services/stylist-woman-taking-care-her-client-afro-hair 1.png"

export default function Retail() {
  const headings = [
    "Client Connections Reinvented",
    "Smart Resource Allocation",
    "Service Excellence",
  ];
  const texts = [
    "Strengthen client relationships. Limm's customer management tools provide insights, track interactions, and empower you to deliver personalized service with ease.",
    "Efficiently allocate staff and materials, preventing bottlenecks and ensuring your service business operates at its peak efficiency.",
    "Elevate your service game with Limm. From appointment scheduling to client management, we streamline your operations so you can focus on delivering exceptional service.",
  ];
  return (
    <div className="pt-32 px-12">
      <div className="px-36">
        <h1 className="text-[54px] font-bold">
        Smooth Invoicing, Quick Payments.
        </h1>
        <p className="text-2xl">
        Get paid faster with Limm's invoicing solution. Accept various payment methods, send invoices with ease, and track payments in real time for a steady cash flow.
        </p>

        <ServiceCard
          reversed={false}
          withSecondImage={true}
          mainImage={photo1}
          heading={headings[0]}
          text={texts[0]}
        />
        <ServiceCard
          reversed={true}
          mainImage={photo2}
          heading={headings[1]}
          text={texts[1]}
        />
        <ServiceCard
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
