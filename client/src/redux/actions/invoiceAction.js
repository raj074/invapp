import { postDataAPI, getDataAPI } from "../../utils/fetchData";


import { GLOBALTYPES } from "./globalTypes";

export const INVOICE_TYPES = {
  LOADING: "LOADING",
  ADD_INVOICE: "ADD_INVOICE",
  GET_INVOICE: "GET_INVOICE",
};


export const addInvoice = ({invoice, auth, client}) => async (dispatch) => {

    
    try {
      dispatch({ type: INVOICE_TYPES.LOADING, payload: { loading: true } });
      
      const res = await postDataAPI(`addInvoice/${client}`, {invoice}, auth.token);
      
      
      
      dispatch({
        type: INVOICE_TYPES.ADD_INVOICE,
        payload: res.data.invoice,
      });

      dispatch({
        type: GLOBALTYPES.UPDATE_USER,
        payload: { user: res.data.user },
      });
  
      dispatch({ type: INVOICE_TYPES.LOADING, payload: { loading: false } });
      
      dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } });
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: err.response.data.msg },
      });
    }
  };

  export const getInvoices = ({auth}) => async (dispatch) => {
  
  
    try {
      dispatch({ type: INVOICE_TYPES.LOADING, payload: { loading: true } });
      
      const res = await getDataAPI("getInvoices",  auth.token);
      
      
      
      dispatch({
        type: INVOICE_TYPES.GET_INVOICE,
        payload: res.data.invoices,
      });
  
      dispatch({ type: INVOICE_TYPES.LOADING, payload: { loading: false } });
      
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: err.response.data.msg },
      });
    }
  };