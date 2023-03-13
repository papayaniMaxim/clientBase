import axios from "axios";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logout,
} from "../store/auth/authSlice";
import store from "../store/store";

const dispatch = store.dispatch;

export const login = async (username: string, password: string) => {
  dispatch(loginStart());
    console.log("start");
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000';
    axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';

  try {
      const response = await axios.post("https://localhost:5001/auth/login", { username, password });
      console.log(response.data.token)
    dispatch(loginSuccess(response.data.token));
  } catch (error) {
    console.log(error)
    dispatch(loginFailure("Ошибка авторизации"));
  }
};

export const refresh = async () => {
  const { token } = store.getState().auth;
  if (!token) {
    return;
  }
  try {
    const response = await axios.post("/api/refresh", { token });
    dispatch(loginSuccess(response.data.token));
  } catch (error) {
    dispatch(logout());
  }
};
const authService = { login, refresh };
export default authService;
