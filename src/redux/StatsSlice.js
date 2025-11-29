// src/redux/StatsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  priceLimits: {
    Apple: { min: 20, max: 50 },
    Banana: { min: 10, max: 40 },
    Carrot: { min: 15, max: 35 },
    Tomato: { min: 12, max: 45 },
    Coriander: { min: 5, max: 20 },
  },

  marketItems: [],
  purchaseHistory: [],
};

const statsSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {
    setPriceLimit: (state, action) => {
      const { product, min, max } = action.payload;
      state.priceLimits[product] = { min, max };
    },

    addFarmerProduct: (state, action) => {
      state.marketItems.push(action.payload);
    },

    recordPurchase: (state, action) => {
      state.purchaseHistory.push(action.payload);
    },
  },
});

export const { setPriceLimit, addFarmerProduct, recordPurchase } =
  statsSlice.actions;

export default statsSlice.reducer;
