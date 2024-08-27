"use client";

import { useOrganization, useOrganizationList } from "@clerk/nextjs";

import { cn } from "@/lib/utils";

interface ItemProps {
  id: string;
  name: string;
  imageUrl: string;
}

import React from "react";
import Image from "next/image";
import Hint from "../hints/hints";

const Item = ({ id, name, imageUrl }: ItemProps) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id === id;

  // const onClick = () => {
  //     if(!setActive) return;
  //     // setActive({organization:id})
  // }

  return (
    <div>
      <Hint label={name} side="right" align="start" sideOffset={18}>
        <Image
          width={44}
          height={44}
          src={imageUrl}
          alt={name}
          onClick={() => {
            if (setActive) {
              setActive({ organization: id });
            }
          }}
          className={cn(
            "rounded-full border-2 border-black cursor-pointer opacity-75 hover:opacity-100 hover:text-black transition",
            isActive && "opacity-100 text-black "
          )}
        />
      </Hint>
    </div>
  );
};

export default Item;
