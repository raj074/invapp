import { postDataAPI, getDataAPI } from "../../utils/fetchData";
import validClient from "../../utils/validClient";
import { GLOBALTYPES } from "./globalTypes";

export const CLIENT_TYPES = {
  LOADING: "LOADING",
  ADD_CLIENT: "ADD_CLIENT",
  GET_CLIENTS: "GET_CLIENTS",
};


export const addClient = ({data, auth, setShowAddClient}) => async (dispatch) => {
  
    const check = validClient(data);
    if (check.errLength > 0) {
      return dispatch({ type: GLOBALTYPES.ALERT, payload: check.errMsg });
    }
    
    try {
      dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
      
      const res = await postDataAPI("addClient", data, auth.token);
      
      
      
      dispatch({
        type: CLIENT_TYPES.ADD_CLIENT,
        payload: res.data.client,
      });
  
      dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } });
      setShowAddClient(false);
      dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } });
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: err.response.data.msg },
      });
    }
  };

  export const getClients = ({auth}) => async (dispatch) => {
  
  
    try {
      dispatch({ type: CLIENT_TYPES.LOADING, payload: { loading: true } });
      
      const res = await getDataAPI("getClients",  auth.token);
      
      
      
      dispatch({
        type: CLIENT_TYPES.GET_CLIENTS,
        payload: res.data.clients,
      });
  
      dispatch({ type: CLIENT_TYPES.LOADING, payload: { loading: false } });
      
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: err.response.data.msg },
      });
    }
  };