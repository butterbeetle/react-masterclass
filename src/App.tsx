import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { toDoState } from "./atoms";
import styled from "styled-components";
import Board from "./Components/Board";
import DelTodo from "./Components/DelTodo";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = (info: DropResult) => {
    const { destination, source } = info;
    if (!destination) {
      // When Not Moving
      return;
    }
    else if (destination?.droppableId === "delTodo") {
      // Delete Todo Item
      setToDos((allBoards) => {
        const delTodo = [...allBoards[source.droppableId]];
        delTodo.splice(source.index, 1);
        return {
          ...allBoards,
          [source.droppableId]: delTodo
        };
      })
    }
    else if (destination?.droppableId === source.droppableId) {
      // Same Board Movement
      setToDos((allBoards) => {
        const boardCopy = [...allBoards[source.droppableId]];
        const taskObj = boardCopy[source.index];
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination?.index, 0, taskObj);
        return {
          ...allBoards,
          [source.droppableId]: boardCopy
        };
      });
    }
    else if (destination?.droppableId !== source.droppableId) {
      // Another Board Movement
      setToDos((allBoards) => {
        const sourceBoard = [...allBoards[source.droppableId]];
        const taskObj = sourceBoard[source.index];
        const destinationBoard = [...allBoards[destination?.droppableId]];
        sourceBoard.splice(source.index, 1);
        destinationBoard.splice(destination?.index, 0, taskObj);
        return {
          ...allBoards,
          [source.droppableId]: sourceBoard,
          [destination?.droppableId]: destinationBoard,
        }
      })
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map(boardId =>
            <Board key={boardId} toDos={toDos[boardId]} boardId={boardId} />
          )}
        </Boards>
        <DelTodo />
      </Wrapper>
    </DragDropContext>
  );
}

export default App;