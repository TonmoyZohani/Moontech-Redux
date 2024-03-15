import { createStore } from "redux";
import productReduer from "./reducers/productReducer";


const store = createStore(productReduer);