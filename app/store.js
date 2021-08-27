/** @format */

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import roomNameReducer from "../features/chatRoom/chatRoomSlice";

export const store = configureStore({
	reducer: {
		user: userReducer,
		roomName: roomNameReducer,
	},
});
