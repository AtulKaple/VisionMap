"use client";
import {
  OrganizationSwitcher,
  UserButton,
  useOrganization,
} from "@clerk/nextjs";
import React from "react";
import SearchBar from "../searchbar/searchbar";
import InviteButton from "../inviteButton/inviteButton";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Star } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const NavBar = () => {
  const { organization } = useOrganization();
  const searchParams = useSearchParams();
  const favorites = searchParams.get("favorites");

  useGSAP(() => {
    gsap.from(".nav", {
      y: -200,
      duration: 0.9,
    });
  });

  return (
    <div className=" nav flex flex-col items-center ">
      <Link href="/">
        <div className=" lg:hidden flex mt-3  items-center gap-x-1 w-[150px] mr-2">
          <Image
            src="/logo1.png"
            alt="logo"
            width={35}
            height={35}
            className="mb-2"
          />
          <span className={cn("font-semibold text-2xl")}>VisionMap</span>
        </div>
      </Link>
      <div className="flex items-center gap-x-4 p-5 w-full">
        <div className="hidden lg:flex lg:flex-1">
          <SearchBar />
        </div>
        <div className="block lg:hidden flex-1">
          <OrganizationSwitcher
            hidePersonal
            appearance={{
              elements: {
                rootBox: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  maxWidth: "376px",
                },

                organizationSwitcherTrigger: {
                  padding: "6px",
                  width: "100%",
                  height: "40px",
                  borderRadius: "16px",
                  border: "2px solid black",
                  justifyContent: "space-between",
                  backgroundColor: "white",
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
                  height: "25px",
                  width: "25px",
                  color: "black",
                },
              },
            }}
          />
        </div>
        <div className="flex items-center ">
          {organization && <InviteButton />}

          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox:
                  "w-9 h-9 border-solid border-black border-2",

                userButtonPopoverMain: { backgroundColor: "#d4aeff" },
                userButtonPopoverCard: {
                  border: "2px solid black",
                  backgroundColor: "#d4aeff",
                  borderRadius: "16px",
                },
                userButtonPopoverFooter: "hidden",
              },
            }}
          />
        </div>
      </div>
      <div className="flex lg:hidden w-full px-5 md:gap-10 gap-5">
        <Button
          variant={favorites ? "ghost" : "secondary"}
          asChild
          size="lg"
          className="font-normal w-[140px] md:w-[150px] justify-start px-2 rounded-2xl border-solid border-black border-2"
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

export default NavBar;
