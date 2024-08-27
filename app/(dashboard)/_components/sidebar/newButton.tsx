import React from "react";

import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Hint from "../hints/hints";

const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="aspect-square">
          <Hint
            label="Create Organization"
            side="right"
            align="start"
            sideOffset={18}
          >
            <button
              className="bg-white/25 h-full w-full rounded-full
                flex items-center justify-center opacity-60
                hover:opacity-100 transition border-2 border-black"
            >
              <Plus className="text-[#F16E80]" />
            </button>
          </Hint>
        </div>
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
  );
};

export default NewButton;
