import About from "../components/About.jsx";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import Project from "../components/Project.jsx";
import Services from "../components/Services.jsx";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <Project />
    </>
  );
}

export default Home;
