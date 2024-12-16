import { Button } from "@/components/button";
import Image from "next/image";
import message from "@/assets/images/message.png";
import cursor from "@/assets/images/cursor.png";

export const Hero = () => {
  return (
    <section className="py-[72px] md:py-24 bg-[linear-gradient(to_bottom,#200d4200_0%,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] relative overflow-clip">
      <div className="absolute bg-red-300 w-[750px] md:w-[1536px] lg:w-[2400px] h-[375px] md:h-[768px] lg:h-[1200px] border border-[#B48CDE] rounded-[100%] left-1/2 -translate-x-1/2 bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] md:top-[calc(100%-120px)]"></div>
      <div className="px-4 relative">
        <div className="text-center">
          <div className="border border-white/30 rounded-lg inline-flex items-center px-2 h-8 gap-3">
            <span className="bg-[linear-gradient(to_right,#F87AFF_0%,#FB93D0_25%,#FFDD99_50%,#C3F0B2_75%,#2FD8FE_100%)] bg-clip-text text-transparent">
              Version 2.0 is here
            </span>
            <span className="inline-flex items-center gap-1 text-white">
              Read More{" "}
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3245 8.42451L9.7245 12.0245C9.61178 12.1372 9.45891 12.2006 9.2995 12.2006C9.14009 12.2006 8.98722 12.1372 8.8745 12.0245C8.76178 11.9118 8.69846 11.7589 8.69846 11.5995C8.69846 11.4401 8.76178 11.2872 8.8745 11.1745L11.45 8.60001H4.1C3.94087 8.60001 3.78826 8.5368 3.67574 8.42428C3.56321 8.31176 3.5 8.15914 3.5 8.00001C3.5 7.84088 3.56321 7.68827 3.67574 7.57575C3.78826 7.46323 3.94087 7.40001 4.1 7.40001H11.45L8.8755 4.82401C8.76278 4.7113 8.69946 4.55842 8.69946 4.39901C8.69946 4.23961 8.76278 4.08673 8.8755 3.97401C8.98822 3.8613 9.14109 3.79797 9.3005 3.79797C9.45991 3.79797 9.61278 3.8613 9.7255 3.97401L13.3255 7.57401C13.3814 7.62983 13.4258 7.69615 13.4561 7.76916C13.4863 7.84218 13.5018 7.92044 13.5017 7.99947C13.5016 8.0785 13.4859 8.15673 13.4555 8.22967C13.4251 8.30261 13.3806 8.36883 13.3245 8.42451Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </div>
        </div>

        <h1 className="mt-8 text-white text-7xl font-bold text-center tracking-tighter md:text-[128px] relative">
          <Image
            src={cursor}
            width={200}
            height={200}
            alt="cursor"
            className="absolute hidden md:block top-24 -left-12 lg:left-40"
          />
          <Image
            src={message}
            width={200}
            height={200}
            alt="cursor"
            className="absolute hidden md:block top-12 -right-20 lg:right-36"
          />
          One Task <br /> at a Time
        </h1>
        <p className="text-white text-xl mt-8 text-center font-normal max-w-[448px] mx-auto">
          Celebrate the joy of accomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your successes.
        </p>
        <div className="text-center mt-8">
          <Button className="h-12">Get for free</Button>
        </div>
      </div>
    </section>
  );
};
