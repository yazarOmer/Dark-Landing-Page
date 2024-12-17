import Image from "next/image";
import appImage from "@/assets/images/app-screen.png";

export const Product = () => {
  return (
    <section className="section_padding bg-gradient-to-b from-black to-[#5D2CA8]">
      <div className="px-4 md:max-w-5xl lg:max-w-7xl mx-auto">
        <h1 className="section_title">Intuitive interface</h1>
        <p className="section_desc">
          Celebrate the joy of accomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your successes, one
          task at a time.
        </p>
        <Image
          src={appImage}
          alt="App"
          className="aspect-video mt-14 mx-auto max-w-[992px] w-full"
        />
      </div>
    </section>
  );
};
