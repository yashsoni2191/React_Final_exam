import { combineReducers } from "redux";
import productReducer from "./Reducer";

const rootReducer = combineReducers({
  products: productReducer, 
});

export default rootReducer;
