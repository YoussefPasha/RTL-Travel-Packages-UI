import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  user: undefined,
  isLoading: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setUser: (state, { payload: user }) => {
      state.user = user;
    },
    setUserLoading: (state, { payload: isLoading }) => {
      state.isLoading = isLoading;
    },
  },
});

export const { setUser, setUserLoading } = userSlice.actions;
export const selectUser = (state: any) => state.user;
export const selectUserLoading = (state: any) => state.user.isLoading;
export default userSlice.reducer;
