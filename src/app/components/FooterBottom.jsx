import Link from "next/link";
import LanguageSelector from "@/components/LanguageSelector";
import { cookies } from "next/headers";

export default async function FooterBottom(props) {
  // Wait for cookies before accessing them
  const cookieStore = await cookies();
  const language = cookieStore.get("language")?.value || "en"; // Default to 'en'

  const links = {
    en: [
      { text: "COOKIES", href: "/" },
      { text: "PRIVACY POLICY", href: "/" },
      { text: "TERMS & CONDITIONS", href: "/" },
    ],
    fr: [
      { text: "COOKIES", href: "/" },
      { text: "POLITIQUE DE CONFIDENTIALITÉ", href: "/" },
      { text: "CONDITIONS GÉNÉRALES", href: "/" },
    ],
    es: [
      { text: "COOKIES", href: "/" },
      { text: "POLÍTICA DE PRIVACIDAD", href: "/" },
      { text: "TÉRMINOS Y CONDICIONES", href: "/" },
    ],
  };

  const isWhite = props.isWhite;

  return (
    <>
      <hr
        style={{ borderColor: isWhite ? "rgb(200, 200, 200)" : "white" }}
        className="my-2 border lg:my-0"
      />

      <div
        style={{
          color: isWhite ? "black" : "white",
        }}
        className="flex h-auto flex-col items-center justify-between gap-8 pb-10 text-[14px] text-white lg:h-14 lg:flex-row lg:pb-0"
      >
        <div className="flex flex-[3] flex-col items-center justify-between px-8 lg:flex-row">
          <div className="mb-5 flex items-center lg:mb-0">
            {isWhite ? (
              <span>Copyright &copy; 2024 Limm</span>
            ) : (
              <span>&copy; 2024 Limm</span>
            )}
          </div>
          <div
            style={{
              color: isWhite ? "#365BB7" : "white",
            }}
            className="ml-2 flex flex-col gap-5 text-xs lg:flex-row lg:gap-10"
          >
            {links[language].map((link, index) => (
              <Link
                key={index}
                className="cursor-pointer text-center underline"
                href={link.href}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
        <LanguageSelector isWhite={isWhite} />
      </div>
    </>
  );
}
