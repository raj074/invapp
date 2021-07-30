import { combineReducers } from "redux";
import auth from "./authReducer";
import alert from "./alertReducer";
import theme from "./themeReducer";
import intro from "./introCompletionReducer";
import clients from "./clientReducer";
import goods from "./goodsReducer";
import invoice from "./invoiceReducer";



export default combineReducers({
  auth,
  alert,
  theme,
  intro,
  clients,
  goods,
  invoice,
});