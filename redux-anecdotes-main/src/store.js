import { createStore } from "redux";
import anecdoteReducer from "./reducers/anecdoteReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(anecdoteReducer, composeWithDevTools());
