"use client";

import React from "react";
import { useOthers, useSelf } from "@liveblocks/react/suspense";
import UserAvatar from "./userAvatar";
import { connectionIdColor } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const MAX_SHOWN_USERS = 2;

const Participants = () => {
  const users = useOthers();
  const currentUser = useSelf();
  const hasMoreUsers = users.length > MAX_SHOWN_USERS;

  return (
    <div className="absolute h-12 top-4 right-4 bg-[#C7E9B0] p-3 flex items-center shadow-md rounded-2xl border-solid border-black border-2">
      <div className="flex gap-x-2">
        {users.slice(0, MAX_SHOWN_USERS).map(({ connectionId, info }) => {
          return (
            <UserAvatar
              borderColor={connectionIdColor(connectionId)}
              key={connectionId}
              src={info?.picture}
              name={info?.name}
              fallback={info?.name?.[0] || "T"}
            />
          );
        })}
        {currentUser && (
          <UserAvatar
            borderColor={connectionIdColor(currentUser.connectionId)}
            src={currentUser.info?.picture}
            name={`${currentUser.info?.name} (You)`}
            fallback={currentUser.info?.name?.[0] || "T"}
          />
        )}
        {hasMoreUsers && (
          <UserAvatar
            name={`${users.length - MAX_SHOWN_USERS} more`}
            fallback={`+${users.length - MAX_SHOWN_USERS}`}
          />
        )}
      </div>
    </div>
  );
};

export default Participants;

export const ParticipantsSkeleton = () => {
  useGSAP(() => {
    gsap.from(".part", {
      y: -200,
    });
  });
  return (
    <div className="part absolute h-12 top-4 right-4 p-3 flex items-center shadow-md w-[100px] rounded-2xl border-solid border-black border-2 bg-[#C7E9B0]"></div>
  );
};
