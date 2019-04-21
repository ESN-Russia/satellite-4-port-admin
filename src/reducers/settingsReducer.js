import initialState from "./initialState";

export default function (state = initialState.settings, action) {
  switch (action.type) {
    case "GET_DATA":
      document.title = action.settings.name;
      return {
        loading: false,
        name: action.settings.name,
        logo_url: action.settings.logo_url,
        maintainance: action.settings.maintainance,
      };
    default:
      return state;
  }
}
