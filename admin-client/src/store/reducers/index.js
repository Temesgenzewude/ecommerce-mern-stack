import { combineReducers } from "redux";
import { authReducer } from "./auth.reducers";
import { signupReducer } from "./signup.reducer";

import { productReducer } from "./product.reducer";
import { orderReducer } from "./order.reducer";
import { categoryReducer } from "./category.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: signupReducer,
  category: categoryReducer,
  product: productReducer,
  order: orderReducer,
});

export default rootReducer;
