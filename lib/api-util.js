/** @format */
import db from "../config/firebase";

export default async function getRoomsInDB() {
	// PREPARE users
	const roomsRef = await db
		?.collection("rooms")
		?.orderBy("timestamp", "asc")
		?.limit(100)
		?.get();

	const roomsInDB = await roomsRef?.docs?.map((doc) => ({
		id: doc.id,
		...doc.data(),
		timestamp: doc?.data()?.timestamp?.toDate()?.getTime(),
	}));

	return JSON.stringify(roomsInDB);
}

export async function getChatsInDB(slug) {
	// PREPARE chats
	if (slug) {
		const chatsRef = await db
			.collection("rooms")
			?.doc(slug)
			?.collection("chats")
			?.orderBy("timestamp", "asc")
			?.limit(100)
			?.get();

		const chatsInDB = await chatsRef?.docs?.map((doc) => ({
			id: doc.id,
			...doc.data(),
			timestamp: doc?.data()?.timestamp?.toDate()?.getTime(),
		}));

		return JSON.stringify(chatsInDB);
	} else {
		return [];
	}
}

//  function to truncate(cut) the string if the length of given string
//   bigger than  given number(n)
export function truncate(string, n) {
	return string?.length > n ? string.substr(0, n - 1) + "...." : string;
}

export function getRandomNumber() {
	const rndInt = Math.floor(Math.random() * 10) + 1;
	return rndInt;
}
