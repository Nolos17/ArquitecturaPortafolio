import { configureStore } from "@reduxjs/toolkit";
import optReducer from "./optimizador/optSlice";

const store = configureStore({
  reducer: {
    optimizador: optReducer,
  },
});

export default store;
