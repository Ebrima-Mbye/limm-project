import Hero from "./components/Hero";
import GetStarted from "./components/GetStarted";
import FindSolution from "./components/FindSolution";
import FAQ from "./components/FAQ";
import BlackFooter from "./components/BlackFooter";
import GetTheApp from "./components/GetTheApp";

export default function Home() {
  return (
    <div className="pt-4">
      <Hero />
      <GetStarted />
      <FindSolution />
      <GetTheApp />
      <FAQ />
      <BlackFooter />
    </div>
  );
}
