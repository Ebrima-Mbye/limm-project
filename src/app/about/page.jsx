import Link from "next/link";

export default function About() {
  return (
    <div className="text-center">
      <p>About Page</p>
      <Link
        href="/"
        className="block text-center underline text-blue-500 cursor-pointer"
      >
        Home
      </Link>
    </div>
  );
}
