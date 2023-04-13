import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";

import rootReducer  from "./reducers/index";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
