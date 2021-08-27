/** @format */

import Head from "next/head";
import { Fragment } from "react";
import ChatPage from "../components/chats/chats";
import { useRouter } from "next/router";

import { getChatsInDB } from "../lib/api-util";
import { useSelector } from "react-redux";
import { selectRoomName } from "../features/chatRoom/chatRoomSlice";

function SingleChatPage(props) {
	const roomName = useSelector(selectRoomName);
	const router = useRouter();
	const { slug } = router.query;

	return (
		<Fragment>
			<Head>
				<title>Chat With #{roomName?.roomName}</title>
			</Head>
			<ChatPage chatsInDb={JSON.parse(props?.chats)} chatRoomId={slug} />
		</Fragment>
	);
}

export async function getServerSideProps(context) {
	const { params } = context;
	const { slug } = params;

	const chatsInDB = await getChatsInDB(slug);

	if (!chatsInDB) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		};
	}

	return {
		props: {
			chats: chatsInDB,
		}, // will be passed to the page component as props
	};
}

export default SingleChatPage;
