import React from "react";
import EmptySearch from "../emptyResults/emptySearch";
import EmptyFavorites from "../emptyResults/emptyFavorites";
import NoBoards from "../emptyResults/noBoards";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import BoardCard from "../boardCard/boardCard";
import NewBoardButton from "../boardCard/newBoardButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

const BoardList = ({ orgId, query }: BoardListProps) => {
  useGSAP(() => {
    gsap.from(".board", {
      scale: 0,
      duration: 1,
    });
  });
  const data = useQuery(api.boards.get, { orgId, ...query });

  if (data === undefined) {
    return (
      <div className="board">
        <h2 className=" text-3xl">
          {query.favorites ? "Favorite Boards" : "Team Boards"}
        </h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md-grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6
    gap-5 mt-8 pb-10"
        >
          <NewBoardButton orgId={orgId} disabled />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
        </div>
      </div>
    );
  }

  if (!data.length && query.search) {
    return <EmptySearch />;
  }

  if (!data.length && query.favorites) {
    return <EmptyFavorites />;
  }

  if (!data.length) {
    return <NoBoards />;
  }

  return (
    <div className="board">
      <h2 className=" text-3xl">
        {query.favorites ? "Favorite Boards" : "Team Boards"}
      </h2>
      <div
        className=" grid grid-cols-1 sm:grid-cols-2 md-grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6
    gap-5 mt-8 pb-10"
      >
        <NewBoardButton orgId={orgId} />
        {data?.map((board) => (
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            imageUrl={board.imageUrl}
            authorName={board.authorName}
            authorId={board.authorId}
            createdAt={board._creationTime}
            orgId={board.orgId}
            isFavorite={board.isFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default BoardList;
