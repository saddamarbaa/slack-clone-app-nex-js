/** @format */

import Head from "next/head";
import Header from "../components/header";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Slack Clone App</title>
				<meta name='description' content='Next Js Slack Clone next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />
		</div>
	);
}
