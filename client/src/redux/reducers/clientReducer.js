import { CLIENT_TYPES } from "../actions/clientAction";

const initialState = {
    loading: false,
    myClients: []
};

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLIENT_TYPES.ADD_CLIENT:
      return {
          ...state,
          myClients: [...state.myClients, action.payload]
      };

    case CLIENT_TYPES.GET_CLIENTS:
      return {
          ...state,
          myClients: [...action.payload]
      };

    default:
      return state;
  }
};

export default clientReducer;
