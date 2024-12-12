import HomeHero from "./components/HomeHero";
import HomeGetStarted from "./components/HomeGetStarted";
export default function Home() {
  return (
    <div className="p-4">
      <HomeHero />
      <HomeGetStarted />
    </div>
  );
}
