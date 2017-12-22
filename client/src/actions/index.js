import axios from "axios";
import { FETCH_USER, FETCH_MESSAGES, FETCH_MESSAGE } from "./types";

export const fetchUser = () => {
  return async dispatch => {
    const res = await axios.get("/api/current_user");
    dispatch({ type: FETCH_USER, payload: res.data });
  };  
};

export const submitMessage = async (values) => {
  await axios.post('/api/messages', values);
};

export const fetchMessages = () => async dispatch => {
  const res = await axios.get('/api/messages');

  dispatch({ type: FETCH_MESSAGES, payload: res.data });
};

export const fetchMessage = (messageId) => {
  return async dispatch => {
    const res = await axios.get('/api/message/' + messageId);
  
    dispatch({ type: FETCH_MESSAGE, payload: res.data })
  }  
}
