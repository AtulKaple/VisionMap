"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import React from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Hint from "@/app/(dashboard)/_components/hints/hints";
import { useRenameModal } from "@/store/use-rename-modal";
import Actions from "@/components/actions";
import { Menu } from "lucide-react";
import { Joti_One } from "next/font/google";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const font = Joti_One({
  subsets: ["latin"],
  weight: ["400"],
});

interface InfoProps {
  boardId: string;
}

const TabSeperator = () => {
  return <div className="text-black px-1.5 mt-[10px] hidden lg:flex">|</div>;
};

const Info = ({ boardId }: InfoProps) => {
  const { onOpen } = useRenameModal();

  const data = useQuery(api.board.get, {
    id: boardId as Id<"boards">,
  });

  if (!data) return <InfoSkeleton />;

  return (
    <div className="absolute top-4 left-4 justify-center  bg-[#FEDE65] px-1.5 h-12 flex lg:ml-[450px] shadow-md rounded-2xl border-solid border-black border-2">
      <Hint label="All Boards" side="bottom" sideOffset={10}>
        <Button
          asChild
          variant="board"
          className="p-2 hover:bg-transparent mt-[1px]"
        >
          <Link href="/">
            <Image
              src="/logo1.png"
              alt="logo"
              width={35}
              height={35}
              className="mb-1"
            />
            <span
              className={cn(
                "font-semibold text-xl ml-1 text-black hover:bg-[#FEDE65]",
                font.className
              )}
            >
              VisionMap
            </span>
          </Link>
        </Button>
      </Hint>
      <TabSeperator />
      <Hint label="Edit Title" side="bottom" sideOffset={10}>
        <Button
          className="text-base font-normal px-1 hidden lg:flex text-black hover:scale-[1.05] rounded-none hover:bg-transparent bg-transparent mt-[1px]"
          onClick={() => onOpen(data._id, data.title)}
        >
          {data.title}
        </Button>
      </Hint>
      <TabSeperator />
      <Actions id={data._id} title={data.title} side="bottom" sideOffset={10}>
        <div>
          <Hint label="Menu" side="bottom" sideOffset={10}>
            <Button
              size="icon"
              className="bg-transparent text-black hover:bg-transparent mt-[1px]"
            >
              <Menu />
            </Button>
          </Hint>
        </div>
      </Actions>
    </div>
  );
};

export default Info;

export const InfoSkeleton = () => {
  useGSAP(() => {
    gsap.from(".info", {
      y: -200,
    });
  });
  return (
    <div className="info absolute top-4 left-4 px-1.5 h-12 flex items-center shadow-md w-[200px] lg:w-[300px] rounded-2xl border-solid border-black border-2 lg:ml-[450px] bg-[#FEDE65]">
    </div>
  );
};
