import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IUser } from "../../models/IUser";
import { fetchUsersAsync } from "./ActionCreators";

interface UserState {
  users: IUser[];
  isLoading: boolean;
  isError: string;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  isError: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // usersFetching(state) {
    //   state.isLoading = true
    // },
    // usersFetchingSuccess(state, action:PayloadAction<IUser[]>) {
    //   state.isLoading = false
    //   state.users = action.payload
    // },
    // usersFetchingReject(state, action:PayloadAction<string>) {
    //   state.isLoading = false
    //   state.isError = action.payload
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsersAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message as string
      })
      .addCase(fetchUsersAsync.fulfilled, (state, action:PayloadAction<IUser[]>) => {
        state.isLoading = false;
        state.users = action.payload
        state.isError = ''
      });
  },
});

export default userSlice.reducer;
