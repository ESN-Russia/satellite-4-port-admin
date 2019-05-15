import { combineReducers } from "redux";

import dataReducer from "./dataReducer";
import modalReducer from "./modalReducer";
import loadingReducer from "./loadingReducer";

const combinedReducer = combineReducers({
  data: dataReducer,
  modalState: modalReducer,
  loading: loadingReducer,
});

const rootReducer = (state, action) => combinedReducer(state, action);

export default rootReducer;
