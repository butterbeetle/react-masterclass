
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1,1fr);
`;

const Board = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  border-radius: 5px;
  background-color: ${props => props.theme.boardColor};
  min-height: 200px;
`;

const Card = styled.div`
  padding: 10px 10px;
  margin-bottom: 5px;
  border-radius: 5px;
  background-color: ${props => props.theme.cardColor};
`;

const toDoArray = ["a", "b", "c", "d", "e", "f"];

function App() {
  const onDragEnd = () => { }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId="one">
            {(magic) => (
              <Board ref={magic.innerRef} {...magic.droppableProps}>
                {toDoArray.map((toDo, index) => (
                  <Draggable draggableId={toDo} index={index}>
                    {(magic) => (
                      <Card
                        ref={magic.innerRef}
                        {...magic.dragHandleProps}
                        {...magic.draggableProps}
                      >
                        {toDo}
                      </Card>
                    )}
                  </Draggable>
                ))}
                {magic.placeholder}
              </Board>
            )}
          </Droppable>
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;