
/*
redux最核心的管理对象store

*/
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {IS_DEV} from "../config/index";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";//总reducer函数
export default  createStore(reducer,
  
  
 IS_DEV ? composeWithDevTools(applyMiddleware(thunk)) :applyMiddleware(thunk))