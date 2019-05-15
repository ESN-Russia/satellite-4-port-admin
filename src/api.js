import axios from "axios";

const SERVER_URL =
  process.env.REACT_APP_API_URL || "https://us-central1-andresokoldev.cloudfunctions.net/";

const getUrl = uri => `${SERVER_URL}${uri}`;

const apiGet = uri => axios.get(getUrl(uri));
const apiPost = (uri, payload) => axios.post(getUrl(uri), payload);

const getData = async () => {
  await apiGet("getData").then((res) => {
    console.log("[getData] Success =", res);
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
};
