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

  // AUTH + MANAGEMENT
  farmers: [
    {
      id: 1,
      name: "Ravi Kumar",
      email: "ravi@farm.com",
      password: "1234",
      location: "AP",
    },
    {
      id: 2,
      name: "Asha Patel",
      email: "asha@farm.com",
      password: "1234",
      location: "GJ",
    },
  ],

  buyers: [
    {
      id: 1,
      name: "John Doe",
      email: "john@buyer.com",
      password: "1234",
      location: "KA",
    },
  ],

  feedback: [],
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

    addFarmer: (state, action) => {
      state.farmers.push(action.payload);
    },
    removeFarmer: (state, action) => {
      const id = action.payload;
      state.farmers = state.farmers.filter((f) => f.id !== id);
    },

    addBuyer: (state, action) => {
      state.buyers.push(action.payload);
    },
    removeBuyer: (state, action) => {
      const id = action.payload;
      state.buyers = state.buyers.filter((b) => b.id !== id);
    },

    addFeedback: (state, action) => {
      state.feedback.push(action.payload);
    },
  },
});

export const {
  setPriceLimit,
  addFarmerProduct,
  recordPurchase,
  addFarmer,
  removeFarmer,
  addBuyer,
  removeBuyer,
  addFeedback,
} = statsSlice.actions;

export default statsSlice.reducer;
