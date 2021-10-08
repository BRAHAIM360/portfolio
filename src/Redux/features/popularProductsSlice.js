import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 value:
 [
    {
      id: 93813718293,
      productName:"HAKURA T-SHIRT",
      img:"https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
      color:"gray",
      size:"37.5",
      price:"30",
    },
    {
      
      id: 93313718293,
      productName:"BOYKA T-SHIRT",
      img:"https://cdn.shopify.com/s/files/1/0101/4832/products/Angela_Natural_Tee.png?v=1606780388",
      color:"gray",
      size:"37.5",
      price:"30",
    },
    {
      id: 93843718293,
      productName:"SUMMER JACKET",
      img:"https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
      color:"blue",
      size:"37.5",
      price:"30",
    },
    {
      id: 93815718293,
      productName:"SUMMER SKIRT",
      img:"https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png",
      color:"blue",
      size:"37.5",
      price:"30",
      },
    {
      id: 93816718293,
      productName:"SUMMER BAG",
      img:"https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
      color:"yellow",
      size:"37.5",
      price:"30",
    },
    {
      id: 93813788293,
      productName:"JESSIE THUNDER SHOES",
      img:"https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
      color:"red",
      size:"37.5",
      price:"30",},
    {
      id: 93883718293,
      productName:"JESSIE THUNDER SHOES",
      img:"https://www.vintageindustries.nl/download_front/qympzk1762/2217_Arrow_Jacket_Forest.png",
      color:"gray",
      size:"37.5",
      price:"30",},
    {
      id: 98813718293,
      productName:"JESSIE THUNDER SHOES",
      img:"https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
      color:"gray",
      size:"37.5",
      price:"30",},
  ]
 }


export const popularProducts = createSlice({
  name: 'popularProducts',
  initialState,
  
  reducers: {
   
  },
})

// Action creators are generated for each case reducer function
// export const { addSliderItems, deleteSliderItems } = popularProducts.actions

export default popularProducts.reducer;