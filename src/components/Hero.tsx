import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { CircleChevronRight } from "lucide-react";

function Hero() {
  useGSAP(() => {
    const description = SplitText.create(".heroDescription", {
      type: "lines",
      mask: "words",
    });
    const title = SplitText.create("#heroTitle", {
      type: "lines",
      mask: "words",
    });

    const tl = gsap.timeline();

    tl.from(title.lines, {
      opacity: 0,
      yPercent: 100,
      ease: "power1.inOut",
    })
      .from("#heroContact", {
        opacity: 0,
        yPercent: 100,
        ease: "power1.inOut",
        stagger: 0.03,
      })
      .from(description.lines, {
        opacity: 0,
        yPercent: 100,
        ease: "power1.inOut",
        stagger: 0.03,
      });
  });

  return (
    <>
      <section id="hero" className="relative md:h-screen md:p-8 p-5">
        <div className=" bg-[#FFFFFF] rounded-2xl py-5 md:px-10 px-5 flex flex-col-reverse md:flex-row items-center md:justify-center h-full ">
          <div className="flex flex-col justify-center items-start  text-zinc-900 md:w-1/2  ">
            <h1
              className="title md:text-7xl sm:text-6xl text-4xl transition-all flex-wrap w-full lg:mt-50 md:mt-40 sm:mt-30 mt-20"
              id="heroTitle"
            >
              There's more to security
            </h1>

            <div className="sm:w-80 w-fit mt-13  ">
              <div
                className="flex gap-3 border-1 border-t-0 border-l-0 border-r-0 border-b-zinc-900 pb-4 cursor-pointer"
                id="heroContact"
              >
                <CircleChevronRight fill="black" color="white" size={24} />
                <p className="font-medium">Contact us</p>
              </div>
              <p className="text-sm pt-4 pb-10 heroDescription">
                We help you save on costly data breaches by finding cyber
                security weaknesses in your digital infrastructure.
              </p>
            </div>
          </div>

          <div className="md:object-cover object-contain md:w-1/2 md:mt-0 mt-20 ">
            <video
              src="/cam.mp4"
              className="video inset-0 "
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
