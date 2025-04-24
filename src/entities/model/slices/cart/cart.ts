import { CartProductType } from "@/shared/utils/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: {
	products: CartProductType[];
} = {
	products: [],
};

const cart = createSlice({
	name: "cartSlice",
	initialState,
	reducers: {
		addProduct(state, actions) {
			const temp = state.products.filter(
				(item) => item.product.id !== actions.payload.product.id
			);

			state.products = [...temp, actions.payload];
		},
		deleteProduct(state, actions) {
			state.products = state.products.filter(
				(item) => item.product.id !== actions.payload
			);
		},

		clear(state) {
			state.products = [];
		},
	},
});

export const { addProduct, deleteProduct, clear } = cart.actions;

export default cart.reducer;
