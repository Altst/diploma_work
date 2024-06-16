import { ACTION, AuditLog } from "@prisma/client";

export const generateLogMessage = (log: AuditLog) => {
  const { action, entityTitle, entityType } = log;

  switch (action) {
    case ACTION.CREATE:
      return `створив ${entityType.toLowerCase()} "${entityTitle}"`;
    case ACTION.UPDATE:
      return `оновив ${entityType.toLowerCase()} "${entityTitle}"`;
    case ACTION.DELETE:
      return `видалив ${entityType.toLowerCase()} "${entityTitle}"`;
    default:
      return `невідома дія ${entityType.toLowerCase()} "${entityTitle}"`;
  }
};
