import { createStore } from "redux";
import productReduer from "./reducers/productReducer";
import { composeWithDevTools } from "@redux-devtools/extension";


const store = createStore(productReduer,composeWithDevTools());  // used redux devtools

export default store;