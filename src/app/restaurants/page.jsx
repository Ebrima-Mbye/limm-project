import BusinessCards from "@/components/BusinessCards";
import manCalculating from "@/photos/restaurants/man-calculating.png";
import smileyWoman from "@/photos/restaurants/smiley-woman.png";
import womanWithTablet from "@/photos/restaurants/woman-reading-tablet.png";
import { cookies } from "next/headers";
// const phoneImage = "/images/restaurants/phone.png";
import phoneImage from "@/photos/restaurants/phone-2.png";

// "Identifier" used to distinguish between the different pages of the website
export default async function Restaurant() {
  // Wait for cookies before accessing them
  const cookieStore = await cookies();
  const language = cookieStore.get("language")?.value || "en"; // Default to 'en'

  const pageDetails = {
    en: {
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
          subImagePosition: "top-left",
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
      identifier: "Restaurant",
    },
    fr: {
      pageHeading: "Gestion Simplifiée de Restaurant.",
      pageDescription:
        "Limm simplifie le contrôle des stocks, la planification du personnel et les transactions, vous donnant plus de temps pour vous concentrer sur la livraison d'une cuisine exceptionnelle.",
      cards: [
        {
          id: "1",
          mainImage: manCalculating,
          hasSubImages: true,
          subImages: [phoneImage],
          feature: "Service Rationalisé = Clients Heureux",
          description:
            "La gestion rationalisée du restaurant signifie un service plus rapide et des commandes précises. Élevez la satisfaction des clients et faites-les revenir pour plus.",
          href: "#",
          subImagePosition: "top-left",
        },
        {
          id: "2",
          mainImage: smileyWoman,
          hasSubImages: false,
          subImages: [],
          feature: "Maîtrise des Stocks, Sans Casse-tête",
          description:
            "Optimisez l'efficacité de votre cuisine avec des outils intuitifs de gestion des stocks. Évitez le gaspillage, suivez les ingrédients en temps réel et assurez-vous que votre menu est toujours bien approvisionné.",
          href: "#",
        },
        {
          id: "3",
          mainImage: womanWithTablet,
          hasSubImages: false,
          subImages: [],
          feature: "Coordination du Personnel",
          description:
            "Gardez votre cuisine synchronisée avec les outils de gestion du personnel. Simplifiez la planification, suivez les horaires et améliorez la communication pour garantir une équipe bien coordonnée pour des opérations sans faille.",
          href: "#",
        },
      ],
      identifier: "Restaurant",
    },
    es: {
      pageHeading: "Gestión Simplificada de Restaurantes.",
      pageDescription:
        "Limm simplifica el control de inventario, la programación del personal y las transacciones, dándote más tiempo para enfocarte en ofrecer una cocina excepcional.",
      cards: [
        {
          id: "1",
          mainImage: manCalculating,
          hasSubImages: true,
          subImages: [phoneImage],
          feature: "Servicio Optimizado = Clientes Felices",
          description:
            "La gestión optimizada del restaurante significa un servicio más rápido y pedidos precisos. Eleva la satisfacción del cliente y haz que regresen por más.",
          href: "#",
          subImagePosition: "top-left",
        },
        {
          id: "2",
          mainImage: smileyWoman,
          hasSubImages: false,
          subImages: [],
          feature: "Dominio del Inventario, Sin Dolores de Cabeza",
          description:
            "Optimiza la eficiencia de tu cocina con herramientas intuitivas de gestión de inventarios. Previene el desperdicio, sigue los ingredientes en tiempo real y asegúrate de que tu menú siempre esté bien surtido.",
          href: "#",
        },
        {
          id: "3",
          mainImage: womanWithTablet,
          hasSubImages: false,
          subImages: [],
          feature: "Coordinación del Personal",
          description:
            "Mantén tu cocina sincronizada con herramientas de gestión de personal. Simplifica la programación, sigue los turnos y mejora la comunicación, asegurando un equipo bien coordinado para operaciones fluidas.",
          href: "#",
        },
      ],
      identifier: "Restaurant",
    },
  };

  console.log("Language: ", language);

  return <BusinessCards pageDetails={pageDetails[language]} />;
}
