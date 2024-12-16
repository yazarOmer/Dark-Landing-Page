import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { children, className, ...otherProps } = props;
  return (
    <button
      className={twMerge(
        "h-10 px-4 text-black font-medium bg-white rounded-lg hover:bg-white/75 transition-all",
        className
      )}
    >
      {children}
    </button>
  );
};
