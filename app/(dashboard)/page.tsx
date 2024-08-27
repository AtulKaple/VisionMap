"use client";

import React from "react";
import EmptyOrg from "./_components/emptyOrg/emptyOrg";
import { useOrganization } from "@clerk/nextjs";
import BoardList from "./_components/boardList/boardList";

interface DashBoardPageProps {
  searchParams: {
    search?: string;
    favorites?: string;
  };
}

const DashBoardPage = ({ searchParams }: DashBoardPageProps) => {
  const { organization } = useOrganization();

  return (
    <div className=" flex-1 h-[calc(100%-80px)] p-6">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList orgId={organization.id} query={searchParams} />
      )}
    </div>
  );
};

export default DashBoardPage;
