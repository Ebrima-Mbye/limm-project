import HomeHero from "./components/HomeHero";
import HomeGetStarted from "./components/HomeGetStarted";
import HomeFindSolution from "./components/HomeFindSolution";
import HomeFAQ from "./components/HomeFAQ";

export default function Home() {
  return (
    <div className="p-4">
      <HomeHero />
      <HomeGetStarted />
      <HomeFindSolution />
      <HomeFAQ />
    </div>
  );
}
