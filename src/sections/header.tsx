import logo from "@/assets/images/logosaas.png";
import { Button } from "@/components/button";
import Image from "next/image";

export const Header = () => {
  return (
    <header>
      <div className="py-3 px-4 flex items-center justify-center gap-1 bg-[linear-gradient(to_right,#FCD6FF_0%,#29D8FF_25%,#FFFD80_50%,#F89ABF_75%,#FCD6FF_100%)] text-black font-medium">
        <span className="hidden md:inline">
          Introducing a completely redesigned interface —{" "}
        </span>
        <span className="underline">Explore the demo</span>
      </div>
      <nav className="h-20 px-4 max-w-7xl mx-auto flex items-center justify-between">
        <Image src={logo} alt="SaaS Logo" className="size-12" />
        <div className="hidden md:block">
          <ul className="flex items-center gap-6">
            <li className="text-white/60 hover:text-white hover:cursor-pointer">
              About
            </li>
            <li className="text-white/60 hover:text-white hover:cursor-pointer">
              Features
            </li>
            <li className="text-white/60 hover:text-white hover:cursor-pointer">
              Updates
            </li>
            <li className="text-white/60 hover:text-white hover:cursor-pointer">
              Help
            </li>
            <li className="text-white/60 hover:text-white hover:cursor-pointer">
              Customers
            </li>
            <Button>Get for free</Button>
          </ul>
        </div>
        <div className="size-10 inline-flex md:hidden items-center justify-center border border-white/30 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-menu text-white"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
      </nav>
    </header>
  );
};
