"use client";

import { memo } from "react";
import { connectionIdColor } from "@/lib/utils";
import { MousePointer2 } from "lucide-react";
import { useOther } from "@liveblocks/react/suspense";

interface CursorProps {
    connectionId: number;
}


const Cursor = memo(({connectionId}:CursorProps) => {
    const info=useOther(connectionId,(user)=>user?.info);
    const cursor=useOther(connectionId,(user)=>user.presence.cursor);
    const name= info?.name || 'Teammate';

    if (!cursor) {
        return null;
        
    }

    const {x,y}=cursor;

  return (
    <foreignObject
    style={{
        transform:`translateX(${x}px) translateY(${y}px)`
    }}
    height={50}
    width={name.length * 10 + 24}
    className="relative drop-shadow-md"
    >
        <MousePointer2
        className="h-5 w-5 stroke-2 stroke-white rounded-full"
        style={{
            fill: connectionIdColor(connectionId),
            color: connectionIdColor(connectionId),
        }}
        />
        <div className="absolute left-4 px-1.5 py-0.5 rounded-md text-xs text-white font-semibold border-2 border-white"
        style={{backgroundColor:connectionIdColor(connectionId)}}>
            {name}
        </div>
    </foreignObject>
  )
}
)
export default Cursor

Cursor.displayName = "Cursor";