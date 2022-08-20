import { Droppable } from "react-beautiful-dnd";
import { useRecoilValue } from "recoil";
import { DelTodoState } from "../atoms";
import styled from "styled-components";

const Test = styled.div`

`;

function DelTodo() {
  const delTodo = useRecoilValue(DelTodoState);
  return (
    <Droppable droppableId="delTodo">
      {(magic, info) => (
        <Test
          ref={magic.innerRef}
          {...magic.droppableProps}
        >
          Good to go
        </Test>
      )}
    </Droppable>
  );
}

export default DelTodo;