import { atom, selector } from "recoil"
import { v1 } from "uuid"
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export interface ITodo {
  id: number;
  text: string;
}

interface IToDoState {
  [key: string]: ITodo[];
}

export const boardState = atom<string[]>({
  key: "board",
  default: ["To Do", "Doing", "Done"],
});

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    "To Do": [],
    Doing: [],
    Done: [],
  },
  effects_UNSTABLE: [persistAtom],
})

export const DelTodoState = atom<boolean>({
  key: "delete",
  default: false,
})