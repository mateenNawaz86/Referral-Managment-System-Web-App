import reducer from "./mainReducer/main";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers(reducer)
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
