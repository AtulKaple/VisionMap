"use client";

import React from "react";
import NewButton from "./newButton";
import List from "./list";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Sidebar = () => {
  useGSAP(() => {
    gsap.from(".sidebar", {
      x: -300,
      duration: 1,
    });
  });
  return (
    <aside
      className="sidebar hidden  lg:flex fixed z-[1] left-0 bg-[#EFE8F7] h-[96.5%] w-[60px] 
     p-3 flex-col gap-y-4 text-black m-3  rounded-3xl border-solid border-black border-2"
    >
      <List />
      <NewButton />
    </aside>
  );
};

export default Sidebar;
