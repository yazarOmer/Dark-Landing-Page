import { CTA } from "@/sections/cta";
import { FAQ } from "@/sections/faq";
import { Features } from "@/sections/features";
import { Footer } from "@/sections/footer";
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
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
