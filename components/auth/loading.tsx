import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <main className="h-full w-full relative bg-[#D1A5FC] touch-none flex items-center flex-col justify-center">
      <Image src="/Loading.gif" unoptimized alt="aa" width="400" height={100} />
      <div className="font-extrabold scale-150 mt-4">
        Visualize.. Collaborate.. Achieve..🏆
      </div>
    </main>
  );
};

export default Loading;
