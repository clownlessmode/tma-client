import { cn } from "@/shared/lib/utils";
import { ComponentProps } from "react";

const SectionHeading = ({
  children,
  className,
  ...props
}: ComponentProps<"h1">) => {
  return (
    <h2 className={cn(className, "font-bold text-[24px] text-text")} {...props}>
      {children}
    </h2>
  );
};

export default SectionHeading;
