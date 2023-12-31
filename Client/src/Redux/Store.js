import {createStore, applyMiddleware} from "redux";
import Reducer from "./Reducer/Reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const Store = createStore(Reducer, composeWithDevTools(applyMiddleware(thunk)));

export default Store;