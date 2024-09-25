import { useForm, FieldValues, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "@/shared/ui/form";
import { Button } from "@/shared/ui/button";

export interface FieldConfig<T extends FieldValues> {
  name: keyof T;
  label: string;
  type: "text" | "select" | "radio" | "file";
  options?: { value: string; label: string; img?: string }[];
  component: React.ComponentType<{
    control: UseFormReturn<T>["control"];
    name: keyof T;
    label: string;
    options?: { value: string; label: string; img?: string }[];
    placeholder?: string;
  }>;
  placeholder?: string;
}

interface DynamicFormProps<T extends FieldValues> {
  fields: FieldConfig<T>[];
  schema: z.ZodSchema<T>;
  onSubmit: (data: T) => Promise<void>;
  submitButtonText: string;
}

export function DynamicForm<T extends FieldValues>({
  fields,
  schema,
  onSubmit,
  submitButtonText,
}: DynamicFormProps<T>) {
  const form = useForm<T>({
    resolver: zodResolver(schema),
  });

  const handleSubmit = form.handleSubmit(async (data: T) => {
    await onSubmit(data);
    form.reset();
  });

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="gap-md flex flex-col flex-grow">
        {fields.map((field) => (
          <field.component
            key={field.name as string}
            control={form.control}
            name={field.name}
            label={field.label}
            options={field.options}
            placeholder={field.placeholder}
          />
        ))}
        <Button type="submit" disabled={!form.formState.isValid}>
          {submitButtonText}
        </Button>
      </form>
    </Form>
  );
}
