import { createSlice } from "@reduxjs/toolkit";

const initialState: {
	currentPage: number;
} = {
	currentPage: 0,
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
