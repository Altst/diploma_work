import { z } from "zod";

export const CreateList = z.object({
  title: z
    .string({
      required_error: "Список повинен мати назву",
      invalid_type_error: "Список повинен мати назву",
    })
    .min(3, {
      message: "Навза занадто коротка",
    }),
  boardId: z.string(),
});
