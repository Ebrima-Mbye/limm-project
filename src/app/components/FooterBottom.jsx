import Image from "next/image";
import globeIcon from "../photos/globeIcon.png";
import globeBlack from "../photos/globe-black.png";

export default function FooterBottom(props) {
  const isWhite = props.isWhite;
  const supportedLanguage = ["English", "French", "Arabic"];

  return (
    <>
      <hr
        style={{ borderColor: isWhite ? "black" : "white" }}
        className="border-[1px]"
      />

      <div
        style={{
          color: isWhite ? "black" : "white",
        }}
        className="text-white gap-8 h-14 text-[14px] flex justify-between"
      >
        <div className="flex-[3] items-center px-8 flex justify-between">
          <div>
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
            className="flex gap-10 ml-2"
          >
            <a className="text-center underline cursor-pointer" href="/">
              COOKIES
            </a>
            <a className="text-center underline cursor-pointer" href="/">
              PRIVACY POLICY
            </a>
            <a className="text-center underline cursor-pointer" href="/">
              TERMS & CONDITIONS
            </a>
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
              {supportedLanguage.map((language, index) => (
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
