import { Control, FieldPath, FieldValues } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../form";
import { Carousel, CarouselContent, CarouselItem } from "../carousel";
import { RadioGroup, RadioGroupItem } from "../radio-group";
import { cn } from "@/shared/lib/utils";

interface RadioOption {
  value: string;
  label: string;
  img?: string;
}

interface RadioFieldComponentProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;
  options?: RadioOption[];
  placeholder?: string;
}

export default function RadioField<T extends FieldValues>({
  control,
  name,
  label,
  options,
  placeholder,
}: RadioFieldComponentProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Carousel className="w-full">
              <RadioGroup
                onValueChange={(value) => field.onChange(value)}
                value={field.value as string}
              >
                <CarouselContent>
                  {options?.map((option, index) => (
                    <CarouselItem
                      key={index}
                      className="basis-1/3 xs:basis-1/4  justify-center flex"
                    >
                      <RadioGroupItem
                        value={option.value}
                        id={option.value}
                        className="peer sr-only"
                      />
                      <label
                        aria-label={placeholder}
                        htmlFor={option.value}
                        className={cn(
                          "flex items-center justify-center h-[60px] w-[60px] overflow-hidden  bg-bg rounded-md cursor-pointer transition-all border-2",
                          field.value === option.value
                            ? "border-button"
                            : "border-bg"
                        )}
                      >
                        <img
                          alt={option.label}
                          src={option.img}
                          width={60}
                          height={60}
                          className={cn("transition-all")}
                        />
                      </label>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </RadioGroup>
            </Carousel>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
