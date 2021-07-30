import { GLOBALTYPES } from "../actions/globalTypes";

const initialState = {};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GLOBALTYPES.AUTH:
      return action.payload;

    case GLOBALTYPES.UPDATE_USER:
      return {
        ...state,
        user: {...action.payload.user}
      };

    default:
      return state;
  }
};

export default authReducer;
