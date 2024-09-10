import { configureStore } from '@reduxjs/toolkit'
import  {thunk}  from 'redux-thunk'
import authSlice from '../features/authSlice'
import  languageSlice  from '../features/language'
export const store = configureStore({
  reducer: {
    auth: authSlice,
    language: languageSlice,
  },
  
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})