"use client";

import { InfoSkeleton } from "./info";
import { ParticipantsSkeleton } from "./participants";
import { ToolbarSkeleton } from "./toolbar";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";

const CanvasLoading = () => {
  return (
    <main className="h-full w-full relative bg-[#D1A5FC] touch-none flex flex-col items-center justify-center">
      <Image src="/Loading.gif" unoptimized alt="aa" width="400" height={100} />
      <div className="font-extrabold scale-150 mt-4">
        Visualize.. Collaborate.. Achieve..🏆
      </div>

      <InfoSkeleton />
      <ParticipantsSkeleton />
      <ToolbarSkeleton />
    </main>
  );
};

export default CanvasLoading;
