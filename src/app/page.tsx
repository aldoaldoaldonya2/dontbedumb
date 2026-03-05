import Hero from "./partials/Hero";
import About from "./partials/About";
import Music from "./partials/Music";
import Story from "./partials/Story";
import Marquee from "./partials/Marquee";
import Preloader from "./components/Preloader";

export default function Index() {
  return (
    <main className="">
      {/* <Preloader /> */}
      <Hero />
      <Marquee />
      <About />
      <Music />
      <Story />
    </main>
  );
}