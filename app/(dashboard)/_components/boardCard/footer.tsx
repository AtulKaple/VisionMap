import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterProps {
  title: string;
  authorLabel: string;
  createdAtLabel: string;
  isFavorite: boolean;
  onClick: () => void;
  disabled: boolean;
}

const Footer = ({
  title,
  authorLabel,
  createdAtLabel,
  isFavorite,
  onClick,
  disabled,
}: FooterProps) => {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    event.preventDefault();
    onClick();
  };

  return (
    <div className="absolute flex gap-1 px-2 justify-center items-center bottom-5 bg-transparent overflow-none w-full">
      <p className=" opacity-0 group-hover:opacity-100 transition-opacity text-[11px]  truncate">
        {authorLabel}, {createdAtLabel}
      </p>
      <button
        disabled={disabled}
        onClick={handleClick}
        className={cn(
          " opacity-0 group-hover:opacity-100 transition top-3 right-3  hover:text-[#FEDE65]",
          disabled && "cursor-not-allowed opacity-75"
        )}
      >
        <Star
          className={cn(
            "h-6 w-6 ",
            isFavorite && "fill-[#FEDE65] text-[#FEDE65]"
          )}
        />
      </button>
    </div>
  );
};

export default Footer;
