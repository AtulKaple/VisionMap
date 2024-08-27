import Image from "next/image";
import React from "react";
import { CreateOrganization } from "@clerk/nextjs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const EmptyOrg = () => {
  return (
    <div
      className="h-full flex flex-col
    items-center justify-center"
    >
      <Image src="/placeholders/8.webp" alt="logo" height={200} width={200} />
      <h2 className="text-2xl font-semibold mt-6">Welcome to VisionMap</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Get started by creating your first organization
      </p>
      <div className="mt-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              size="lg"
              className="rounded-2xl border-2 border-solid border-black bg-[#D5F693] hover:bg-[#D5F693] text-black"
            >
              Create Organization
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-[#D5F693] w-[400px] shadow-none">
            <CreateOrganization
              routing="hash"
              appearance={{
                variables: {
                  colorBackground: "#D5F693",
                  colorText: "black",
                },
                elements: {
                  rootBox: {
                    borderRadius: "16px",
                    height: "420px",
                    width: "100%",
                  },
                  internal: {
                    borderRadius: "16px",
                    backgroundColor: "blue",
                  },
                  cardBox: {
                    width: "100%",
                    borderRadius: "20px",
                    boxShadow: "none",
                  },
                  scrollBox: {},
                  membersPageInviteButton: {
                    backgroundColor: "white",
                    color: "black",
                  },
                  avatarBox: {
                    borderRadius: "50%",
                    height: "30px",
                    width: "30px",
                  },
                  button: {
                    borderRadius: "20px",
                  },
                  footer: {
                    display: "none",
                  },
                  formButtonPrimary: {
                    backgroundColor: "white",
                    opacity: "100",
                    color: "black",
                    "&:hover": {
                      backgroundColor: "white",
                      color: "black",
                    },
                  },
                },
              }}
            />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default EmptyOrg;
