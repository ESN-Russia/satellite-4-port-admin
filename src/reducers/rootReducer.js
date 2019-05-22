import { combineReducers } from "redux";

import dataReducer from "./dataReducer";
import modalReducer from "./modalReducer";
import loadingReducer from "./loadingReducer";
import loginReducer from "./loginReducer";

const combinedReducer = combineReducers({
  data: dataReducer,
  modalState: modalReducer,
  loading: loadingReducer,
  loggedIn: loginReducer,
});

const rootReducer = (state, action) => combinedReducer(state, action);

export default rootReducer;
