import { Auth } from "@/icons/auth";
import { Car } from "@/icons/car";
import { Grammarly } from "@/icons/grammarly";
import { Honda } from "@/icons/honda";
import { Telegram } from "@/icons/telegram";
import { CircleChevronRight } from "lucide-react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function Partners() {
  return (
    <div className="sm:p-15 p-8  mt-20 transition-all ">
      <h2 className="text-6xl pb-6 border-b-1 border-zinc-500">Our Partners</h2>
      <div className="md:ml-40 sm:ml-20 pt-10 sm:w-100 w-fit text-zinc-300 transition-all">
        <p>
          We take care of your cyber security needs so you can focus on growing
          your business. Our goal from day one has been to focus on what
          matters, and getting the basics right.
        </p>

        <div className="flex gap-3 mt-6 cursor-pointer ">
          <CircleChevronRight fill="white" color="black" size={24} />
          <p>Contact us</p>
        </div>
      </div>

      <div>
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
