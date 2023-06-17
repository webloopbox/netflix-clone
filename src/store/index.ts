import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movieSlice";
import userReducer from "./userSlice";
import modalReducer from "./modalSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sideeffects/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    users: userReducer,
    modals: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
