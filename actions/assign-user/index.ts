"use server";

import { auth } from "@clerk/nextjs/server";
import { InputType, ReturnType } from "./types";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { AssignUser } from "./schema";
import { createAuditLog } from "@/lib/create-audit-log";
import { ACTION, ENTITY_TYPE } from "@prisma/client";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();
  let card;

  if (!userId || !orgId) {
    return {
      error: "Неавторізовано",
    };
  }

  const { id, boardId, assignedUserId } = data;
  try {
    card = await db.card.update({
      where: {
        id,
        list: {
          board: {
            orgId,
          },
        },
      },
      data: {
        assignedUserId: assignedUserId,
      },
    });

    await createAuditLog({
      entityId: card.id,
      entityTitle: card.title,
      entityType: ENTITY_TYPE.CARD,
      action: ACTION.UPDATE,
    });
  } catch (error) {
    return {
      error: "Не вдалося оновити",
    };
  }

  revalidatePath(`/board/${boardId}`);
  return { data: card };
};

export const assignUser = createSafeAction(AssignUser, handler);
