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
        style={{ borderColor: isWhite ? "black" : "white" }}
        className="border-[1px] my-10 lg:my-0"
      />

      <div
        style={{
          color: isWhite ? "black" : "white",
        }}
        className="text-white pb-10 lg:pb-0 gap-8 h-auto lg:h-14 text-[14px] items-center flex justify-between flex-col lg:flex-row"
      >
        <div className="flex-[3] items-center px-8 flex justify-between flex-col lg:flex-row">
          <div className="flex items-center">
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
            className="flex gap-10 ml-2 flex-col lg:flex-row"
          >
            <Link className="text-center underline cursor-pointer" href="/">
              COOKIES
            </Link>
            <Link className="text-center underline cursor-pointer" href="/">
              PRIVACY POLICY
            </Link>
            <Link className="text-center underline cursor-pointer" href="/">
              TERMS & CONDITIONS
            </Link>
          </div>
        </div>
        <div className="flex-[2] flex items-center justify-end pr-8">
          <p className="mr-5">Language:</p>
          <div
            style={{
              borderColor: isWhite ? "#001738" : "white",
            }}
            className="flex gap-3 px-3 py-1 border-[1px] rounded-md w-[120px]"
          >
            <Image
              src={isWhite ? globeBlack : globeIcon}
              alt="globe icon"
              className=""
            />
            <select
              style={{
                backgroundColor: isWhite ? "white" : "#001738",
              }}
              className="bg-transparent text-[13px]"
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
