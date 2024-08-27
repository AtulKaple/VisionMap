"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { Plus } from "lucide-react";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { useRouter } from "next/navigation";

interface NewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
}

const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {
  const router = useRouter();
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    mutate({
      orgId,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Board Created");
        router.push(`/board/${id}`);
      })
      .catch(() => {
        toast.error("Failed to create board");
      });
  };

  return (
    <button
      disabled={pending || disabled}
      onClick={onClick}
      className={cn(
        "relative col-span-1 mb-2 aspect-[100/110] bg-[#FEDE65] opacity-80 hover:bg-#FEDE65 hover:opacity-100 flex flex-col items-center justify-center py-6 rounded-3xl border-solid border-black border-2 ",
        (pending || disabled) && " opacity-75 hover:bg-white cursor-not-allowed"
      )}
    >
      <div />
      <Plus className="h-12 w-12 text-black stroke-1" />
      <div className="absolute bottom-[-20px] ml-8  sm:mx-[18px] text-center content-center truncate px-4  bg-white h-10 w-[80%] left-auto rounded-2xl border-solid border-black border-2">
        New Board
      </div>
    </button>
  );
};

export default NewBoardButton;
