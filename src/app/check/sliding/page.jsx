import FullPage from "@/components/FullPage";
import SlidingDivs from "./SlidingDivs";

/**
 * This is the main component of the sliding divs demo.
 * It renders a FullPage component with a main section containing a title and a SlidingDivs component.
 *
 * @returns {React.ReactElement} - The rendered component.
 */
export default function Home() {
  return (
    <FullPage>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="mb-4 text-2xl font-bold">Sliding Divs Demo</h1>
        <SlidingDivs />
      </main>
    </FullPage>
  );
}

