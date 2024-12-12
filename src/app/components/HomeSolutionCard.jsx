import Image from "next/image";

export default function HomeSolutionCard(props) {
  return (
    <div
      style={{
        backgroundColor: props.bg,
        color: props.color,
      }}
      className="px-6 py-4 rounded-lg"
    >
      <div className="h-4/5 text-center">
        <Image
          src={props.src}
          alt={props.text}
          className="w-[70px] translate-y-1/2"
        />
      </div>
      <div className="text-xl">{props.text}</div>
    </div>
  );
}
