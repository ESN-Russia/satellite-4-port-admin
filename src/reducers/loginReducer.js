import initialState from "./initialState";

export default function (state = initialState.loading, action) {
  switch (action.type) {
    case "LOGGED_IN":
      return {
        status: true,
        loading: false,
        username: action.data.username,
      };
    case "LOGGED_OUT":
      return {
        status: false,
        loading: false,
        username: "",
      };
    case "GET_DATA":
      return {
        status: true,
        loading: false,
        username: "",
      };
    default:
      return state;
  }
}
