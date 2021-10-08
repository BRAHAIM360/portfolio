import { configureStore } from '@reduxjs/toolkit'
import langSlice from './features/langSlice'



export const store = configureStore({
  reducer: {
  lang: langSlice,
  },
})