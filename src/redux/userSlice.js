import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    editingUser: null,
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    addUser: (state, action) => {
      const { id } = action.payload;
      const index = state.users.findIndex((user) => user.id === id);
      if (index !== -1) {
        state.users[index] = { ...state.users[index], ...action.payload };
      } else {
        state.users.push(action.payload);
      }
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    setEditingUser: (state, action) => {
      state.editingUser = action.payload;
    },
    clearEditingUser: (state) => {
      state.editingUser = null;
    },
    updateUser: (state, action) => {
      const { id, name, email, phone } = action.payload;
      const index = state.users.findIndex((user) => user.id === id);
      if (index !== -1) {
        state.users[index] = { ...state.users[index], name, email, phone };
      }
    },
  },
});

export const {
  setUsers,
  addUser,
  deleteUser,
  setEditingUser,
  clearEditingUser,
  updateUser,
} = userSlice.actions;

export default userSlice.reducer;
