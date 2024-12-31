import Image from "next/image";
import { useRouter } from "next/navigation";

const arrowLeft = "/images/login/arrow-left.png";

export default function AuthTopBar() {
  const router = useRouter();
  const supportedLanguages = ["En", "Fr", "Ar"];
  const navigateToHomePage = () => {
    router.push("/");

    setTimeout(() => {
      router.refresh();
    }, 500);
  };
  return (
    <div>
      <div className="absolute left-6 top-6 flex items-center md:left-8 md:top-8">
        <button
          onClick={navigateToHomePage}
          className="flex gap-3 text-gray-500 transition-colors hover:text-gray-800"
        >
          <Image
            src={arrowLeft}
            alt="arrow left"
            className=""
            width={25}
            height={25}
          />
          <p className="[text-[24px] font-bold leading-[28.8px] text-[#64758D]">
            Back to main page
          </p>
        </button>
      </div>

      {/* Top right Language Toggle */}
      <div className="absolute right-6 top-6 md:right-8 md:top-8">
        <select
          id="currency-selector"
          className="rounded-full border-2 border-gray-500 bg-inherit px-2 py-2 text-center font-bold"
        >
          {supportedLanguages.map((language, index) => (
            <option
              key={index}
              value={language}
              className="bg-background text-foreground"
            >
              {language}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
