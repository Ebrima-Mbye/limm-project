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
      <div className="absolute top-8 left-8 flex items-center">
        <button
          onClick={navigateToHomePage}
          className="text-gray-500 hover:text-gray-800 transition-colors flex gap-3"
        >
          <Image src={arrowLeft} alt="arrow left" className="" width={25} height={25} />
          <p className="[text-[24px] text-[#64758D] font-bold leading-[28.8px]">
            Back to main page
          </p>
        </button>
      </div>

      {/* Top right Language Toggle */}
      <div className="absolute top-8 right-8">
        <select
          id="currency-selector"
          className="border-gray-500 border-2 text-center font-bold px-2 py-2 rounded-full bg-inherit"
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
