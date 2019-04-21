import initialState from "./initialState";

export default function (state = initialState.menuItems, action) {
  switch (action.type) {
    case "GET_MENU_ITEMS":
    case "GET_DATA":
      return action.menuItems;
    default:
      return state;
  }
}
