import { z } from "zod";

export const CreateBoard = z.object({
  title: z
    .string({
      required_error: "Дошка повинна мати назву",
      invalid_type_error: "Дошка повинна мати назву",
    })
    .min(3, {
      message: "Назва занадто коротка",
    }),
});
