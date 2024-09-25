import { cn } from "@/shared/lib/utils";
import { ComponentProps } from "react";

const Screen = ({ children, className = "" }: ComponentProps<"main">) => {
  return (
    <main
      className={cn(
        "p-5 w-screen min-h-[calc(100vh-70px)] overflow-y-auto h-full flex flex-col gap-lg bg-secondarybg",
        className
      )}
    >
      {children}
    </main>
  );
};

export default Screen;
