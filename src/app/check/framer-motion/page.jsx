import AnimatedContainer from "@/components/AnimatedContainer";

export default function Home() {
  return (
    <div>
      <AnimatedContainer>
        <section className="h-screen bg-blue-200">
          <h1 className="text-4xl">Section 1</h1>
        </section>
      </AnimatedContainer>

      <AnimatedContainer>
        <section className="h-screen bg-green-200">
          <h1 className="text-4xl">Section 2</h1>
        </section>
      </AnimatedContainer>

      <AnimatedContainer>
        <section className="h-screen bg-yellow-200">
          <h1 className="text-4xl">Section 3</h1>
        </section>
      </AnimatedContainer>
    </div>
  );
}
