import Screen from "@/shared/ui/containers/Screen";
import {
  DynamicForm,
  FieldConfig,
} from "@/shared/ui/FormGenerator/DynamicForm";
import FileField from "@/shared/ui/FormGenerator/FileField";
import RadioField from "@/shared/ui/FormGenerator/RadioField";
import { SelectField } from "@/shared/ui/FormGenerator/SelectField";
import TextField from "@/shared/ui/FormGenerator/TextField";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { Selectable } from "@telegram-apps/telegram-ui";
const schema = z.object({
  title: z
    .string({ message: "Поле принимает только текст" })
    .min(1, "Тема отчёта обязательна")
    .max(5, "Не больше 5 символов"),
  project: z.string(),
  files: z
    .custom<FileList>()
    .refine(
      (files) => files?.length > 0,
      "Пожалуйста, загрузите хотя бы один файл."
    ),
});

type FormData = z.infer<typeof schema>;

export function TestForm() {
  const fields: FieldConfig<FormData>[] = [
    {
      name: "title",
      label: "Тема отчёта",
      type: "text",
      component: TextField,
      placeholder: "Введите тему отчёта",
    },
    {
      name: "project",
      label: "Проект",
      type: "select",
      placeholder: "Выберите проект",
      options: [
        {
          value: "1",
          label: "Project 1",
        },
        {
          value: "2",
          label: "Project 2",
        },
      ],
      component: SelectField,
    },
    {
      name: "project",
      label: "Аккаунт",
      type: "radio",
      placeholder: "Выберите аккаунт",
      component: RadioField,
      options: [
        {
          img: "https://i.ibb.co/WfcmM6x/9c15d9647b9643dfbc5e522299d13593.png",
          value: "1",
          label: "Project 1",
        },
        {
          img: "https://i.ibb.co/S6HMgXd/vs-F28-QV-400x400.jpg",

          value: "2",
          label: "Project 2",
        },
        {
          img: "https://i.ibb.co/WfcmM6x/9c15d9647b9643dfbc5e522299d13593.png",
          value: "3",
          label: "Project 1",
        },
        {
          img: "https://i.ibb.co/S6HMgXd/vs-F28-QV-400x400.jpg",

          value: "4",
          label: "Project 2",
        },
        {
          img: "https://i.ibb.co/WfcmM6x/9c15d9647b9643dfbc5e522299d13593.png",
          value: "5",
          label: "Project 1",
        },
        {
          img: "https://i.ibb.co/S6HMgXd/vs-F28-QV-400x400.jpg",

          value: "6",
          label: "Project 2",
        },
        {
          img: "https://i.ibb.co/WfcmM6x/9c15d9647b9643dfbc5e522299d13593.png",
          value: "7",
          label: "Project 1",
        },
        {
          img: "https://i.ibb.co/S6HMgXd/vs-F28-QV-400x400.jpg",

          value: "8",
          label: "Project 2",
        },
      ],
    },
    {
      name: "files",
      label: "Файлы отчёта",
      type: "file",
      placeholder: "Выберите файлы",
      component: FileField,
    },
  ];

  const onSubmit = async (values: FormData) => {
    // try {
    console.log(values);
    //   onSuccessfulSubmit();
    // } catch (error) {
    //   console.error("Error submitting form:", error);
    // }
  };

  return (
    <DynamicForm
      fields={fields}
      schema={schema}
      onSubmit={onSubmit}
      submitButtonText="Отправить"
    />
  );
}

const TestPage = () => {
  return (
    <div className="overflow-hidden">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default TestPage;
