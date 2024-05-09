import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
  import storage from "redux-persist/lib/storage";
  import { filtersReducer } from "./filters/slice";
import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/slice";
import { authReducer } from "./auth/slice";
import { modalReducer } from "./modal/slice";
  
  const authPersistConfig = {
    key: "auth",
    storage,
    whitelist: ['token'],
  };
  
  export const store = configureStore({
    reducer: {
      auth: persistReducer(authPersistConfig, authReducer),
      contacts: contactsReducer, 
      filters: filtersReducer,
      modal: modalReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  
  export const persistor = persistStore(store);