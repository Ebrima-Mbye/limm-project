import photo1 from "../photos/services/medium-shot-man-holding-smartphones 1.png";
import photo2 from "../photos/services/employee-listens-client-car-request 1.png";
import photo3 from "../photos/services/stylist-woman-taking-care-her-client-afro-hair 1.png";
import layer1 from "../photos/services/layer-1.png";
import layer2 from "../photos/services/layer-2.png";
import BusinessCards from "../components/BusinessCards";
import { cookies } from "next/headers";

export default async function Retail() {
  // Wait for cookies before accessing them
  const cookieStore = await cookies();
  const language = cookieStore.get("language")?.value || "en"; // Default to 'en'

  const pageDetails = {
    en: {
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
    },
    fr: {
      pageHeading: "Facturation Fluide, Paiements Rapides.",
      pageDescription:
        "Soyez payé plus rapidement grâce à la solution de facturation de Limm. Acceptez divers modes de paiement, envoyez des factures facilement et suivez les paiements en temps réel pour un flux de trésorerie constant.",
      cards: [
        {
          id: "1",
          mainImage: photo1,
          hasSubImages: true,
          subImages: [layer1, layer2],
          feature: "Connections Client Réinventées",
          description:
            "Renforcez les relations avec les clients. Les outils de gestion des clients de Limm fournissent des informations, suivent les interactions et vous permettent de fournir un service personnalisé facilement.",
          href: "#",
          subImagePosition: "bottom-right",
        },
        {
          id: "2",
          mainImage: photo2,
          hasSubImages: false,
          subImages: [],
          feature: "Allocation Intelligente des Ressources",
          description:
            "Allouez efficacement le personnel et les matériaux, évitez les goulots d'étranglement et assurez-vous que votre entreprise de services fonctionne à son efficacité maximale.",
          href: "#",
        },
        {
          id: "3",
          mainImage: photo3,
          hasSubImages: false,
          subImages: [],
          feature: "Excellence du Service",
          description:
            "Élevez votre niveau de service avec Limm. De la planification des rendez-vous à la gestion des clients, nous rationalisons vos opérations pour que vous puissiez vous concentrer sur l'offre d'un service exceptionnel.",
          href: "#",
        },
      ],
    },
    es: {
      pageHeading: "Facturación Rápida, Pagos Rápidos.",
      pageDescription:
        "Recibe pagos más rápido con la solución de facturación de Limm. Acepta varios métodos de pago, envía facturas con facilidad y realiza un seguimiento de los pagos en tiempo real para un flujo de caja constante.",
      cards: [
        {
          id: "1",
          mainImage: photo1,
          hasSubImages: true,
          subImages: [layer1, layer2],
          feature: "Conexiones con Clientes Reinventadas",
          description:
            "Fortalece las relaciones con los clientes. Las herramientas de gestión de clientes de Limm proporcionan información, realizan un seguimiento de las interacciones y te permiten ofrecer un servicio personalizado con facilidad.",
          href: "#",
          subImagePosition: "bottom-right",
        },
        {
          id: "2",
          mainImage: photo2,
          hasSubImages: false,
          subImages: [],
          feature: "Asignación Inteligente de Recursos",
          description:
            "Asigna eficientemente el personal y los materiales, evitando cuellos de botella y asegurando que tu empresa de servicios funcione con su máxima eficiencia.",
          href: "#",
        },
        {
          id: "3",
          mainImage: photo3,
          hasSubImages: false,
          subImages: [],
          feature: "Excelencia en el Servicio",
          description:
            "Eleva tu nivel de servicio con Limm. Desde la programación de citas hasta la gestión de clientes, simplificamos tus operaciones para que puedas centrarte en ofrecer un servicio excepcional.",
          href: "#",
        },
      ],
    },
  };

  return <BusinessCards pageDetails={pageDetails[language]} />;
}
