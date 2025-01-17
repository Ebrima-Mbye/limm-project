export function pageHeading(language) {
  return language === "en" ? (
    <>
      Empowering Businesses with Innovative <br /> Solutions.
    </>
  ) : language === "fr" ? (
    <>Donner aux entreprises les moyens d&apos;agir avec des solutions Innovantes.</>
  ) : language === "es" ? (
    <>Empoderando a las empresas con soluciones Innovadoras.</>
  ) : (
    ""
  );
}
