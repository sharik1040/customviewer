import { DATA_REQUESTED, GET_ITEM } from "../../constants"

export function getData() {
  return { type: DATA_REQUESTED };
}

export function getItem(id: any) {
  return { type: GET_ITEM, id }
}