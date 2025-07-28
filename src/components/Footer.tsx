import { Cctv, Facebook, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <div className="bg-[#ffffff] rounded-t-3xl mx-8 flex md:flex-row flex-col justify-between gap-3 md:p-10 p-7 mt-35 text-xs text-zinc-500 ">
      <div className=" md:flex-col gap-15 justify-between hidden md:flex">
        <div>
          <Cctv size={40} strokeWidth={1.5} color="#25272b" />
        </div>

        <div>
          <p>©2025 Jarvis Inc.</p>
          <p>Terms and Services</p>
        </div>
      </div>

      <div className="flex-1 flex sm:justify-around sm:flex-row flex-col sm:items-start items-center gap-5 sm:gap-0 sm:text-left text-center ">
        <div>
          <h4 className="font-semibold text-[16px] mb-3 text-zinc-700">
            Services
          </h4>
          <ul className="flex flex-col gap-2 ">
            {serviceItems.map((item) => (
              <li className="cursor-pointer w-20 hover:text-zinc-800">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-[16px] mb-3 text-zinc-700">
            About
          </h4>
          <ul className="flex flex-col gap-2">
            {aboutItems.map((item) => (
              <li className="cursor-pointer w-20 hover:text-zinc-800">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-[16px] mb-3 text-zinc-700">
            Resources
          </h4>
          <ul className="flex flex-col gap-2">
            {resourceItems.map((item) => (
              <li className="cursor-pointer w-20 hover:text-zinc-800">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col ">
        <h4 className="font-semibold text-[16px] mb-3 text-zinc-700 hidden md:block">
          Get in touch
        </h4>
        <div className="flex-1 flex flex-col justify-between ">
          <div className="hidden md:block">
            <p className="pb-1">Questions or feedback?</p>
            <p>We'd love to hear from you</p>
          </div>
          <div className="flex gap-3 items-end mt-5 cursor-pointer md:justify-start justify-center ">
            <Facebook fill="black" strokeWidth="0" size={22} />
            <Twitter fill="black" strokeWidth="0" />
            <Linkedin fill="black" strokeWidth="0" />
          </div>
          <div className="md:hidden block mt-5 text-center ">
            <p>©2025 Jarvis Inc.</p>
            <p>Terms and Services</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const serviceItems = ["Pricing", "Partnerships", "Access"];
const aboutItems = ["Jarvis", "Contact us", "Careers"];
const resourceItems = ["Help center", "Demo", "Server"];
