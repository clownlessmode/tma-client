import { cn } from "@/shared/lib/utils";
import { ComponentProps } from "react";

const Subtitle = ({ children, className, ...props }: ComponentProps<"h1">) => {
  return (
    <h1
      className={cn(className, "font-medium text-base text-subtitletext")}
      {...props}
    >
      {children}
    </h1>
  );
};

export default Subtitle;
