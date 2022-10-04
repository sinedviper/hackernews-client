import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getComments } from "../../utils/apis";
import type { AppState } from "../../store";
import { Comments } from "../../interfaces/pages-interface";

export const loadComments = createAsyncThunk(
  "@@comments/comments-load",
  async (type: number[]): Promise<Comments[]> => {
    const comments = await getComments(type);
    return comments as Comments[];
  }
);

export const updateComments = createAsyncThunk(
  "@@comments/comments-update",
  async (update: { type: number[]; num: number }): Promise<Comments[]> => {
    const comments = await getComments(update.type, update.num);
    return comments as Comments[];
  }
);

interface commentsState {
  status: string;
  error: string | null;
  comments: Comments[];
}

const initialState: commentsState = {
  status: "idle",
  error: "",
  comments: [],
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    actionClearComments: (state) => (state = initialState),
  },
  extraReducers: (build) => {
    build
      .addCase(loadComments.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadComments.rejected, (state, action) => {
        state.status = "rejected";
        state.error = String(action.payload);
      })
      .addCase(loadComments.fulfilled, (state, action) => {
        state.status = "received";
        state.comments = action.payload as Comments[];
      })
      .addCase(updateComments.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(updateComments.rejected, (state, action) => {
        state.status = "rejected";
        state.error = String(action.payload);
      })
      .addCase(updateComments.fulfilled, (state, action) => {
        state.status = "received";
        if (action.payload)
          state.comments = [...state.comments, ...action.payload] as Comments[];
      });
  },
});

export const { actionClearComments } = commentsSlice.actions;

export const selectComments = (state: AppState) => state.comments;

export const commentsReducer = commentsSlice.reducer;
