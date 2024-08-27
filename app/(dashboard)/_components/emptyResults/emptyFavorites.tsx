import Image from "next/image";
import React from "react";

const EmptyFavorites = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/placeholders/3.webp" alt="Empty" height={250} width={250} />
      <h2 className="text-2xl font-semibold mt-6">No Favorites Found!!</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try Favoriting a Board..
      </p>
    </div>
  );
};

export default EmptyFavorites;
