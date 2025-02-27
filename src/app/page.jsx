import Hero from "@/components/Hero";
import GetStarted from "@/components/GetStarted";
import FindSolution from "@/components/FindSolution";
import LinkToAI from "@/components/LinkToAI"; 
import FAQ from "@/components/FAQ";
import BlackFooter from "@/components/BlackFooter";
import GetTheApp from "@/components/GetTheApp";
import AnimatedContainer from "@/components/AnimatedContainer";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <AnimatedContainer>
        <GetStarted />
      </AnimatedContainer>
      <AnimatedContainer>
        <FindSolution />
      </AnimatedContainer>
      <AnimatedContainer>
        <GetTheApp />
      </AnimatedContainer>
      <AnimatedContainer>
        <FAQ />
      </AnimatedContainer>
      <BlackFooter />
      <LinkToAI />
    </div>
  );
}
