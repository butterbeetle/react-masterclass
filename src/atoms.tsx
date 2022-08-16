import { atom, selector } from "recoil"
import { v1 } from "uuid"

export const minutesState = atom({
  key: `minutes/${v1()}`,
  default: 0,
})

export const hourSelector = selector({
  key: `hours/${v1()}`,
  get: ({ get }) => {
    const minutes = get(minutesState);
    return minutes / 60;
  }
})