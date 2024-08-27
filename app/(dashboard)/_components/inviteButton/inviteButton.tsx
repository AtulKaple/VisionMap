import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const InviteButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className=" bg-[#F0A8D0] hover:bg-[#F0A8D0]  mr-5  rounded-2xl border-solid border-black border-2"
        >
          <Plus className="h-4 w-4 mr-2" />
          Invite Members
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 lg:bg-transparent  max-w-[880px] bg-[#F0A8D0]  overflow-hidden rounded-2xl border-none">
        <OrganizationProfile
          routing="hash"
          appearance={{
            variables: {
              colorBackground: "#F0A8D0",
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
                "&:hover": {
                  backgroundColor: "white",
                  color: "black",
                },
              },
              avatarBox: {
                borderRadius: "50%",
                height: "30px",
                width: "30px",
              },
              button: {},

              footer: {
                display: "none",
              },
            },
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default InviteButton;
