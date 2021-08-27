/** @format */

import styled from "styled-components";
import Header from "../header/header";
import SideBar from "../sideBar/sideBar";
import Chat from "./chat";

const ChatPage = (props) => {
	return (
		<ChatPageWrapper>
			<Header />
			<SideBar roomsInDb={props?.roomsInDb} chatRoomId={props?.chatRoomId} />

			<Chat chatsInDb={props?.chatsInDb} chatRoomId={props?.chatRoomId} />
		</ChatPageWrapper>
	);
};

export default ChatPage;

const ChatPageWrapper = styled.div`
	display: flex;
	flex-wrap: nowrap;
	max-height: 100vh;
	width: 100vw;
	overflow: hidden;
`;
