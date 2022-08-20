import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

interface ITest {
  isDraggingOver: boolean;
  isDraggingFromThis: boolean;
}

const Test = styled.div<ITest>`
  background-color: ${props => (props.isDraggingOver ? "red" : "blue")};
`;

function TrashCan() {
  return (
    <Droppable droppableId="only">
      {(magic, info) => (
        <Test
          ref={magic.innerRef}
          isDraggingOver={info.isDraggingOver} // 이쪽으로 Drag하면 True
          isDraggingFromThis={Boolean(info.draggingFromThisWith)}
        >
          Good to go
        </Test>
      )}
    </Droppable>
  );
}

export default TrashCan;