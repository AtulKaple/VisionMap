import Image from "next/image";
import React from "react";

const EmptySearch = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/placeholders/4.webp" alt="Empty" height={250} width={250} />
      <h2 className="text-2xl font-semibold mt-6">No Results Found !!</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try Searching for Somthing Else
      </p>
    </div>
  );
};

export default EmptySearch;
