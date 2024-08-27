import { colorToCss } from "@/lib/utils";
import { RectangleLayer, RoundedRectangleLayer } from "@/types/canvas";
import React from "react";

interface RoundedRectangleProps {
  id: string;
  layer: RoundedRectangleLayer;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  selectionColor?: string;
}

const RoundedRectangle = ({
  id,
  layer,
  onPointerDown,
  selectionColor,
}: RoundedRectangleProps) => {
  const { x, y, width, height, fill } = layer;

  return (
    <rect
      className="drop-shadow-md bg-white rounded-2xl"
      onPointerDown={(e) => onPointerDown(e, id)}
      style={{
        transform: `translate(${x}px,${y}px)`,
      }}
      x={0}
      y={0}
      width={width}
      height={height}
      rx="20" // x-axis radius
      ry="20" // y-axis radius
      strokeWidth={1}
      fill={fill ? colorToCss(fill) : "#000"}
      stroke={selectionColor || "transparent"}
    />
  );
};

export default RoundedRectangle;
