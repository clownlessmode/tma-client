import { z } from "zod";
const schema = z.object({
  title: z.string().min(1, "Тема отчёта обязательна"),
  project: z.string().min(1, "Проект обязателен"),
  account: z.string().min(1, "Аккаунт обязателен"),
  files: z
    .custom<FileList>()
    .refine(
      (files) => files?.length > 0,
      "Пожалуйста, загрузите хотя бы один файл."
    ),
});

export default schema;
