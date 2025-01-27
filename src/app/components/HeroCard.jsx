import Image from "next/image";

const HeroCard = ({ title, text, icon, bgColor, textColor }) => {
  return (
    <div
      className={`flex h-full w-full min-w-[300px] flex-col justify-between rounded-[20px] p-6`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <p className="mb text-xl font-medium">{title}</p>
      <div className="flex h-12 flex-1 items-center">
        <Image src={icon} alt={`${title} icon`} />
      </div>
      <p className="text-[18px]">{text}</p>
    </div>
  );
};

export default HeroCard;
