import Link from "next/link";

export default function About({ params }) {
  return (
    <div className="text-center">
      <p>Profile {params.profileId}</p>
      <Link
        href="/profiles"
        className="block text-center underline text-blue-500 cursor-pointer"
      >
        Back to Profiles
      </Link>
    </div>
  );
}
