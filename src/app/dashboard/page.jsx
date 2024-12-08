import Link from "next/link";
export default function Dashboard() {
  return (
    <>
      <div className="text-xl px-2">Dashboard</div>
      <Link
        href="/"
        className="text-start px-2 underline text-blue-500 cursor-pointer"
      >
        Home
      </Link>
    </>
  );
}
