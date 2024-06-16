import { z } from "zod";

export const UpdateCard = z.object({
  boardId: z.string(),
  description: z.optional(
    z
      .string({
        required_error: "Потрібен опис",
        invalid_type_error: "Потрібен опис",
      })
      .min(3, {
        message: "Опис занадто короткий",
      })
  ),
  title: z.optional(
    z
      .string({
        required_error: "Картка повинна мати назву",
        invalid_type_error: "Картка повинна мати назву",
      })
      .min(3, {
        message: "Назва занадто коротка",
      })
  ),
  id: z.string(),
});
