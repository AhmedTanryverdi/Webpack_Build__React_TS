import { ProductType } from "@/shared/utils/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
	"getProducts/productSlice",
	async (url: string, { rejectWithValue }) => {
		try {
			const response = await fetch(url);

			if (!response.ok) {
				return rejectWithValue(response.status);
			}

			return await response.json();
		} catch (error) {
			return rejectWithValue(500);
		}
	}
);

const initialState: {
	products: ProductType[];
} = {
	products: [],
};

const productSlice = createSlice({
	name: "productSlice",
	initialState,
	reducers: {},

	extraReducers: (builder) => {
		builder.addCase(getProducts.fulfilled, (state, actions) => {
			state.products = actions.payload;
		});
	},
});

export default productSlice.reducer;
