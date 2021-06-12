import { combineReducers } from "redux";
import auth from "./authReducer";
import alert from "./alertReducer";
import theme from "./themeReducer";
import intro from "./introCompletionReducer";
import clients from "./clientReducer";
import goods from "./goodsReducer";



export default combineReducers({
  auth,
  alert,
  theme,
  intro,
  clients,
  goods,
});