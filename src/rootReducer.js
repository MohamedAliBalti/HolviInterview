import { combineReducers } from "redux";
import reducer from "./services/reducer";

const reducers = combineReducers({
  reducer: reducer,
});


export default reducers;