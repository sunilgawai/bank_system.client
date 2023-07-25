import { createSlice } from "@reduxjs/toolkit";

interface IInitState {
  customers: { [key: string]: string }[];
  customer: { [key: string]: string } | null;
}

const initialState: IInitState = {
  customers: [],
  customer: null,
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setCustomers(state, action) {
      state.customers = action.payload;
    },
    setCustomer(state, action) {
      state.customer = action.payload;
    },
    getCustomer(state, action) {
      console.log(action.payload)
      const customerId = action.payload;
      state.customer = state.customers.find((c) => c.id === customerId) || null;
    },
  },
});

export const { setCustomers, setCustomer, getCustomer } = customerSlice.actions;
export default customerSlice.reducer;
