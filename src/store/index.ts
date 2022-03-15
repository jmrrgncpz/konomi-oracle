import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../service/base";

export const store = configureStore({
  reducer: {
    api: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)
})
