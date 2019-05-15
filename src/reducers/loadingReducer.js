import initialState from "./initialState";

export default function (state = initialState.loading, action) {
  switch (action.type) {
    case "GET_DATA":
      return false;
    case "SET_LOADING":
      return true;
    default:
      return state;
  }
}
