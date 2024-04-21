// src/features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

// localStorage'dan başlangıç durumunu yükleme
const loadInitialState = () => {
    const savedState = localStorage.getItem('authState');
    if (savedState) {
        return JSON.parse(savedState);
    }
    return {
        user: null,
        isLoggedIn: false
    };
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: loadInitialState(),
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.user = null;
            state.isLoggedIn = false;
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
