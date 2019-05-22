import axios from "axios";
import Cookies from "js-cookie";

const SERVER_URL = process.env.REACT_APP_API_URL || "https://esnrussia-web-backend.herokuapp.com/";

const getUrl = uri => `${SERVER_URL}${uri}`;

const apiGet = uri =>
  axios
    .get(getUrl(uri), {
      headers: Cookies.get("esn_auth_token") && { "X-Auth": Cookies.get("esn_auth_token") },
    })
    .catch((err) => {
      if (err.response.status === 401) {
        window.store.dispatch({
          type: "LOGGED_OUT",
        });
      }
      throw err;
    });

const apiPost = (uri, payload) =>
  axios
    .post(getUrl(uri), payload, {
      headers: Cookies.get("esn_auth_token") && { "X-Auth": Cookies.get("esn_auth_token") },
    })
    .catch((err) => {
      if (err.response.status === 401) {
        window.store.dispatch({
          type: "LOGGED_OUT",
        });
      }
      throw err;
    });

const loginRedirect = () =>
  window.location.replace(`${SERVER_URL}login_redirect/?token=${Cookies.get("esn_auth_token")}&frontend=${encodeURIComponent(window.location.host)}`);

const getData = async () => {
  await apiGet("get_admin").then((res) => {
    console.log("[get_admin] Success =", res);
    window.store.dispatch({
      type: "GET_DATA",
      data: res.data,
    });
  });
};

const updateData = async (updatePatch) => {
  window.store.dispatch({
    type: "SET_LOADING",
  });
  const { data } = window.store.getState();
  console.log(data);
  console.log(updatePatch);
  console.log({ ...data, ...updatePatch });
  await apiPost("updateData", { ...data, ...updatePatch }).then((res) => {
    console.log("[updateData] Success =", res);
    window.store.dispatch({
      type: "GET_DATA",
      data: res.data,
    });
  });
};

export default {
  getData,
  updateData,
  loginRedirect,
};
