import { initialDataConstants } from "./constants";
import axios from "../helpers/axios"
const getInitialData = () => {
  return async (dispatch) => {
    dispatch({ type: initialDataConstants.GET_INITIAL_DATA_REQUEST });

    const res=await axios.post("/initialdata")

    if(res.status === 200){
        dispatch({
            type: initialDataConstants.GET_INITIAL_DATA_SUCCESS,
            payload: {}
        })
    }
  };
};
