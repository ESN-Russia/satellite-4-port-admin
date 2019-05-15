import initialState from "./initialState";

export default function (state = initialState.data, action) {
  switch (action.type) {
    case "GET_DATA":
      console.log("dataReducer", action);
      return { ...action.data };
    default:
      return state;
  }
}
