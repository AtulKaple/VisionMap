import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { useAuth } from "@clerk/nextjs";
import Footer from "./footer";
import { Skeleton } from "@/components/ui/skeleton";
import Actions from "@/components/actions";
import { MoreHorizontal } from "lucide-react";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { connectionIdColor } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs/server";

interface BoardCardProps {
  id: string;
  title: string;
  authorName: string;
  authorId: string;
  imageUrl: string;
  createdAt: number;
  orgId: string;
  isFavorite: boolean;
}

const BoardCard = ({
  id,
  title,
  authorName,
  authorId,
  imageUrl,
  createdAt,
  orgId,
  isFavorite,
}: BoardCardProps) => {
  const { userId } = useAuth();
  const authorLabel = userId === authorId ? "You" : authorName;
  const createdAtLabel = formatDistanceToNow(createdAt, {
    addSuffix: true,
  });

  const { mutate: onFavorite, pending: pendindFavorite } = useApiMutation(
    api.board.favorite
  );
  const { mutate: onUnfavorite, pending: pendindUnfavorite } = useApiMutation(
    api.board.unfavorite
  );

  const toggleFavorite = () => {
    if (isFavorite) {
      onUnfavorite({ id }).catch(() =>
        toast.error("Failed to Unfavorite Board")
      );
    } else {
      onFavorite({ id, orgId }).catch(() =>
        toast.error("Failed to Favorite Board")
      );
    }
  };

  const colors = useMemo(
    () => [
      "#D5F693",
      "#F27284",
      "#A4C9F1",
      "#FFF9B2",
      "#E8C5E5",
      "#FC819E",
      "#f9dada",
      "#F0A8D0",
      "#f1eedc",
      "#D1E9F6",
      "#FFBF78",
      "#FFE0B5",
      "#9BE8D8",
      "#E3F4F4",
      "#C7E9B0",
      "#BAF1B4",
      "#EFE0B7",
      "#AAEFF0",
      "#DEACD1",
      "#D6CEDB",
      "#FEC494",
      "#FDC4F3",
      "#FCD392",
      "#C3C5C4",
    ],
    []
  );

  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    setBackgroundColor(colors[randomIndex]);
  }, [colors]);

  return (
    <Link
      href={`/board/${id}`}
      className="relative mb-2 cursor-[./mouse.svg,auto]"
    >
      <div
        className="relative group aspect-[100/110] flex 
    flex-col justify-between overflow-hidden rounded-3xl border-solid border-black border-2 "
      >
        <div
          className="relative flex-1 bg-white"
          style={{
            backgroundColor: backgroundColor,
          }}
        >
          <Image src={imageUrl} alt={title} fill className="object-fit" />
          <Actions id={id} title={title} side="right">
            <button className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-2 outline-none">
              <MoreHorizontal className="text-black opacity-75 hover:opacity-100 transition-opacity" />
            </button>
          </Actions>
        </div>
        <Footer
          isFavorite={isFavorite}
          title={title}
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          onClick={toggleFavorite}
          disabled={pendindFavorite || pendindUnfavorite}
        />
      </div>
      <div className="absolute mt-[-22px] ml-8 m-9 sm:mx-[18px] text-center content-center truncate px-4  bg-white h-10 w-[80%] left-auto rounded-2xl border-solid border-black border-2">
        {title}
      </div>
    </Link>
  );
};

export default BoardCard;

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div className=" aspect-[100/110] overflow-hidden rounded-2xl ">
      <Skeleton className="h-full w-full" />
    </div>
  );
};
