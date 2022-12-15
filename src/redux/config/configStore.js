import { createStore } from "redux";
import { combineReducers } from "redux";
import Users from '../modules/toDoList'


const rootReducer = combineReducers({
    Users,
}); 
const store = createStore(rootReducer); 

export default store; 