/** @format */

import styled from "styled-components";
import Chat from "../chats/chat";
import Header from "../header/header";
import SideBar from "../sideBar/sideBar";

const HomePageComponent = (props) => {
	return (
		<HomePageComponentWrapper>
			<Header />
			<SideBar roomsInDb={props?.roomsInDb} />
			<Chat />
		</HomePageComponentWrapper>
	);
};

export default HomePageComponent;

const HomePageComponentWrapper = styled.div`
	display: flex;
	flex-wrap: nowrap;
	max-height: 100vh;
	width: 100vw;
	overflow: hidden;
`;
