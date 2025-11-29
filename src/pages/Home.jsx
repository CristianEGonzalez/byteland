import About from "../components/About.jsx";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import Project from "../components/Project.jsx";
import FAQ from "../components/FAQ.jsx";
import Services from "../components/Services.jsx";
import WhyChoose from "../components/WhyChoose.jsx";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <WhyChoose />
      <Project />
      <FAQ />
    </>
  );
}

export default Home;
