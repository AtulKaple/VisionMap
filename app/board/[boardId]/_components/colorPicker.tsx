"use client";

import { colorToCss } from "@/lib/utils";
import { Color } from "@/types/canvas";
import React from "react";

interface ColorPickerProps {
  onchange: (color: Color) => void;
}

const ColorPicker = ({ onchange }: ColorPickerProps) => {
  return (
    <div className="flex flex-wrap gap-2 items-center max-w-[200px] pr-2 mr-2 border-r border-neutral-200">
      <ColorButton onClick={onchange} color={{ r: 255, g: 222, b: 77 }} />

      <ColorButton onClick={onchange} color={{ r: 246, g: 251, b: 122 }} />
      <ColorButton onClick={onchange} color={{ r: 250, g: 255, b: 175 }} />

      <ColorButton onClick={onchange} color={{ r: 252, g: 142, b: 42 }} />
      <ColorButton onClick={onchange} color={{ r: 255, g: 191, b: 120 }} />
      <ColorButton onClick={onchange} color={{ r: 255, g: 224, b: 181 }} />

      <ColorButton onClick={onchange} color={{ r: 220, g: 38, b: 38 }} />
      <ColorButton onClick={onchange} color={{ r: 255, g: 85, b: 85 }} />
      <ColorButton onClick={onchange} color={{ r: 252, g: 119, b: 119 }} />
      <ColorButton onClick={onchange} color={{ r: 242, g: 123, b: 189 }} />
      <ColorButton onClick={onchange} color={{ r: 251, g: 154, b: 209 }} />
      <ColorButton onClick={onchange} color={{ r: 253, g: 196, b: 243 }} />

      <ColorButton onClick={onchange} color={{ r: 100, g: 202, b: 99 }} />
      <ColorButton onClick={onchange} color={{ r: 136, g: 202, b: 99 }} />
      <ColorButton onClick={onchange} color={{ r: 199, g: 233, b: 176 }} />

      <ColorButton onClick={onchange} color={{ r: 118, g: 149, b: 255 }} />
      <ColorButton onClick={onchange} color={{ r: 157, g: 189, b: 255 }} />
      <ColorButton onClick={onchange} color={{ r: 150, g: 201, b: 244 }} />
      <ColorButton onClick={onchange} color={{ r: 133, g: 15, b: 141 }} />

      <ColorButton onClick={onchange} color={{ r: 199, g: 56, b: 189 }} />
      <ColorButton onClick={onchange} color={{ r: 228, g: 155, b: 255 }} />
      <ColorButton onClick={onchange} color={{ r: 84, g: 51, b: 16 }} />
      <ColorButton onClick={onchange} color={{ r: 116, g: 81, b: 45 }} />
      <ColorButton onClick={onchange} color={{ r: 175, g: 143, b: 111 }} />

      <ColorButton onClick={onchange} color={{ r: 24, g: 24, b: 24 }} />

      <ColorButton onClick={onchange} color={{ r: 60, g: 64, b: 72 }} />
      <ColorButton onClick={onchange} color={{ r: 97, g: 103, b: 102 }} />

      <ColorButton onClick={onchange} color={{ r: 178, g: 178, b: 178 }} />
      <ColorButton onClick={onchange} color={{ r: 234, g: 234, b: 234 }} />
      <ColorButton onClick={onchange} color={{ r: 255, g: 255, b: 255 }} />
    </div>
  );
};

export default ColorPicker;

interface ColorButtonProps {
  onClick: (color: Color) => void;
  color: Color;
}

const ColorButton = ({ onClick, color }: ColorButtonProps) => {
  return (
    <button
      className="w-6 h-6 items-center flex justify-center hover:opacity-75 transition"
      onClick={() => onClick(color)}
    >
      <div
        className="w-6 h-6 rounded-md border border-neutral-300"
        style={{
          backgroundColor: colorToCss(color),
        }}
      />
    </button>
  );
};
