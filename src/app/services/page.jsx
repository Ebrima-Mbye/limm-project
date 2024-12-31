import photo1 from "../photos/services/medium-shot-man-holding-smartphones 1.png";
import photo2 from "../photos/services/employee-listens-client-car-request 1.png";
import photo3 from "../photos/services/stylist-woman-taking-care-her-client-afro-hair 1.png";
import layer1 from "../photos/services/layer-1.png";
import layer2 from "../photos/services/layer-2.png";
import BusinessCards from "../components/BusinessCards";

export default function Retail() {
  const pageDetails = {
    pageHeading: "Smooth Invoicing, Quick Payments.",
    pageDescription:
      "Get paid faster with Limm's invoicing solution. Accept various payment methods, send invoices with ease, and track payments in real time for a steady cash flow.",
    cards: [
      {
        id: "1",
        mainImage: photo1,
        hasSubImages: true,
        subImages: [layer1, layer2],
        feature: "Client Connections Reinvented",
        description:
          "Strengthen client relationships. Limm's customer management tools provide insights, track interactions, and empower you to deliver personalized service with ease.",
        href: "#",
        subImagePosition: "bottom-right",
      },
      {
        id: "2",
        mainImage: photo2,
        hasSubImages: false,
        subImages: [],
        feature: "Smart Resource Allocation",
        description:
          "Efficiently allocate staff and materials, preventing bottlenecks and ensuring your service business operates at its peak efficiency.",
        href: "#",
      },
      {
        id: "3",
        mainImage: photo3,
        hasSubImages: false,
        subImages: [],
        feature: "Service Excellence",
        description:
          "Elevate your service game with Limm. From appointment scheduling to client management, we streamline your operations so you can focus on delivering exceptional service.",
        href: "#",
      },
    ],
  };
  return <BusinessCards pageDetails={pageDetails} />;
}
