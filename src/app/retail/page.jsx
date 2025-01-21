import photo1 from "../photos/retail/bio-food-market-woman-stand 1.png";
import photo2 from "../photos/retail/shallow-focus-african-female-seller-showing-content-phone-customer-market 1.png";
import photo3 from "../photos/retail/african-american-pharmacist-working-drugstore-hospital-pharmacy-african-healthcare 1.png";
import layer1 from "../photos/retail/layer-1.png";
import layer2 from "../photos/retail/layer-2.png";
import layer3 from "../photos/retail/checkout.png";
import BusinessCards from "../components/BusinessCards";
import { cookies } from "next/headers";

// "Identifier" used to distinguish between the different pages of the website
export default async function Retail() {
  // Wait for cookies before accessing them
  const cookieStore = await cookies();
  const language = cookieStore.get("language")?.value || "en"; // Default to 'en'

  const pageDetails = {
    en: {
      pageHeading: "Inventory Intelligence, Every Item Counts.",
      pageDescription:
        "Manage sales, track inventory, and analyze customer preferences to keep your shelves stocked with what your customers love.",
      cards: [
        {
          id: "1",
          mainImage: photo1,
          hasSubImages: true,
          subImages: [layer1, layer2, layer3],
          feature: "Customer Engagement, Effortless and Effective",
          description:
            "Strengthen your customer relationships effortlessly with Limm. Utilize easy customer management tools to keep track of preferences, plan promotion campaigns, and create loyal patrons.",
          href: "#",
          subImagePosition: "bottom-right",
        },
        {
          id: "2",
          mainImage: photo2,
          hasSubImages: false,
          subImages: [],
          feature: "Always Keep the Right Stock.",
          description:
            "Experience inventory bliss with Limm. Keep track of stock levels in real-time, prevent overstocking or stockouts, and ensure your shelves are consistently filled with the products your customers desire.",
          href: "#",
        },
        {
          id: "3",
          mainImage: photo3,
          hasSubImages: false,
          subImages: [],
          feature: "Order Management Made Simple",
          description:
            "Simplify your order process with Limm. From purchase to delivery, our platform streamlines the entire process, ensuring accuracy.",
          href: "#",
        },
      ],
      identifier: "Retail",
    },
    fr: {
      pageHeading: "Intelligence d'Inventaire, Chaque Article Compte.",
      pageDescription:
        "Gérez les ventes, suivez les stocks et analysez les préférences des clients pour garder vos étagères remplies de ce que vos clients aiment.",
      cards: [
        {
          id: "1",
          mainImage: photo1,
          hasSubImages: true,
          subImages: [layer1, layer2, layer3],
          feature: "Engagement Client, Sans Effort et Efficace",
          description:
            "Renforcez vos relations clients sans effort avec Limm. Utilisez des outils simples de gestion des clients pour suivre les préférences, planifier des campagnes promotionnelles et fidéliser les clients.",
          href: "#",
          subImagePosition: "bottom-right",
        },
        {
          id: "2",
          mainImage: photo2,
          hasSubImages: false,
          subImages: [],
          feature: "Gardez Toujours le Bon Stock.",
          description:
            "Vivez une expérience sans souci des stocks avec Limm. Suivez les niveaux de stock en temps réel, évitez les excédents ou ruptures de stock, et assurez-vous que vos étagères sont toujours remplies des produits que vos clients désirent.",
          href: "#",
        },
        {
          id: "3",
          mainImage: photo3,
          hasSubImages: false,
          subImages: [],
          feature: "Gestion des Commandes Simplifiée",
          description:
            "Simplifiez votre processus de commande avec Limm. De l'achat à la livraison, notre plateforme simplifie l'ensemble du processus, garantissant précision et efficacité.",
          href: "#",
        },
      ],
      identifier: "Retail",
    },
    es: {
      pageHeading: "Inteligencia de Inventario, Cada Artículo Cuenta.",
      pageDescription:
        "Administra ventas, realiza un seguimiento del inventario y analiza las preferencias de los clientes para mantener tus estantes llenos con lo que tus clientes aman.",
      cards: [
        {
          id: "1",
          mainImage: photo1,
          hasSubImages: true,
          subImages: [layer1, layer2, layer3],
          feature: "Compromiso del Cliente, Sin Esfuerzo y Eficaz",
          description:
            "Fortalece tus relaciones con los clientes sin esfuerzo con Limm. Utiliza herramientas de gestión de clientes fáciles para hacer un seguimiento de sus preferencias, planificar campañas promocionales y crear clientes leales.",
          href: "#",
          subImagePosition: "bottom-right",
        },
        {
          id: "2",
          mainImage: photo2,
          hasSubImages: false,
          subImages: [],
          feature: "Mantén Siempre el Stock Correcto.",
          description:
            "Vive la experiencia de inventario con Limm. Realiza un seguimiento de los niveles de stock en tiempo real, evita el exceso de stock o desabastecimientos, y asegúrate de que tus estantes siempre estén llenos con los productos que tus clientes desean.",
          href: "#",
        },
        {
          id: "3",
          mainImage: photo3,
          hasSubImages: false,
          subImages: [],
          feature: "Gestión de Pedidos Simplificada",
          description:
            "Simplifica tu proceso de pedidos con Limm. Desde la compra hasta la entrega, nuestra plataforma agiliza todo el proceso, asegurando precisión.",
          href: "#",
        },
      ],
      identifier: "Retail",
    },
  };

  return <BusinessCards pageDetails={pageDetails[language]} />;
}
