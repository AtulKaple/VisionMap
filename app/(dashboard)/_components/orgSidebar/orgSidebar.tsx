"use client";

import React from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Star } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Joti_One } from "next/font/google";

import "../../../../app/globals.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const font = Joti_One({
  subsets: ["latin"],
  weight: ["400"],
});

const OrgSidebar = () => {
  const searchParams = useSearchParams();
  const favorites = searchParams.get("favorites");

  useGSAP(() => {
    gsap.from(".sidebox", {
      x: -300,
      duration: 1,
    });
  });

  return (
    <div
      className=" sidebox hidden static lg:flex top-2  m-3 flex-col items-center space-y-6 p-3 w-[206px] ml-6  
    pt-3 rounded-3xl border-solid border-black border-2"
    >
      <Link href="/">
        <div className="flex items-center gap-x-1 w-[150px] -ml-3">
          <Image
            src="/logo1.png"
            alt="logo"
            width={35}
            height={35}
            className="mb-2"
          />
          <span className={cn("font-semibold text-2xl", font.className)}>
            VisionMap
          </span>
        </div>
      </Link>
      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display: "flex",

              borderRadius: "16px",
              backgroundColor: "#d4aeff",
            },
            organizationSwitcherTrigger: {
              padding: "6px",
              width: "150px",
              borderRadius: "16px",
              border: "2px solid black",
              justifyContent: "space-between",
              height: "45px",
              "&:hover": {
                backgroundColor: "#d4aeff",
              },
            },
            organizationSwitcherPopoverMain: {
              borderRadius: "16px",
            },
            organizationSwitcherPopoverFooter: {
              display: "none",
            },
            organizationSwitcherPopoverActions: {
              border: "2px solid black",
              borderRadius: "16px",
              backgroundColor: "#d4aeff",
            },
            avatarBox: {
              border: "2px solid black",
              borderRadius: "20px",
              height: "30px",
              width: "30px",
              color: "black",
              fontFamily: "Joti One",
              fontSize: "2px",
            },
          },
        }}
      />
      <div className="space-y-2 w-[150px]">
        <Button
          variant={favorites ? "ghost" : "secondary"}
          asChild
          size="lg"
          className="font-normal w-[150px] justify-start px-2 rounded-2xl border-solid border-black border-2"
        >
          <Link href="/">
            <LayoutDashboard className="h-4 w-4 mr-2 fill-[#D4AEFF] stroke-black" />
            Team Boards
          </Link>
        </Button>

        <Button
          variant={favorites ? "secondary" : "ghost"}
          asChild
          size="lg"
          className="font-normal w-[150px] justify-start px-2 rounded-2xl border-solid border-black border-2 "
        >
          <Link
            href={{
              pathname: "/",
              query: { favorites: true },
            }}
          >
            <Star className="h-4 w-4 mr-2 fill-[#FEDE65] stroke-black" />
            Favorite Boards
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default OrgSidebar;
