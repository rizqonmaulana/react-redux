import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReduces";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
});

export default reducers;
