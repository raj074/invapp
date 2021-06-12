import { postDataAPI, getDataAPI } from "../../utils/fetchData";
import validGoods from "../../utils/validGoods";
//!ncdsmncsslc
import { GLOBALTYPES } from "./globalTypes";

export const GOODS_TYPES = {
  LOADING: "LOADING",
  ADD_GOODS: "ADD_GOODS",
  GET_GOODS: "GET_GOODS",
};


export const addGoods = ({data, auth, setShowAddGoods}) => async (dispatch) => {
 
    const check = validGoods(data);
    if (check.errLength > 0) {
      return dispatch({ type: GLOBALTYPES.ALERT, payload: check.errMsg });
    }
    
    try {
      dispatch({ type: GOODS_TYPES.LOADING, payload: { loading: true } });
      
      const res = await postDataAPI("addGoods", data, auth.token);
      
      
      
      dispatch({
        type: GOODS_TYPES.ADD_GOODS,
        payload: res.data.goods,
      });
  
      dispatch({ type: GOODS_TYPES.LOADING, payload: { loading: false } });
      setShowAddGoods(false);
      dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } });
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: err.response.data.msg },
      });
    }
  };

  export const getGoods = ({auth}) => async (dispatch) => {
  
  
    try {
      dispatch({ type: GOODS_TYPES.LOADING, payload: { loading: true } });
      
      const res = await getDataAPI("getGoods",  auth.token);
      
      
      
      dispatch({
        type: GOODS_TYPES.GET_GOODS,
        payload: res.data.goods,
      });
  
      dispatch({ type: GOODS_TYPES.LOADING, payload: { loading: false } });
      
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: err.response.data.msg },
      });
    }
  };