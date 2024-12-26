import SlidingDivs from "./SlidingDivs";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Sliding Divs Demo</h1>
      <SlidingDivs />
    </main>
  );
}
