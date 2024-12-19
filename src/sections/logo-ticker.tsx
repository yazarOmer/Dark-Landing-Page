"use client";
import acmeLogo from "@/assets/images/acme.png";
import apexLogo from "@/assets/images/apex.png";
import celestialLogo from "@/assets/images/celestial.png";
import echoLogo from "@/assets/images/echo.png";
import pulseLogo from "@/assets/images/pulse.png";
import quantumLogo from "@/assets/images/quantum.png";
import Image from "next/image";
import { motion } from "motion/react";

const logos = [
  {
    name: "acme",
    img: acmeLogo,
  },
  {
    name: "apex",
    img: apexLogo,
  },
  {
    name: "celestial",
    img: celestialLogo,
  },
  {
    name: "echo",
    img: echoLogo,
  },
  {
    name: "pulse",
    img: pulseLogo,
  },
  {
    name: "quantum",
    img: quantumLogo,
  },
];

export const LogoTicker = () => {
  return (
    <section className="py-[72px] md:py-24">
      <div className="px-4 md:max-w-5xl lg:max-w-7xl mx-auto">
        <h3 className="text-xl text-white/70 text-center">
          Trusted by the world's most innovative teams
        </h3>
        <div className="mt-9 flex overflow-clip [mask-image:linear-gradient(to_right,transparent,black_25%,black_75%,transparent)]">
          <motion.div
            initial={{ translateX: 0 }}
            animate={{ translateX: "-50%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 20 }}
            className="flex flex-none items-center gap-16 h-8 pr-16"
          >
            {logos.map(({ name, img }) => (
              <Image
                src={img}
                key={name}
                alt={name}
                className="h-full w-auto"
              />
            ))}
            {logos.map(({ name, img }) => (
              <Image
                src={img}
                key={name}
                alt={name}
                className="h-full w-auto"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
