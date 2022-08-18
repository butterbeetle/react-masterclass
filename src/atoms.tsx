import { atom, selector } from "recoil"
import { v1 } from "uuid"

interface IToDoState {
  [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
  key: `toDo/${v1}`,
  default: {
    to_do: ["a", "b", "c", "d", "e", "f"],
    doing: [],
    done: [],
  },
})