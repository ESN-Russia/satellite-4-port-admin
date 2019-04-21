import initialState from "./initialState";

export default function (state = initialState.about, action) {
  switch (action.type) {
    case "GET_ABOUT":
    case "GET_DATA":
      return action.about;
    default:
      return state;
  }
}
