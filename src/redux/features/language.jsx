import {  createSlice } from '@reduxjs/toolkit'
import { login, loginUser } from '../actions/authActions';

const initialState = {
  lang: "tr",

  articles: []

}

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLangStatus: (state, action) => {
      state.lang = action.payload;
    },
    setArticles: (state, action) => {
      state.articles = action.payload;
    },
  }

});

export const {setLangStatus,setArticles } = languageSlice.actions

export default languageSlice.reducer;
