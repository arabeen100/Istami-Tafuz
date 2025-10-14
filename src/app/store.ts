import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../features/api/apiSlice'
import rewayaReducer from "../features/rewayat/rewaya"
export const store = configureStore({
    reducer:{
          [apiSlice.reducerPath]: apiSlice.reducer,
          rewaya:rewayaReducer,

    },
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch