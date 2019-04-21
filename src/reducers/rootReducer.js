import { combineReducers } from "redux";

import menuItems from "./menuItemsReducer";
import pages from "./pagesReducer";
import aboutReducer from "./aboutReducer";
import boardsReducer from "./boardsReducer";
import settingsReducer from "./settingsReducer";
import modalReducer from "./modalReducer";

const combinedReducer = combineReducers({
  menuItems,
  pages,
  boards: boardsReducer,
  about: aboutReducer,
  settings: settingsReducer,
  modalState: modalReducer,
});

const rootReducer = (state, action) => combinedReducer(state, action);

export default rootReducer;
