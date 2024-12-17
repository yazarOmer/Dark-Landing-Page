import { Features } from "@/sections/features";
import { Header } from "@/sections/header";
import { Hero } from "@/sections/hero";
import { LogoTicker } from "@/sections/logo-ticker";
import { Product } from "@/sections/product";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
      <Product />
    </>
  );
}
