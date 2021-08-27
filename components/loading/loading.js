/** @format */

import React from "react";
import { Circle } from "better-react-spinkit";
import Image from "next/image";

const Loading = () => {
	return (
		<div
			style={{
				background: "#f8f8f8",
				width: "100vw",
				height: "100vh",
				display: "grid",
				placeItems: "center",
			}}>
			<div
				style={{
					padding: "100px",
					paddingTop: "50px",
					textAlign: "center",
					background: "white",
					borderRadius: "6px",
					boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
					display: "grid",
					placeItems: "center",
				}}>
				<div
					className='logo'
					style={{
						position: "relative",
						cursor: "pointer",
						marginBottom: "3rem",
						width: "8rem",
						height: "8rem",
						display: "block",
					}}>
					<Image
						className='logo-img'
						src='/images/slack.png'
						alt='Picture of slack'
						layout='fill'
						objectFit='contain'
					/>
				</div>

				<div>
					<Circle color='#3f0f40' size={65} />
				</div>
			</div>
		</div>
	);
};

export default Loading;
