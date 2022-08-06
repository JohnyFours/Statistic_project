import { createStore, combineReducers } from "redux";
import statisticReducer from "./Statistic/statisticReducer";

let rootReducer = combineReducers({
  state: statisticReducer,
});

let store = createStore(
  rootReducer
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
