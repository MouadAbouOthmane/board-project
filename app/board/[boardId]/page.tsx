import { Convas } from "./_components/convas"

interface BoardIdPageProps {
    params: {
        boardId: string
    
    }
}

const BoardIdPage = ({params, }: BoardIdPageProps) => {
    return (
        <Convas boardId={params.boardId}/>
    )
}

export default BoardIdPage