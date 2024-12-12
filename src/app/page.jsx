import HomeHero from "./components/HomeHero";
import HomeGetStarted from "./components/HomeGetStarted";
import HomeFindSolution from "./components/HomeFindSolution";
import HomeFAQ from "./components/HomeFAQ";
import HomeFooter from "./components/HomeFooter";

export default function Home() {
  return (
    <div className="pt-4">
      <HomeHero />
      <HomeGetStarted />
      <HomeFindSolution />
      <HomeFAQ />
      <HomeFooter />
    </div>
  );
}
