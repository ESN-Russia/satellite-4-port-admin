import axios from "axios";

const SERVER_URL =
  process.env.REACT_APP_API_URL || "https://us-central1-andresokoldev.cloudfunctions.net/";

const getUrl = uri => `${SERVER_URL}${uri}`;

const apiGet = uri => axios.get(getUrl(uri));

const getData = async () => {
  await apiGet("getData").then((res) => {
    console.log("[getData] Success =", res);
    window.store.dispatch({
      type: "GET_DATA",
      menuItems: res.data.menu_items,
      settings: res.data.settings,
      about: res.data.about,
      boards: res.data.boards,
      pages: res.data.boards,
    });
  });
};

const getMenuItems = async () => {
  await apiGet("getMenuItems").then((res) => {
    console.log("[getMenuItems] Success =", res);
    window.store.dispatch({
      type: "GET_MENU_ITEMS",
      menuItems: res.data,
    });
  });
};

const getAboutPage = async () => {
  await apiGet("getAboutPage").then((res) => {
    console.log("[getAboutPage] Success =", res);
    window.store.dispatch({
      type: "GET_ABOUT",
      about: res.data,
    });
  });
};

const getBoards = async () => {
  await apiGet("getBoards").then((res) => {
    console.log("[getBoards] Success =", res);
    window.store.dispatch({
      type: "GET_BOARDS",
      boards: res.data,
    });
  });
};

const getPages = async () => {
  await apiGet("getPages").then((res) => {
    console.log("[getPages] Success =", res);
    window.store.dispatch({
      type: "GET_PAGES",
      pages: res.data,
    });
  });
};

export default {
  getMenuItems,
  getAboutPage,
  getBoards,
  getPages,
  getData,
};
