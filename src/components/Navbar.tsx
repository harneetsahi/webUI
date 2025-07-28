import { Cctv, CircleChevronRight, Menu } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = ["Services", "Pricing", "About", "Contact us"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (menuOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }

      if (window.innerWidth > 768) {
        document.body.style.overflow = "unset";
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  return (
    <nav className="w-screen flex justify-between items-center py-4 absolute z-10 text-zinc-800 pt-12 lg:px-20 md:px-15 px-10 ">
      <Cctv size={30} strokeWidth={1.5} />
      <div className="border-1 border-zinc-800 cursor-pointer justify-self-end  rounded-full py-2 px-8 hidden md:block   ">
        <ul className="flex gap-6 ">
          {navItems.map((item) => (
            <li className="cursor-pointer">{item}</li>
          ))}
        </ul>
      </div>
      <div className="hidden md:flex gap-2 py-2 px-3 rounded-full border-1 border-zinc-800 cursor-pointer">
        <CircleChevronRight color="white" fill="black" />
        <p>Let's connect</p>
      </div>

      <button
        className="md:hidden block cursor-pointer z-10 "
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <Menu
          size={28}
          className={`transition-transform ${
            menuOpen ? "rotate-90 text-zinc-200" : null
          }`}
        />
      </button>

      {menuOpen && (
        <div className="md:hidden block absolute bg-zinc-900 min-h-screen rounded-lg w-screen left-0 top-0 overflow-y-hidden">
          <ul className="px-10 pt-30 flex flex-col gap-13">
            {navItems.map((item) => (
              <a href="/">
                <li className="cursor-pointer text-zinc-300 font-bold sm:text-5xl text-4xl hover:text-zinc-50 hover:pl-4 hover:border-l-2 rounded-md transition-all  ">
                  {item}
                </li>
              </a>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
