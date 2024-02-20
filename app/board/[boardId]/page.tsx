import { Convas } from "./_components/convas";
import { Room } from "@/components/room";
import { Loading } from "./_components/loading";

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {

  return (
    <Room roomId={params.boardId} fallback={<Loading />}>
      <Convas boardId={params.boardId} />
    </Room>
  );
};

export default BoardIdPage;
