/** @format */

import { useEffect, useState } from "react";
import db from "../../config/firebase";
import SideBarChannelOption from "./sideBarChannelOption";
import FlipMove from "react-flip-move";

const ShowRooms = (props) => {
	const [roomsInDb, setRoomsInDb] = useState(props?.roomsInDb);

	useEffect(() => {
		const unsubscribe = db
			?.collection("rooms")
			?.orderBy("timestamp", "desc")
			?.limit(50)
			?.onSnapshot((snapshot) => {
				setRoomsInDb(
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
	}, []);

	return (
		<>
			<FlipMove>
				{roomsInDb?.map((doc, index) => (
					<SideBarChannelOption
						key={doc?.id}
						roomId={doc?.id}
						title={doc?.name}
						date={doc?.timestamp}
						number={
							index === 1 ||
							index === 4 ||
							index === 7 ||
							index === 10 ||
							index === 15
								? "number"
								: ""
						}
					/>
				))}
			</FlipMove>
		</>
	);
};

export default ShowRooms;
