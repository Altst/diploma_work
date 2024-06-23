import { z } from "zod";

export const AssignUser = z.object({
  id: z.string(),
  boardId: z.string(),
  assignedUserId: z.string(),
});
