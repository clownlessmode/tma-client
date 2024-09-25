import { cn } from "@/shared/lib/utils";
import { ComponentProps } from "react";
interface Props extends ComponentProps<"h1"> {
  colored?: string;
}
const PrimaryHeading = ({ children, colored, className, ...props }: Props) => {
  return (
    <p
      className={cn(
        className,
        "font-bold text-[36px] text-text leading-[100%]"
      )}
      {...props}
    >
      {children} {colored && <span className="text-accenttext">{colored}</span>}
    </p>
  );
};

export default PrimaryHeading;
