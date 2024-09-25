import { Control, FieldPath, FieldValues } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../form";
import { Input } from "../input";
import { useState } from "react";

interface FileFieldComponentProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;
}

export default function FileField<T extends FieldValues>({
  control,
  name,
  label,
}: FileFieldComponentProps<T>) {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field: { onChange, value, ...field } }) => (
        <FormItem className="flex flex-col gap-[4px] flex-grow min-h-0 h-full">
          <FormLabel>{label}</FormLabel>
          <FormControl className="flex-grow min-h-0 h-full">
            <div className="flex flex-col h-full">
              <label
                id={value}
                htmlFor="file-input"
                className="flex-grow h-[80px] border-dashed text-sm text-text border-subtitletext border rounded-md flex justify-center items-center gap-xs text-base font-semibold text-neutral-40"
              >
                Выберите файлы:{" "}
                <span className="font-normal ">
                  {files.length === 0
                    ? "файлы не выбраны"
                    : `${files.length} ${getFileWord(files.length)}`}
                </span>
              </label>
              <Input
                id="file-input"
                className="sr-only hidden"
                type="file"
                multiple
                accept="image/*, application/pdf"
                onChange={(e) => {
                  const selectedFiles = e.target.files;
                  if (selectedFiles) {
                    onChange(selectedFiles);
                    setFiles(Array.from(selectedFiles));
                  }
                }}
                {...field}
              />
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

function getFileWord(count: number): string {
  if (count === 1) {
    return "файл загружен";
  } else if (count >= 2 && count <= 4) {
    return "файла загружено";
  } else {
    return "файлов загружено";
  }
}
