import { INVOICE_TYPES } from "../actions/invoiceAction";

const initialState = {
    loading: false,
    myInvoices: []
};

const goodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INVOICE_TYPES.ADD_INVOICE:
      return {
          ...state,
          myInvoices: [...state.myInvoices, action.payload]
      };

    case INVOICE_TYPES.GET_INVOICE:
      return {
          ...state,
          myInvoices: [...action.payload]
      };

    default:
      return state;
  }
};

export default goodsReducer;
