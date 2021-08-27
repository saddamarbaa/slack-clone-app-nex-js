/** @format */
import styled from "styled-components";
import firebase from "firebase";
import SendIcon from "@material-ui/icons/Send";
import AttachmentIcon from "@material-ui/icons/Attachment";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import FontDownloadIcon from "@material-ui/icons/FontDownload";
import db, { auth } from "../../config/firebase";
import { useEffect, useState, useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import ShowMessages from "./showMessages";
import { useSelector } from "react-redux";
import { selectRoomName } from "../../features/chatRoom/chatRoomSlice";
import { truncate } from "../../lib/api-util";
import FlipMove from "react-flip-move";

const Chat = (props) => {
	const [chatInDB, setChatInDB] = useState(props?.chatsInDb);
	const roomName = useSelector(selectRoomName);
	const messageRef = useRef(null);
	const autoScrollToBottomRef = useRef(null);
	const [user, loading] = useAuthState(auth);

	useEffect(() => {
		if (!props?.chatRoomId) {
			return;
		}

		const unsubscribe = db
			?.collection("rooms")
			?.doc(props?.chatRoomId)
			?.collection("chats")
			?.orderBy("timestamp", "asc")
			?.limit(50)
			?.onSnapshot((snapshot) => {
				setChatInDB(
					snapshot?.docs?.map((doc) => {
						return {
							id: doc.id,
							...doc.data(),
							timestamp: doc?.data()?.timestamp?.toDate()?.getTime(),
						};
					}),
				);
			});

		return () => {
			unsubscribe();
		};
	}, [props?.chatRoomId]);

	// Auto Scroll functionality
	useEffect(() => {
		// Auto Scroll functionality
		autoScrollToBottomRef?.current?.scrollIntoView({
			behavior: "smooth",
		});
	}, [loading, props?.messageId]);

	const sendMessageHandler = (event) => {
		event.preventDefault();
		if (props?.chatRoomId) {
			db?.collection("rooms")
				?.doc(props?.chatRoomId)
				?.collection("chats")
				?.add({
					message: messageRef?.current?.value,
					name: user?.displayName ? user?.displayName : "Unknown user",
					timestamp: firebase.firestore.FieldValue.serverTimestamp(),
					photoURL: user?.photoURL ? user?.photoURL : "/images/slack.png",
				})
				.then((docRef) => {
					console.log("Document written with ID: ", docRef.id);
				})
				.catch((error) => {
					console.error("Error adding document: ", error);
				});

			// Auto Scroll functionality
			autoScrollToBottomRef?.current?.scrollIntoView({
				behavior: "smooth",
			});

			messageRef.current.value = "";
		} else {
			return;
		}
	};

	return (
		<ChatWrapper>
			<ChatBody>
				{/* Loop through all the messages  */}
				<FlipMove>
					{chatInDB?.map((doc, index) => (
						<ShowMessages
							key={doc?.id}
							message={doc?.message}
							name={doc?.name}
							photoURL={doc?.photoURL}
							date={doc?.timestamp}
						/>
					))}
				</FlipMove>

				{/* Empty div for auto scroll */}
				<div
					ref={autoScrollToBottomRef}
					style={{ paddingBottom: "50px" }}
					className='auto-scroll'></div>
			</ChatBody>

			<ChatFooter>
				<form onSubmit={sendMessageHandler}>
					<label htmlFor='message'></label>
					{!roomName?.roomName && (
						<input
							type='text'
							id='message'
							required
							ref={messageRef}
							placeholder={`Select room to start chat`}
							disabled={!props?.chatRoomId}
						/>
					)}

					{roomName?.roomName && (
						<input
							type='text'
							id='message'
							required
							ref={messageRef}
							placeholder={`Message with #${truncate(
								roomName?.roomName,
								10,
							)}`}
							disabled={!props?.chatRoomId}
						/>
					)}

					<FontDownloadIcon className='icon hids' />
					<SettingsApplicationsIcon className='icon hids' />
					<AttachmentIcon className='icon hids' />
					<SentimentDissatisfiedIcon className='icon hids' />
					<SendIcon className='icon  hidm' />
				</form>
			</ChatFooter>
		</ChatWrapper>
	);
};

export default Chat;

const ChatWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	padding-top: 4.5rem;
`;

const ChatBody = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	padding: 30px;
	overflow-y: auto !important;
	padding-bottom: 7rem;
`;

const ChatFooter = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	width: 100%;
	form {
		flex-grow: 1;
		display: flex;
		color: gray;
		border-radius: 5px;
		align-items: center;
		padding: 10px 8px;
		padding-right: 10px;
		cursor: pointer;
		transition: 0.3s;
		cursor: pointer;
		border: 1px solid rgba(220, 227, 232);
		background-color: rgba(220, 227, 232);
		box-shadow: 0 1px 0 rgb(255 255 255 / 50%), 0 1px 0 rgb(0 0 0 / 7%) inset;

		@media (max-width: 768px) {
			max-width: 90%;
		}

		&:hover,
		&:focus {
			border: 1px solid #e0d4fd;
			background-color: #e0d4fd;
			box-shadow: 0 1px 0 #e0d4fd, 0 1px 0 rgb(0 0 0 / 7%) inset;
		}

		input {
			flex: 1;
			padding: 4px;
			padding-left: 8px;
			padding-right: 5px;
			border: none;
			flex: 1;
			outline: none;
			background: transparent;
			font-size: 0.9rem;
		}
	}

	.icon {
		color: var(--color-primary);
		margin-left: 1rem;
		font-size: 1.3rem;
		cursor: pointer;
	}

	.icon.hids {
		@media (max-width: 768px) {
			display: none;
		}
	}

	.hidm {
		@media (max-width: 768px) {
			display: none;
		}
	}
`;

// empty div for auto scroll
const ChatBottom = styled.div`
	padding-bottom: 300px;
`;
