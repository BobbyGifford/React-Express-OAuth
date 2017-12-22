import { SET_TRUE, SET_FALSE } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case SET_TRUE:
      return action.payload;
    case SET_FALSE:
        return action.payload;
    default:
      return state;
  }
}
