import initialState from "./initialState";

export default function (state = initialState.data, action) {
  switch (action.type) {
    case "GET_DATA":
      console.log("dataReducer", action);
      return {
        settings: {
          name: action.data.name,
          logo_url: action.data.logo_url,
          maintenance: action.data.maintenance,
        },
        pages: action.data.pages,
      };
    default:
      return state;
  }
}
