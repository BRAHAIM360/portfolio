import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 value:
  [
        {
          id: 1,
          img: "https://www.seekpng.com/png/detail/20-201847_mens-fashion-png-clipart-person-on-transparent-background.png",
          title: "SUMMER SALE",
          desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
          bg: "f5fafd",
        },
        {
          id: 2,
          img: "https://i.ibb.co/DG69bQ4/2.png",
          title: "AUTUMN COLLECTION",
          desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
          bg: "fcf1ed",
        },
        {
          id: 3,
          img: "https://i.ibb.co/cXFnLLV/3.png",
          title: "LOUNGEWEAR LOVE",
          desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
          bg: "fbf0f4",
        },
        {
          id: 4,
          img: "https://www.kindpng.com/picc/m/161-1617417_gents-pent-shirt-png-transparent-png.png",
          title: "LOUNGEWEAR LOVE",
          desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
          bg: "fbf0f4",
        },
      ]
 }


export const sliderItemsSlice = createSlice({
  name: 'sliderItems',
  initialState,
  
  reducers: {
    addSliderItems: (state,{payload}) => {
    state.sliderItems=payload
    },
    deleteSliderItems: (state, {payload}) => {
      state.sliderItems = state.sliderItems.filter(c=>c.id !== payload) 
    },
  },
})

// Action creators are generated for each case reducer function
export const { addSliderItems, deleteSliderItems } = sliderItemsSlice.actions

export default sliderItemsSlice.reducer;