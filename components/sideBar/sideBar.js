/** @format */
import styled from "styled-components";
import CreateIcon from "@material-ui/icons/Create";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SideBarOptionTop from "./sideBarOptionTop";
import GitHubIcon from "@material-ui/icons/GitHub";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import CollectionsIcon from "@material-ui/icons/Collections";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import YouTubeIcon from "@material-ui/icons/YouTube";
import SideBarChannelOption from "./sideBarChannelOption";
import ShowRooms from "./showRooms";

const SideBar = (props) => {
	return (
		<SideBarWrapper>
			<SideBarHeader>
				<h1>
					Coding with Saddam <ExpandMoreIcon />
				</h1>
				<div>
					<CreateIcon className='MuiSvgIcon' />
				</div>
			</SideBarHeader>
			{/* Side Option top */}
			<SideBarOptionTop Icon={CollectionsIcon} title='Drafts' number />
			<SideBarOptionTop
				Icon={SupervisedUserCircleIcon}
				title='Mentions & reaction'
			/>
			<SideBarOptionTop Icon={TurnedInIcon} title='Saved items' number />
			<SideBarOptionTop Icon={YouTubeIcon} title='YouTube' />
			<SideBarOptionTop Icon={GitHubIcon} title='GitHub' />

			<SideBarOptionTop Icon={MoreHorizIcon} title='More' />

			<SideBarChannelOption
				title='React Js Room'
				Icon={AddCircleIcon}
				title='Add New Channel'
				addRoom={true}
			/>
			{/* Sidebar Channels */}
			<ShowRooms roomsInDb={props?.roomsInDb} />
		</SideBarWrapper>
	);
};

export default SideBar;

const SideBarWrapper = styled.div`
	flex: 0.3;
	max-width: 19rem;
	min-width: 19rem;
	min-height: 100vh;
	max-height: 100vh;
	overflow-x: hidden !important;
	background-color: var(--slack-color);
	padding: 4.5rem 0;

	@media (max-width: 767px) {
		max-width: 8rem;
		min-width: 8rem;
	}
`;

const SideBarHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: white;
	padding: 1.2rem 1rem;
	cursor: pointer;
	transition: 0.3s;

	@media (max-width: 767px) {
		display: none;
	}

	&:hover {
		background: rgb(55, 0, 56);
		border: 1px solid rgb(55, 0, 56);
	}

	div {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 1.6rem;
		height: 1.6rem;
		background: white;
		border-radius: 50%;
		color: black;

		.MuiSvgIcon {
			color: #333;
			font-size: 1.3rem;
			cursor: pointer;
		}
	}

	h1 {
		font-size: 1.2rem;
		display: flex;
		align-items: center;
		font-weight: bold;
	}
	border: 1px solid rgb(98, 78, 99);
`;
