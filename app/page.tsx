import About from "./components/About";
import Achivement from "./components/Achivement";
import Hero from "./components/Hero";
import "../public/assets/css/style.css";
import Service from "./components/Service";
import Projects from "./components/Projects";
import Hire from "./components/Hire";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";

export const metadata = {
  title: "Mehedi's Portfolio - Home",
  description: "Welcome to Mehedi's portfolio, showcasing projects and skills.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      {/* <Achivement /> */}
      <Service />
      <Projects onlyFeatured={true} disableTitie={false} />
      <Hire />
      <Testimonials />
      <Blog />
    </>
  );
}
