import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import { Services } from "./components/Services";
import { Footer } from "./components/Footer";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <Services />
      <Footer />
    </>
  );
}

export default App;
