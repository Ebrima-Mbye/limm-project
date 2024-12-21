import HomeHero from "./components/HomeHero";
import HomeGetStarted from "./components/HomeGetStarted";
import HomeFindSolution from "./components/HomeFindSolution";
import HomeFAQ from "./components/HomeFAQ";
import BlackFooter from "./components/BlackFooter";
import GetTheApp from "./components/GetTheApp";

export default function Home() {
  return (
    <div className="pt-4">
      <HomeHero />
      <HomeGetStarted />
      <HomeFindSolution />
      <GetTheApp />
      <HomeFAQ />
      <BlackFooter />
    </div>
  );
}
