import { createSlice } from "@reduxjs/toolkit";

// Get initial theme - default to light, but respect saved preference
const getInitialTheme = () => {
    if (typeof window !== 'undefined') {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            return savedTheme;
        }
    }
    return "light";
};

const initialState = {
    theme: getInitialTheme(),
};

// Set initial theme on load
if (typeof window !== 'undefined') {
    const theme = getInitialTheme();
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            const newTheme = state.theme === "light" ? "dark" : "light";
            state.theme = newTheme;
            localStorage.setItem("theme", newTheme);
            
            if (newTheme === "dark") {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        },
        setTheme: (state, action) => {
            state.theme = action.payload;
            localStorage.setItem("theme", action.payload);
            
            if (action.payload === "dark") {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        },
        loadTheme: (state) => {
            // Load saved theme or default to light
            const savedTheme = localStorage.getItem("theme");
            const theme = savedTheme || "light";
            
            state.theme = theme;
            localStorage.setItem("theme", theme);
            
            if (theme === "dark") {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        },
    },
});

export const { toggleTheme, setTheme, loadTheme } = themeSlice.actions;
export default themeSlice.reducer;

