import { createSlice } from "@reduxjs/toolkit";

const loadTokenFromLocalStorage = () => {
  try {
    const token = localStorage.getItem("token");
    return token ? JSON.parse(token) : null;
  } catch (error) {
    console.error("Error loading token from localStorage:", error);
    return null;
  }
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: loadTokenFromLocalStorage(),
    isAuthenticated: Boolean(loadTokenFromLocalStorage()),
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
      // Simpan token di localStorage
      localStorage.setItem("token", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.user = null;
      // Hapus token dari localStorage saat logout
      localStorage.removeItem("token");
    },
  },
});

export const { login, logout } = authSlice.actions;

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
