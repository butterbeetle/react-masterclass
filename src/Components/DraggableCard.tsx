import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div`
  padding: 10px 10px;
  margin-bottom: 5px;
  border-radius: 5px;
  background-color: ${props => props.theme.cardColor};
`;

interface IDraggableCardProps {
  toDo: string;
  index: number;
}

function DraggableCard({ toDo, index }: IDraggableCardProps) {
  console.log(toDo, "has been rendered")
  return (<Draggable key={toDo} draggableId={toDo} index={index}>
    {(magic) => (
      <Card
        ref={magic.innerRef}
        {...magic.dragHandleProps}
        {...magic.draggableProps}
      >
        {toDo}
      </Card>
    )}
  </Draggable>);
}

export default React.memo(DraggableCard);