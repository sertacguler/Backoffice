// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import localStorageMiddleware from '../config/localStorageMiddleware';

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(localStorageMiddleware),
});
