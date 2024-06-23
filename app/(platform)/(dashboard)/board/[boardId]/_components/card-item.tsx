"use client";

import { Card } from "@prisma/client";
import { Draggable } from "@hello-pangea/dnd";
import { useCardModal } from "@/hooks/use-card-modal";
import { Protect, useOrganization } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/clerk-react";

interface CardItemProps {
  data: Card;
  index: number;
}

export const CardItem = ({ data, index }: CardItemProps) => {
  const [username, setUsername] = useState<string | null>(null);
  const { orgRole, userId } = useAuth();

  const { memberships } = useOrganization({
    memberships: {
      infinite: true,
      keepPreviousData: true,
    },
  });

  useEffect(() => {
    let user: string = "";
    if (data.assignedUserId) {
      const membership = memberships?.data?.find(
        (membership: any) =>
          membership.publicUserData.userId === data.assignedUserId
      );
      if (membership) {
        if (!membership.publicUserData.lastName) {
          user = `${membership.publicUserData.firstName}`;
        } else {
          user = `${membership.publicUserData.firstName} ${membership.publicUserData.lastName}`;
        }
      }

      setUsername(user);
    }
  }, [data.assignedUserId, memberships]);

  const cardModal = useCardModal();

  return (
    <>
      {orgRole === "org:admin" ? (
        <Draggable draggableId={data.id} index={index}>
          {(provided) => (
            <div
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              role="button"
              onClick={() => cardModal.onOpen(data.id)}
              className="truncate border-2 border-transparent hover:border-black py-2 px-3 text-sm bg-white rounded-md shadow-sm"
            >
              {data.title}
              <Protect permission="org:create_new_card:permission">
                <div className="text-gray-400">{username}</div>
              </Protect>
            </div>
          )}
        </Draggable>
      ) : (
        userId === data.assignedUserId && (
          <div
            role="button"
            onClick={() => cardModal.onOpen(data.id)}
            className="truncate border-2 border-transparent hover:border-black py-2 px-3 text-sm bg-white rounded-md shadow-sm"
          >
            {data.title}
            <Protect permission="org:create_new_card:permission">
              <div className="text-gray-400">{username}</div>
            </Protect>
          </div>
        )
      )}
    </>
  );
};