/** @format */

import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import CloseIcon from "@material-ui/icons/Close";
import FilterNoneIcon from "@material-ui/icons/FilterNone";
import RemoveIcon from "@material-ui/icons/Remove";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import { useDispatch } from "react-redux";
import { setLogOutState } from "../../features/user/userSlice";
import { useRouter } from "next/router";

const Header = () => {
	const [user, loading] = useAuthState(auth);
	const dispatch = useDispatch();
	const router = useRouter();

	const userSignedOutHandler = () => {
		// User is signed out(Remove the user from Firebase)
		if (user) {
			auth
				.signOut()
				.then(() => {
					// Sign-out successful.
				})
				.catch((error) => {
					// An error happened.
				});
			dispatch(setLogOutState());
		}
	};

	const onClickHandler = () => {
		router.push("/");
	};

	return (
		<HeaderContainer>
			<HeaderLeft>
				<HeaderAvatar
					onClick={userSignedOutHandler}
					src={
						user?.photoURL
							? user?.photoURL
							: "https://lh3.googleusercontent.com/a/AATXAJxvNL0mo2ldUytJDKQLwdUu6Qagh5SbgZnChr5S=s96-c"
					}
				/>
				<FiberManualRecordIcon className='absolute-icon' />

				<div>
					<ArrowBackIcon
						className='MuiSvgIcon modify'
						onClick={onClickHandler}
					/>
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
					<HelpOutlineIcon className='left' />
					<FiberManualRecordIcon className='absolute-icon-help' />
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
	z-index: 100;

	@media (max-width: 992px) {
		justify-content: space-between;
	}
`;

const HeaderLeft = styled.div`
	display: flex;
	align-items: center;
	min-width: 1rem;
	flex: 0.3;
	position: relative;
	justify-content: space-between;
	.MuiSvgIcon.modify {
		font-size: 1.2rem;
	}
	.MuiSvgIcon {
		margin: 0 1.8rem;
		cursor: pointer;

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

	.absolute-icon {
		position: absolute;
		color: green;
		left: 22px;
		top: 38px;
		font-size: 1.2rem;
		@media (max-width: 75rem) {
			display: none;
		}
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

	.left {
		position: relative;

		.absolute-icon-help {
			position: absolute;
			color: red;
			top: -7px;
			left: 9px;
			font-size: 14px;
			color: red;
			@media (max-width: 1200px) {
				display: none;
			}
		}
	}

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
			cursor: pointer;
		}
	}
`;
