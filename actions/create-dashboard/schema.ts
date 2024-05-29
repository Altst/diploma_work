import { z } from "zod";

export const CreateBoard = z.object({
  title: z
    .string({
      required_error: "Необхідно ввести назву дошки",
      invalid_type_error: "Необхідно ввести назву дошки",
    })
    .min(3, {
      message: "Назва занадто коротка",
    }),
});
