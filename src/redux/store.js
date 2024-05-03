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
  
  const authPersistConfig = {
    key: "auth",
    storage,
    whitelist: ['token']
  };
  
  const persistedReducer = persistReducer(authPersistConfig, authReducer);
  
  export const store = configureStore({
    reducer: {
      auth: persistedReducer,
      contacts: contactsReducer, 
      filters: filtersReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  
  export const persistor = persistStore(store);