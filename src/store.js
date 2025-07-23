import { configureStore } from "@reduxjs/toolkit";
import { api } from "./apislice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
    api.middleware,
  ],
});
