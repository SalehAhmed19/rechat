import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const api = import.meta.env.VITE_BASEURL;

const initialState = {
  isLoading: false,
  users: [],
  isError: false,
};

export const signupUser = createAsyncThunk(
  "signupUser",
  async (userInfo, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${api}/user/authentication/signup`,
        userInfo
      );

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const getAllUsers = createAsyncThunk("getAllUsers", async () => {
  try {
    const response = await axios.get(`${api}/user/get-users`);

    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
    // return rejectWithValue(err.response?.data?.message || err.message);
  }
});

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  extraReducers: (builder) => {
    // singup related case handling
    builder.addCase(signupUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signupUser.fulfilled, (state, actions) => {
      state.isLoading = false;
      state.users.push(actions.payload);
    });
    builder.addCase(signupUser.rejected, (state, actions) => {
      state.isError = true;
      console.log(actions.payload);
    });

    // get all users related case handling
    builder.addCase(getAllUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllUsers.fulfilled, (state, actions) => {
      state.isLoading = false;
      console.log(actions);
      state.users = actions.payload;
    });
    builder.addCase(getAllUsers.rejected, (state, actions) => {
      state.isError = true;
      console.log(actions.payload);
    });
  },
});

export default userSlice.reducer;
