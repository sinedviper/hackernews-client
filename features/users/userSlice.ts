import { User } from "./../../interfaces/pages-interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getUser } from "../../utils/apis";
import type { AppState } from "../../store";

export const loadUser = createAsyncThunk(
  "@@user/user-load",
  async (type: string): Promise<User> => {
    const user = await getUser(type);
    return user;
  }
);

interface UserState {
  status: string;
  error: string | null;
  user: User | null;
}

const initialState: UserState = {
  status: "idle",
  error: "",
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(loadUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadUser.rejected, (state, action) => {
        state.status = "rejected";
        state.error = String(action.payload);
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.status = "received";
        state.user = action.payload;
      });
  },
});

export const selectUser = (state: AppState) => state.user;

export const userReducer = userSlice.reducer;
