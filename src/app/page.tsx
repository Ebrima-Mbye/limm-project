
export default function Home() {
  return (
    <div className="text-center">
      <p>Welcome to Our Home Page</p>
      <a className="block text-center text-blue-600 underline cursor-pointer" href="/about">About Us</a>
      <a className="block text-center text-blue-600 underline cursor-pointer" href="/profiles">Profiles</a>
      <a className="block text-center text-blue-600 underline cursor-pointer" href="/contact">Contact Us</a>
    </div>
  );
}
