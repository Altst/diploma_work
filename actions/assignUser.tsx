import { Card, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const saveAssignedUser = async (
  cardId: string,
  userId: string
): Promise<Card> => {
  try {
    // Проверяем, существует ли карточка
    const existingCard = await prisma.card.findUnique({
      where: { id: cardId },
    });

    if (!existingCard) {
      throw new Error(`Card with ID ${cardId} not found.`);
    }

    // Обновляем карточку, назначая пользователю
    const updatedCard = await prisma.card.update({
      where: { id: cardId },
      data: {
        assignedUserId: userId,
      },
    });

    return updatedCard;
  } catch (error) {
    console.error("Failed to save assigned user:", error);
    throw new Error("Failed to save assigned user");
  }
};
