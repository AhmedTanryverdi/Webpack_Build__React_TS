import productSlice from "@/entities/model/slices/products/products";
import cartSlice from "@/entities/model/slices/cart/cart";
import paginationSlice from "@/entities/model/slices/pagination/pagination";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: {
		products: productSlice,
		cart: cartSlice,
		pagination: paginationSlice,
	},
});
