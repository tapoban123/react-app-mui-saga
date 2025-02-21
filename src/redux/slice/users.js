import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "users",
  initialState: [
    {
      id: 0,
      name: "",
      email: "",
      password: "",
    },
  ],
  reducers: {
    getUsersSlice: (state, action) => {
      state = action.payload;
      return state;
    },
    addUserSlice: (state, action) => {
      state.push(action.payload);
      return state;
    },
    editUserSlice: (state, action) => {
      state = state.map((i) =>
        i.id == action.payload.id ? action.payload : i
      );
      return state;
    },
    deleteUserSlice: (state, action) => {
      state = action.filter((i) => i.id !== action.payload);
      return state;
    },
  },
});

export const { getUsersSlice, editUserSlice, addUserSlice, deleteUserSlice } =
  user.actions;
export default user.reducer;
