import { WobbleCard } from "./ui/wobble-card";

export const Services = () => {
  return (
    <div className="sm:p-15 p-8 mt-5 transition-all ">
      <h2 className="text-6xl pb-6 border-b-1 border-zinc-500">Services</h2>
      <div className="md:ml-40 sm:ml-20 pt-10 sm:w-100 w-fit text-zinc-300 transition-all">
        <p>
          With strong foundations in web and application security, our platform
          helps solve common challenges developers face, such as security of
          digital products, understanding risks of automating processes, and
          managing web transformations.
        </p>
      </div>

      <div className="mt-15 flex gap-10 flex-wrap justify-center">
        {services.map((item, i) => (
          <div className={`w-80 lg:w-90 lg:h-80 h-70 rounded-xl `}>
            <WobbleCard
              containerClassName="col-span-1 lg:col-span-2 h-full lg:min-h-[300px]  text-zinc-200 hover:text-zinc-800
              bg-[#11131410] border-1 border-zinc-800 hover:bg-gradient-to-r from-zinc-200 to-amber-50
            "
            >
              <div
                className="flex flex-col justify-center items-center gap-10 h-full p-1   "
                key={i}
              >
                <img src={item.img} alt="" className="w-30" />
                <div className="text-center md:text-2xl sm:text-xl text-lg tracking-wide font-light ">
                  {item.title}
                </div>
              </div>
            </WobbleCard>
          </div>
        ))}
      </div>
    </div>
  );
};

const services = [
  {
    img: "/monitor.png",
    title: "Monitor risk across networks",
  },
  {
    img: "/stack.png",
    title: "Effortless compliance & reporting",
  },
  {
    img: "/shield.png",
    title: "Continuous process testing",
  },
];
