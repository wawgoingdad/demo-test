import localforage from "localforage";

export const persistConfig = {
    key: "root",
    storage: localforage,
    whitelist: ["leftMenuInfo", "isOpenDrawer"]
};
  