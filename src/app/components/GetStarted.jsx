import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
const appStoreImage = "/images/apple-dark-modern.png";
const googlePlayStoreImage = "/images/google-dark-modern.png";
const mainImage = "/images/get-started-main-photo.png";

export default async function HomeGetStarted() {
  // Wait for cookies before accessing them
  const cookieStore = await cookies();
  const language = cookieStore.get("language")?.value || "en"; // Default to 'en'

  const getText = {
    en: "GET STARTED WITH THE APP NOW",
    fr: "COMMENCEZ AVEC L'APPLICATION MAINTENANT",
    es: "COMIENCE A USAR LA APLICACIÓN AHORA",
  };

  const text = getText[language];
  return (
    // <section className="hidden p-12 md:block md:h-[100vh]">
    <section className="px-5 pb-0 pt-6 md:block md:p-12 md:pb-0">
      <Image
        src={mainImage}
        width={1100}
        height={800}
        alt="man pointing at phone"
        className="lg:min-w-auto mx-auto min-w-[99%] md:min-w-[40%]"
      />
      <div className="my-7 text-center font-bold text-blue-400 md:my-12">
        <Link
          className="cursor-pointer text-2xl text-[#356BB7] md:text-4xl"
          href="/"
        >
          {text}
        </Link>
      </div>
      <div className="flex h-20 items-center justify-center gap-14">
        <div className="cursor-pointer">
          <Image
            src={appStoreImage}
            alt="app store image"
            width={500}
            height={30}
            className="transition-all hover:scale-[1.1] hover:shadow-sm md:w-[250px]"
          />
        </div>
        <div className="cursor-pointer">
          <Image
            src={googlePlayStoreImage}
            alt="google play store image"
            width={500}
            height={30}
            className="transition-all hover:scale-[1.1] hover:shadow-sm md:w-[250px]"
          />
        </div>
      </div>
    </section>
  );
}
