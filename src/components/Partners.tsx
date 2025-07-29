import { Auth } from "@/icons/auth";
import { Car } from "@/icons/car";
import { Grammarly } from "@/icons/grammarly";
import { Honda } from "@/icons/honda";
import { Telegram } from "@/icons/telegram";
import { CircleChevronRight } from "lucide-react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

export default function Partners() {
  useGSAP(() => {
    const description = SplitText.create(".partnerDescription", {
      type: "lines",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#partnerContainer",
        start: "top center  ",
        end: "bottom center",
        markers: true,
      },
    });

    tl.from("#partnerTitle", {
      opacity: 0,
      xPercent: -100,
      yPercent: -100,
      scaleY: 3,
      perspective: 400,
      ease: "power1.inOut",
    })
      .from(description.lines, {
        opacity: 0,
        yPercent: 100,
        ease: "power1.inOut",
        stagger: 0.03,
      })
      .from(".contact", {
        opacity: 0,
        yPercent: 100,
        ease: "power1.inOut",
      })
      .from(".movingCards", {
        opacity: 0,
        yPercent: 10,
        xPercent: 0,
        ease: "power1.inOut",
      });
  });

  return (
    <div className="sm:p-15 p-8  mt-20 transition-all " id="partnerContainer">
      <h2
        className="text-6xl pb-6 border-b-1 border-zinc-500 "
        id="partnerTitle"
      >
        Our Partners
      </h2>
      <div className="md:ml-40 sm:ml-20 pt-10 sm:w-100 w-fit text-zinc-300 transition-all">
        <p className="partnerDescription">
          We take care of your cyber security needs so you can focus on growing
          your business. Our goal from day one has been to focus on what
          matters, and getting the basics right.
        </p>

        <div className="flex gap-3 mt-6 cursor-pointer contact">
          <CircleChevronRight fill="white" color="black" size={24} />
          <p>Contact us</p>
        </div>
      </div>

      <div className="movingCards">
        <div className="md:h-[30rem] h-70 rounded-lg flex flex-col antialiased bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={partners}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

const partners = [
  {
    logo: <Grammarly />,
    name: "Grammarly",
  },
  {
    logo: <Honda />,
    name: "Honda",
  },
  {
    logo: <Telegram />,
    name: "Telegram",
  },
  {
    logo: <Car />,
    name: "Coop",
  },
  {
    logo: <Auth />,
    name: "Auth",
  },
];
