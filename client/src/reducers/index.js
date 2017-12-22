import { combineReducers } from "redux";
import authReducer from "./authReducer";
import messagesReducer from "./messagesReducer";
import messageReducer from "./messageReducer";
import loadingReducer from "./loadingReducer";
import { reducer as reduxForm } from "redux-form";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  messages: messagesReducer,
  message: messageReducer,
  loadingMode: loadingReducer
});
