import { createStore } from "redux";
import scoreKeeper from "./reducers";

export const store = createStore(scoreKeeper);
