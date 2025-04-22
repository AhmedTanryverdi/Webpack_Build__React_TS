import { IProductType } from "@/shared/utils/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IProductType = {
	products: [],
};

const cart = createSlice({
	name: "cartSlice",
	initialState,
	reducers: {
		addProduct(state, actions) {
			state.products = [...state.products, actions.payload];
		},
	},
});

export const { addProduct } = cart.actions;

export default cart.reducer;
