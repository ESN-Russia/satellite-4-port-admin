import initialState from "./initialState";

export default function (state = initialState.boards, action) {
  switch (action.type) {
    case "GET_BOARDS":
    case "GET_DATA":
      return {
        ...state,
        ...action.boards,
      };
    default:
      return state;
  }
}
