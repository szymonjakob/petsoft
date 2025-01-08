import { cn } from "@/lib/utils";
import React from "react";

export default function ContentBlock({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-[#f7f8fa] shadow-sm rounded-md overflow-hidden w-full h-full",
        className
      )}
    >
      {children}
    </div>
  );
}
