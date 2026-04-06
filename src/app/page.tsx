import Hero from "./partials/Hero";
import About from "./partials/About";
import Music from "./partials/Music";
import Story from "./partials/Story";
import Marquee from "./partials/Marquee";
import Introduce from "./partials/Introduce";
import Asap from "./partials/Asap";
import Footer from "./components/Footer";
export default function Index() {
  return (
    <main className="">
      <Hero />
      <Marquee />
      <About />
      <Music />
      <Story />
      <Introduce />
      <div className="h-[70vh] w-full bg-linear-to-b from-black to-white"></div>
      <Asap />
      <Footer />
    </main>
  );
}