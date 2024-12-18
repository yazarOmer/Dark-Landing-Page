import { Button } from "@/components/button";
import emojiImage from "@/assets/images/emojistar.png";
import helix from "@/assets/images/helix2.png";
import Image from "next/image";

export const CTA = () => {
  return (
    <section className="section_padding">
      <div className="px-4 md:max-w-5xl lg:max-w-7xl mx-auto relative">
        <h1 className="section_title">Get instant access</h1>
        <p className="section_desc">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <div className="flex flex-col md:flex-row max-w-[384px] mx-auto mt-10 gap-2.5">
          <input
            type="text"
            placeholder="your@email.com"
            className="bg-white/20 rounded-lg px-5 h-12 md:flex-1"
          />
          <Button className="h-12">Get access</Button>
        </div>
        <div>
          <Image
            src={emojiImage}
            alt="emoji"
            width={200}
            height={200}
            className="hidden md:block absolute -left-32 -top-24 lg:left-20"
          />
          <Image
            src={helix}
            width={200}
            height={200}
            alt="helix"
            className="hidden md:block absolute -right-32 top-12 lg:right-20"
          />
        </div>
      </div>
    </section>
  );
};
