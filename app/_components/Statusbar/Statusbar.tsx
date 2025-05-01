"use client";

import { twMerge } from "tailwind-merge";

export function Statusbar() {
  const systemStatus = true;

  return (
    <div className="flex h-full items-center justify-between">
      <div className="flex flex-row items-center gap-2">
        <div className="relative flex items-center justify-center">
          <div
            className={twMerge(
              "z-10 h-2 w-2 rounded-full bg-red-500",
              systemStatus === true ? "bg-red-500" : "bg-green-400",
            )}
          />
          <div
            className={twMerge(
              "absolute h-2 w-2 animate-ping rounded-full bg-red-500",
              systemStatus === true ? "bg-red-500" : "bg-green-400",
            )}
          />
        </div>

        <span
          className={twMerge(
            "text-xs font-medium",
            systemStatus === true ? "text-red-500" : "text-green-400",
          )}
        >
          {systemStatus === true ? "Paused" : "Running"}
        </span>
      </div>
    </div>
  );
}
