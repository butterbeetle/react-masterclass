import { atom, selector } from "recoil"
import { v1 } from "uuid"

export const toDoState = atom({
  key: "toDo",
  default: ["a", "b", "c", "d", "e", "f"],
})