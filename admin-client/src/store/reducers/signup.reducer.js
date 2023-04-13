import { signupConstants } from "../../actions/constants";

const initState = {
  error: null,
  message: "",
  loading: false,
};

export const signupReducer = (state = initState, action) => {
  switch (action.type) {
    case signupConstants.SIGNUP_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;

    case signupConstants.SIGNUP_SUCCESS:
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;

    case signupConstants.SIGNUP_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };

      break;
  }

  return state;
};
