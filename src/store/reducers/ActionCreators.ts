import axios from "axios";
import type { AppDispatch } from "../store";
import type { IUser } from "../../models/IUser";
import { userSlice } from "./UserSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(userSlice.actions.usersFetching());
//     const response = await axios.get<IUser[]>(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     dispatch(userSlice.actions.usersFetchingSuccess(response.data));
//   } catch (e) {
//     const error = e as { message: string };
//     dispatch(userSlice.actions.usersFetchingReject(error.message));
//   }
// };

export const fetchUsersAsync = createAsyncThunk("user/fetch", async () => {
  const response = await axios.get<IUser[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});
