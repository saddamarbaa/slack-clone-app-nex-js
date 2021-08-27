/** @format */

import Head from "next/head";
import React from "react";
import HomePageComponent from "../components/homePage/homePage";
import getRoomsInDB from "../lib/api-util";

function HomePage(props) {
	return (
		<React.Fragment>
			<Head>
				<title>Slack Clone App</title>
				<meta name='description' content='Next Js Slack Clone next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<HomePageComponent roomsInDb={JSON.parse(props?.rooms)} />
		</React.Fragment>
	);
}

export async function getServerSideProps(context) {
	const roomsInDB = await getRoomsInDB();

	// Pass data to the page via props
	return {
		props: {
			rooms: roomsInDB,
		},
	};
}

export default HomePage;
