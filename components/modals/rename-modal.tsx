"use client";

import { useRenameModal } from "@/store/use-rename-modal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogClose,
  DialogFooter,
  DialogTitle,
} from "../ui/dialog";
import { FormEventHandler, use, useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

const RenameModal = () => {
  const { mutate, pending } = useApiMutation(api.board.update);

  const { isOpen, initialValues, onClose } = useRenameModal();
  const [title, setTitle] = useState(initialValues.title);

  useEffect(() => {
    setTitle(initialValues.title);
  }, [initialValues.title]);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    mutate({
      id: initialValues.id,
      title,
    })
      .then(() => {
        toast.success("Board Renamed Successfully");
        onClose();
      })
      .catch(() => {
        toast.error("Failed to Rename Board");
      });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="rounded-2xl border-2 border-black border-solid ">
        <DialogHeader className="rounded-2xl">
          <DialogTitle>Rename Board</DialogTitle>
        </DialogHeader>
        <DialogDescription>Enter a new title for the board</DialogDescription>
        <form onSubmit={onSubmit} className="space-y-4">
          <Input
            disabled={pending}
            required
            maxLength={60}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Board Title"
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button
                type="button"
                variant="outline"
                className="rounded-2xl  bg-[#F27284] hover:bg-[#F27284] hover:text-black"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              disabled={pending}
              className="rounded-2xl  bg-[#D5F693] text-black  hover:bg-[#D5F693]"
            >
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RenameModal;
