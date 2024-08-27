import React from "react";
import Canvas from "./_components/canvas";
import { Room } from "@/components/room";
import CanvasLoading from "./_components/canvasLoading";

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {
  // return <CanvasLoading/>
  return (
    <Room roomId={params.boardId} fallback={<CanvasLoading />}>
      <Canvas boardId={params.boardId} />
    </Room>
  );
};

export default BoardIdPage;
