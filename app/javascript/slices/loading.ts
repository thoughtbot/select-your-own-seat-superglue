import { createSlice } from "@reduxjs/toolkit";

export type LoadingState = {
  isLoading: boolean
}

const initialState: LoadingState = { isLoading: false };

export const loadingSlice = createSlice({
  name: "loading",
  initialState: initialState,
  reducers: {
    hideLoading() {
      return {
        isLoading: false
      }
    },
    showLoading() {
      return {
        isLoading: true
      }
    },
  },
});

export const { hideLoading, showLoading} = loadingSlice.actions;
