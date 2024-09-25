import { cn } from "@/shared/lib/utils";
import { ComponentProps } from "react";

const Block = ({ children, className }: ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "p-[16px] flex flex-col gap-md bg-bg rounded-md",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Block;
