import { createSlice } from "@reduxjs/toolkit";

const initialState: {
	inputText: string;
} = {
	inputText: "",
};

const searchInputSlice = createSlice({
	name: "searchInputSlice",
	initialState,
	reducers: {
		setInputText(state, actions) {
			state.inputText = actions.payload;
		},
	},
});

export const { setInputText } = searchInputSlice.actions;

export default searchInputSlice.reducer;
