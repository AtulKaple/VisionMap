"use client";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { useOrganization } from "@clerk/nextjs";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const NoBoards = () => {
  const router = useRouter();
  const { organization } = useOrganization();

  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    if (!organization) {
      return;
    }

    mutate({
      orgId: organization.id,
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
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/placeholders/2.webp" alt="Empty" height={200} width={200} />
      <h2 className="text-2xl font-semibold mt-6">Create Your First Board</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Stat Creating a Board For Your Organization
      </p>
      <div className="mt-6">
        <Button
          disabled={pending}
          onClick={onClick}
          size="lg"
          className="rounded-2xl border-2 border-solid border-black bg-[#D5F693] hover:bg-[#D5F693] text-black"
        >
          Create Board
        </Button>
      </div>
    </div>
  );
};

export default NoBoards;
