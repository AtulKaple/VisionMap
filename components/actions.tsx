"use client";

import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { Link2, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import ConfirmModal from "./confirm-modal";
import { Button } from "./ui/button";
import { useRenameModal } from "@/store/use-rename-modal";

interface ActionsProps {
  children: React.ReactNode;
  side?: DropdownMenuContentProps["side"];
  sideOffset?: DropdownMenuContentProps["sideOffset"];
  id: string;
  title: string;
}

const Actions = ({ children, side, sideOffset, id, title }: ActionsProps) => {
  const { onOpen } = useRenameModal();
  const { mutate, pending } = useApiMutation(api.board.remove);

  const onCopyLink = () => {
    navigator.clipboard
      .writeText(`${window.location.origin}/board/${id}`)
      .then((id) => {
        toast.success("Link Copied");
      })
      .catch(() => {
        toast.error("Failed to Copy Link");
      });
  };

  const onDelete = () => {
    mutate({ id })
      .then((id) => {
        toast.success("Deleted Successfully");
      })
      .catch(() => {
        toast.error("Failed to Delete Board");
      });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        onClick={(e) => e.stopPropagation()}
        side={side}
        sideOffset={sideOffset}
        className="w-60 rounded-2xl border-solid border-black border-2 ml-2"
      >
        <DropdownMenuItem onClick={onCopyLink} className="p-3 cursor-pointer ">
          <Link2 className="h-4 w-4 mr-2 stroke-[#AAB4FF]" />
          Copy Board Link
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => onOpen(id, title)}
          className="p-3 cursor-pointer"
        >
          <Pencil className="h-4 w-4 mr-2 stroke-[#8FD14F]" />
          Rename
        </DropdownMenuItem>
        <ConfirmModal
          header="Delete Board"
          description={`Are you sure you want to delete ${title}?`}
          disabled={pending}
          onConfirm={onDelete}
        >
          <Button
            variant="ghost"
            className="p-3 cursor-pointer text-sm w-[250px] justify-start font-normal"
          >
            <Trash2 className="h-4 w-r mr-2 stroke-[#F27B8C]" />
            Delete
          </Button>
        </ConfirmModal>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Actions;
