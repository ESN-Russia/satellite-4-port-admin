import initialState from "./initialState";

export default function (state = initialState.modalState, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        isOpen: true,
        pageName: action.pageName,
        pageUrl: action.pageUrl,
      };
    case "CLOSE_MODAL":
      return {
        isOpen: false,
        pageName: "",
        pageUrl: "",
      };
    default:
      return state;
  }
}
