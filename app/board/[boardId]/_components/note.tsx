import React from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import { colorToCss, cn, getContrastingTextColor } from "@/lib/utils";

import { NoteLayer } from "@/types/canvas";
import { useMutation } from "@liveblocks/react/suspense";

import { Joti_One } from "next/font/google";
import Image from "next/image";

const font = Joti_One({
  subsets: ["latin"],
  weight: ["400"],
});

interface NoteProps {
  id: string;
  layer: NoteLayer;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  selectionColor?: string;
}

const calculateFontSize = (width: number, height: number) => {
  const maxFontSize = 50; //96
  const scaleFactor = 0.25;
  const fontSizeBasedOnHeight = height * scaleFactor;
  const fontSizeBasedOnWidth = width * scaleFactor;

  return Math.min(maxFontSize, fontSizeBasedOnHeight, fontSizeBasedOnWidth);
};

const Note = ({ id, layer, onPointerDown, selectionColor }: NoteProps) => {
  const { x, y, width, height, fill, value } = layer;

  const updateValue = useMutation(({ storage }, newValue: string) => {
    const liveLayers = storage.get("layers");

    liveLayers.get(id)?.set("value", newValue);
  }, []);

  const handleContentChange = (e: ContentEditableEvent) => {
    updateValue(e.target.value);
  };

  return (
    <foreignObject
      x={x}
      y={y}
      width={width}
      height={height}
      onPointerDown={(e) => onPointerDown(e, id)}
      style={{
        outline: selectionColor ? `1px solid ${selectionColor}` : "none",
        backgroundColor: fill ? colorToCss(fill) : "#000",
      }}
      className="shadow-md drop-shadow-xl rounded-br-2xl"
    >
      <Image
        src="/pin.png"
        alt="pin"
        className="absolute m-1 h-6 w-6 -rotate-45"
      />
      <ContentEditable
        html={value || "Text"}
        onChange={handleContentChange}
        className={cn(
          "h-full w-full flex break-words whitespace-normal p-4 over items-center justify-center text-center outline-none rounded-2xl",
          font.className
        )}
        style={{
          fontSize: calculateFontSize(width, height) || 16,
          color: fill ? getContrastingTextColor(fill) : "#000",
        }}
      />
    </foreignObject>
  );
};

export default Note;
