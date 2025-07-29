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
    <div className="max-w-700 mx-auto ">
      <Navbar />
      <Hero />
      <Partners />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
