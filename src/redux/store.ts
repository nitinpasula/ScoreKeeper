import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import scoreKeeper from "./reducers";

export const store = createStore(scoreKeeper, composeWithDevTools());
