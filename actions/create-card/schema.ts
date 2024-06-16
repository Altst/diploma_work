import { z } from "zod";

export const CreateCard = z.object({
  title: z
    .string({
      required_error: "Картка повинна мати назву",
      invalid_type_error: "Картка повинна мати назву",
    })
    .min(3, {
      message: "Назва занадто коротка",
    }),
  boardId: z.string(),
  listId: z.string(),
});
