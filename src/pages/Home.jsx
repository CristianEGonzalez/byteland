import About from "../components/About.jsx";
import Hero from "../components/Hero.jsx";
import Projects from "../components/Projects.jsx";
import FAQ from "../components/FAQ.jsx";
import Services from "../components/Services.jsx";
import WhyChoose from "../components/WhyChoose.jsx";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <WhyChoose />
      <Projects />
      <FAQ />
    </>
  );
}

export default Home;
