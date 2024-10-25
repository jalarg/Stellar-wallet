import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  theme: "light" | "dark";
}

const initialState: ThemeState = {
  theme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      state.theme = newTheme;
      document.documentElement.classList.toggle("dark", newTheme === "dark");
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
      document.documentElement.classList.toggle(
        "dark",
        action.payload === "dark"
      );
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
