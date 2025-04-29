import { createSlice } from "@reduxjs/toolkit";

const initialState: {
	currentPage: number;
	quantityProducts: number;
} = {
	currentPage: 0,
	quantityProducts: 9,
};

const paginationSlice = createSlice({
	name: "paginationSlice",
	initialState,
	reducers: {
		setCurrentPage(state, action) {
			state.currentPage = action.payload;
		},
	},
});

export const { setCurrentPage } = paginationSlice.actions;

export default paginationSlice.reducer;
