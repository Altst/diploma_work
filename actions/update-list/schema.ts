import { z } from "zod";

export const UpdateList = z.object({
  title: z
    .string({
      required_error: "Список повинен мати назву",
      invalid_type_error: "Список повинен мати назву",
    })
    .min(3, {
      message: "Назва занадто коротка",
    }),
  id: z.string(),
  boardId: z.string(),
});
