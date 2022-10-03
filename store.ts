import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import { commentsReducer } from "./features";

import { cardsReducer } from "./features/cards/cardsSlice";
import { userReducer } from "./features/users/userSlice";

const rootReducer = combineReducers({
  cards: cardsReducer,
  user: userReducer,
  comments: commentsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
