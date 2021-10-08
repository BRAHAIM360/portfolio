import { createSlice } from '@reduxjs/toolkit'

var userLang = navigator.language || navigator.userLanguage; 
const initialState = {
 value:userLang
 }


export const langSlic = createSlice({
  name: 'lang',
  initialState,
  
  reducers: {
    changeLang: (state,action) => {
        state.value=action.payload;
      },
  }
})

// Action creators are generated for each case reducer function
export const { changeLang } = langSlic.actions

export default langSlic.reducer;