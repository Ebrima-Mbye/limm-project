import AnimatedSection from "./AnimatedSection";

export default function Home() {
  return (
    <div>
      <AnimatedSection>
        <section className="h-screen bg-blue-200">
          <h1 className="text-4xl">Section 1</h1>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="h-screen bg-green-200">
          <h1 className="text-4xl">Section 2</h1>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="h-screen bg-yellow-200">
          <h1 className="text-4xl">Section 3</h1>
        </section>
      </AnimatedSection>
    </div>
  );
}
