import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center">
      <p>Profiles Page</p>
      <div>
        <Link className="block text-center underline text-blue-500 cursor-pointer" href="/profiles/1">Profile 1</Link>
        <Link className="block text-center underline text-blue-500 cursor-pointer" href="/profiles/2">Profile 2</Link>
        <Link className="block text-center underline text-blue-500 cursor-pointer" href="/profiles/3">Profile 3</Link>
      </div>
      <Link
        href="/" className="block text-center underline text-blue-500 cursor-pointer"
      >
        Home
      </Link>
    </div>
  );
}
