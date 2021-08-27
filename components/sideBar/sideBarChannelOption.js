/** @format */

import styled from "styled-components";
import firebase from "firebase";
import db from "../../config/firebase";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setRoomNameState } from "../../features/chatRoom/chatRoomSlice";
import { truncate } from "../../lib/api-util";
import { getRandomNumber } from "../../lib/api-util";
import React from "react";

const SideBarChannelOption = React.forwardRef((props, ref) => {
	const dispatch = useDispatch();
	const { addRoom, Icon, number, title, roomId, date } = props;
	const router = useRouter();

	const showRoomMessagesHandler = () => {
		dispatch(
			setRoomNameState({
				roomName: title,
				roomId: roomId,
			}),
		);
		router.push(`/${roomId}`);
	};

	const addNewChannelHandler = () => {
		let roomName;
		roomName = prompt("Enter room name");
		if (!roomName || roomName.trim() === "") {
			roomName = prompt("Please enter valid room name");
			return;
		} else {
			db?.collection("rooms")
				?.add({
					name: roomName,
					timestamp: firebase.firestore.FieldValue.serverTimestamp(),
				})
				.then((docRef) => {
					console.log("Document written with ID: ", docRef.id);
				})
				.catch((error) => {
					console.error("Error adding document: ", error);
				});
		}
	};

	return (
		<SideBarOptionWrapper
			onClick={Icon ? addNewChannelHandler : showRoomMessagesHandler}>
			<div>
				{Icon && (
					<Icon style={{ paddingRight: "10px", fontSize: "2rem" }} />
				)}
				{!Icon && (
					<span
						style={{ paddingRight: "10px", fontSize: "1.2rem" }}
						className='hid-m'>
						#
					</span>
				)}
				<span className={Icon ? "hid-m" : ""}> {truncate(title, 20)}</span>
			</div>
			{number && <span className='hid-m'>{getRandomNumber()}</span>}
		</SideBarOptionWrapper>
	);
});

// To fix error(Component definition is missing display/name-react)
SideBarChannelOption.displayName = "SideBarChannelOption";

export default SideBarChannelOption;

const SideBarOptionWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.6rem 1.1rem;
	cursor: pointer;
	transition: 0.3s;
	color: white;
	div {
		display: flex;
		align-items: center;
	}
	&:hover {
		background: rgb(55, 0, 56);
	}
	@media (max-width: 568px) {
		background-color: transparent;
	}
	.hid-m {
		@media (max-width: 767px) {
			display: none;
		}
	}
`;
