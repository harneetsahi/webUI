// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { SplitText } from "gsap/all";
// import { useMediaQuery } from "react-responsive";
import { useRef } from "react";
import { CircleChevronRight } from "lucide-react";

function Hero() {
  const videoRef = useRef(null);
  // const isMobile = useMediaQuery({ maxWidth: 795 });

  // useGSAP(() => {
  // const heroSplit = new SplitText(".title", {
  //   type: "words",
  // });

  // gsap.from(heroSplit.chars, {
  //   yPercent: 100,
  //   duration: 1.8,
  //   ease: "expo.out",
  //   stagger: 0.03,
  //   delay: 0.3,
  //   opacity: 0,
  // });

  // gsap.from(".video", {
  //   yPercent: 100,
  //   duration: 1.8,
  //   ease: "expo.out",
  //   stagger: 0.05,
  // });

  // gsap
  //   .timeline({
  //     scrollTrigger: {
  //       trigger: "#hero",
  //       start: "top top",
  //       end: "bottom top",
  //       scrub: true,
  //     },
  //   })
  //   .to(".video", { yPercent: -10, ease: "back.in", duration: 2 }, 0);
  // }, []);

  return (
    <>
      <section id="hero" className="relative md:h-screen md:p-8 p-5">
        <div className=" bg-[#FFFFFF] rounded-2xl py-5 md:px-10 px-5 flex flex-col-reverse md:flex-row items-center md:justify-center h-full ">
          <div className="flex flex-col justify-center items-start  text-zinc-900 md:w-1/2  ">
            <h1
              style={{
                fontFamily: "inter",
              }}
              className="title md:text-7xl sm:text-6xl text-4xl transition-all flex-wrap w-full lg:mt-50 md:mt-40 sm:mt-30 mt-20"
            >
              There's more to security
            </h1>

            <div className="sm:w-80 w-fit mt-13  ">
              <div className="flex gap-3 border-1 border-t-0 border-l-0 border-r-0 border-b-zinc-900 pb-4 cursor-pointer ">
                <CircleChevronRight fill="black" color="white" size={24} />
                <p className="font-medium">Contact us</p>
              </div>
              <p className="text-sm pt-4 pb-10">
                We help you save on costly data breaches by finding cyber
                security weaknesses in your digital infrastructure.
              </p>
            </div>
          </div>

          <div className="md:object-cover object-contain md:w-1/2 md:mt-0 mt-20 ">
            <video
              src="/cam.mp4"
              ref={videoRef}
              className="video inset-0 "
              autoPlay
              loop
              muted
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
