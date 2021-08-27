/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	roomName: false,
};

const chatRoomSlice = createSlice({
	name: "roomName",
	initialState,

	reducers: {
		setRoomNameState: (state, action) => {
			state.roomName = action.payload;
		},
	},
});

export const { setRoomNameState } = chatRoomSlice.actions;

export const selectRoomName = (state) => state.roomName.roomName;

export default chatRoomSlice.reducer;
