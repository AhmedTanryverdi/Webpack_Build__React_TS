import productSlice from "@/entities/model/slices/products/products";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: {
        products: productSlice
    },
});
