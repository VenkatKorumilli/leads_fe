import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";
import { leadsApi } from "../services/LeadsApi";

export const store = configureStore({
  reducer: {
    [leadsApi.reducerPath]: leadsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(leadsApi.middleware),
});

setupListeners(store.dispatch);
