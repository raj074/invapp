import { GOODS_TYPES } from "../actions/goodsAction";

const initialState = {
    loading: false,
    myGoods: []
};

const goodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOODS_TYPES.ADD_GOODS:
      return {
          ...state,
          myGoods: [...state.myGoods, action.payload]
      };

    case GOODS_TYPES.GET_GOODS:
      return {
          ...state,
          myGoods: [...action.payload]
      };

    default:
      return state;
  }
};

export default goodsReducer;
