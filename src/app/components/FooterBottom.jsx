import Image from "next/image";
import globeIcon from "../photos/globeIcon.png";
import globeBlack from "../photos/globe-black.png";
import Link from "next/link";

export default function FooterBottom(props) {
  const isWhite = props.isWhite;
  const supportedLanguages = ["English", "French", "Arabic"];

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
            <Link className="cursor-pointer text-center underline" href="/">
              COOKIES
            </Link>
            <Link className="cursor-pointer text-center underline" href="/">
              PRIVACY POLICY
            </Link>
            <Link className="cursor-pointer text-center underline" href="/">
              TERMS & CONDITIONS
            </Link>
          </div>
        </div>
        <div className="flex flex-[2] items-center justify-end pr-8">
          <p className="mr-5">Language:</p>
          <div className="flex w-[120px] gap-3 rounded-md border border-gray-500 px-3 py-1">
            <Image
              src={isWhite ? globeBlack : globeIcon}
              alt="globe icon"
              className=""
            />
            <select
              style={{
                backgroundColor: isWhite ? "white" : "#001738",
              }}
              className="bg-inherit text-[13px]"
            >
              {supportedLanguages.map((language, index) => (
                <option
                  key={index}
                  style={{
                    color: isWhite ? "black" : "white",
                  }}
                  className=""
                  value={language}
                >
                  {language}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
