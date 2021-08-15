/** @format */

import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import FilterNoneIcon from "@material-ui/icons/FilterNone";
import RemoveIcon from "@material-ui/icons/Remove";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const Header = () => {
	return (
		<HeaderContainer>
			<HeaderLeft>
				<HeaderAvatar />
				{/* TODO ADD onclick */}

				<div>
					<ArrowBackIcon className='MuiSvgIcon modify' />
					<ArrowForwardIcon className='MuiSvgIcon modify' />
					<AccessTimeIcon className='MuiSvgIcon' />
				</div>
			</HeaderLeft>

			<HeaderSearch>
				<input type='text' placeholder='Search For React Developers' />
				<SearchIcon />
			</HeaderSearch>
			<HeaderRight>
				<div className='left'>
					<HelpOutlineIcon />
				</div>
				<div className='right'>
					<RemoveIcon className='MuiSvgIcon' />
					<FilterNoneIcon className='MuiSvgIcon' />

					<CloseIcon className='MuiSvgIcon' />
				</div>
			</HeaderRight>
		</HeaderContainer>
	);
};

export default Header;

const HeaderContainer = styled.header`
	position: fixed;
	width: 100%;
	padding: 0.7rem 1.1rem;
	background-color: var(--slack-color);
	display: flex;
	align-items: center;
	color: white;

	@media (max-width: 992px) {
		justify-content: space-between;
	}
`;

const HeaderLeft = styled.div`
	display: flex;
	align-items: center;
	min-width: 1rem;
	flex: 0.3;
	justify-content: space-between;
	.MuiSvgIcon.modify {
		font-size: 1.2rem;
	}
	.MuiSvgIcon {
		margin: 0 1.8rem;

		@media (max-width: 768px) {
			display: none;
		}
	}

	@media (max-width: 992px) {
		flex: 0.4;
	}

	@media (max-width: 568px) {
		display: none;
	}
`;

const HeaderSearch = styled.div`
	flex: 0.4;
	min-width: 20rem;
	display: flex;
	align-items: center;
	opacity: 1;
	border-radius: 6px;
	background: #421f44;
	display: flex;
	border: 1px solid gray;
	padding-right: 1.5rem;
	transition: 0.3s;
	&:hover {
		border: 1px solid #9b419c;
	}

	input {
		flex: 1;
		padding: 0.5rem 1.3rem;
		border: none;
		background: transparent;
		color: white;
	}

	@media (max-width: 767px) {
		flex: 1;
	}
`;

const HeaderAvatar = styled(Avatar)`
	&:hover {
		opacity: 0.8;
	}
	cursor: pointer;
`;

const HeaderRight = styled.div`
	display: flex;
	align-items: center;

	@media (max-width: 992px) {
		display: none;
	}

	flex: 0.3;
	justify-content: space-between;
	div {
		margin-left: 1.5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	div.right {
		padding: 1rem 0;
		display: flex;
		align-items: center;
		min-width: 170px;

		.MuiSvgIcon {
			color: white;
			font-size: 1rem;
		}
	}
`;
