export function pageHeading(language) {
  return language === "en" ? (
    <>
      Empowering Businesses with Innovative <br /> Solutions.
    </>
  ) : language === "fr" ? (
    <>
      Donner aux entreprises les moyens d&apos;agir avec des solutions
      Innovantes.
    </>
  ) : language === "es" ? (
    <>Empoderando a las empresas con soluciones Innovadoras.</>
  ) : (
    ""
  );
}

export const cards = {
  en: [
    {
      title: "Bookkeeping",
      text: "Ditch the spreadsheet and messy records. Limm automates bookkeeping, saving you time and ensuring accuracy.",
    },
    {
      title: "Inventory Management",
      text: (
        <>
          Limm&apos;s smart inventory management keeps you in control,
          minimizing stockouts and optimizing ordering."
        </>
      ),
    },
  ],
  fr: [
    {
      title: "Comptabilité",
      text: "Abandonnez les feuilles de calcul et les registres désordonnés. Limm automatise la comptabilité, vous faisant gagner du temps et garantissant la précision.",
    },
    {
      title: "Gestion des stocks",
      text: "La gestion intelligente des stocks de Limm vous garde maître de la situation, minimisant les ruptures de stock et optimisant les commandes.",
    },
  ],
  es: [
    {
      title: "Contabilidad",
      text: "Deja atrás las hojas de cálculo y los registros desordenados. Limm automatiza la contabilidad, ahorrándote tiempo y garantizando precisión.",
    },
    {
      title: "Gestión de inventarios",
      text: "La gestión inteligente de inventarios de Limm te mantiene en control, minimizando las faltas de stock y optimizando los pedidos.",
    },
  ],
};

export const bottomText = {
  en: {
    heading:
      "One Platform for Payments, Inventory, and Staff Management for SMWs",
    subText: (
      <>
        Built for Africa, powered by technology. Limm is your one-stop shop for{" "}
        <br />
        streamlining operations, growing your business, and thriving in the
        digital age.
      </>
    ),
  },
  fr: {
    heading:
      "Une plateforme pour les paiements, la gestion des stocks et du personnel pour les PME",
    subText: (
      <>
        Conçu pour l'Afrique, alimenté par la technologie. Limm est votre
        solution unique pour <br />
        rationaliser les opérations, développer votre entreprise et prospérer à
        l'ère numérique.
      </>
    ),
  },
  es: {
    heading:
      "Una plataforma para pagos, inventario y gestión de personal para PYMEs",
    subText: (
      <>
        Diseñado para África, impulsado por la tecnología. Limm es tu solución
        integral para <br />
        optimizar operaciones, hacer crecer tu negocio y prosperar en la era
        digital.
      </>
    ),
  },
};
