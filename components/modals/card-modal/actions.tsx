import { Button } from "@/components/ui/button";
import { useAction } from "@/hooks/use-action";
import { copyCard } from "@/actions/copy-card";
import { deleteCard } from "@/actions/delete-card";
import { useParams } from "next/navigation";
import { useCardModal } from "@/hooks/use-card-modal";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { useOrganization } from "@clerk/clerk-react";
import { Skeleton } from "@/components/ui/skeleton";
import { CardWithList } from "@/types";
import { Copy, Trash } from "lucide-react";
import { assignUser } from "@/actions/assign-user";
import { Protect } from "@clerk/nextjs";

interface ActionsProps {
  data: CardWithList;
  cardId: string;
}

export const Actions = ({ data }: ActionsProps) => {
  const params = useParams();
  const cardModal = useCardModal();

  const { memberships } = useOrganization({
    memberships: {
      infinite: true,
      keepPreviousData: true,
    },
  });

  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  useEffect(() => {
    setSelectedUserId(data.assignedUserId);
  }, [data.assignedUserId]);

  const { execute: executeCopyCard, isLoading: isLoadingCopy } = useAction(
    copyCard,
    {
      onSuccess: (data) => {
        toast.success(`Картку "${data.title}" було скопійовано`);
        cardModal.onClose();
      },
      onError: (error) => {
        toast.error(error);
      },
    }
  );

  const { execute: executeDeleteCard, isLoading: isLoadingDelete } = useAction(
    deleteCard,
    {
      onSuccess: (data) => {
        toast.success(`Картку "${data.title}" було видалено`);
        cardModal.onClose();
      },
      onError: (error) => {
        toast.error(error);
      },
    }
  );

  const { execute: executeAssignUser, isLoading: isLoadingAssignUser } =
    useAction(assignUser, {
      onSuccess: (data) => {
        toast.success(`На картку "${data.title}" було додано людину`);
        cardModal.onClose();
      },
      onError: (error) => {
        toast.error(error);
      },
    });

  const onCopy = () => {
    const boardId = params.boardId as string;

    executeCopyCard({
      id: data.id,
      boardId,
    });
  };

  const onDelete = () => {
    const boardId = params.boardId as string;

    executeDeleteCard({
      id: data.id,
      boardId,
    });
  };

  const onAssignUser = (value: any) => {
    const boardId = params.boardId as string;
    setSelectedUserId(value);
    executeAssignUser({
      id: data.id,
      boardId,
      assignedUserId: value,
    });
  };

  return (
    <Protect permission="org:create_new_card:permission">
      <div className="space-y-2 mt-2">
        <p className="text-xs font-semibold">Дії</p>
        <select
          value={selectedUserId || ""}
          onChange={(e) => onAssignUser(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md text-sm"
        >
          <option value="" className="text-sm">
            Назначити людину
          </option>
          {memberships?.data?.map((membership) => (
            <option
              key={membership.id}
              value={membership.publicUserData.userId}
            >
              {membership.publicUserData.firstName}{" "}
              {membership.publicUserData.lastName}
            </option>
          ))}
        </select>

        <Button
          onClick={onCopy}
          disabled={isLoadingCopy}
          variant="gray"
          className="w-full justify-start mt-2"
          size="inline"
        >
          <Copy className="h-4 w-4 mr-2" /> Скопіювати
        </Button>
        <Button
          onClick={onDelete}
          disabled={isLoadingDelete}
          variant="gray"
          className="w-full justify-start mt-2"
          size="inline"
        >
          <Trash className="h-4 w-4 mr-2" /> Видалити
        </Button>
      </div>
    </Protect>
  );
};

Actions.Skeleton = function ActionSkeleton() {
  return (
    <Protect permission="org:create_new_card:permission">
      <div className="space-y-2 mt-2">
        <Skeleton className="w-20 h-4 bg-neutral-200" />
        <Skeleton className="w-full h-8 bg-neutral-200" />
        <Skeleton className="w-full h-8 bg-neutral-200" />
        <Skeleton className="w-full h-8 bg-neutral-200" />
      </div>
    </Protect>
  );
};
