/** @format */

import styled from "styled-components";

const SideBarOptionTop = (props, ref) => {
	const { Icon, number, title } = props;

	const getRandomNumber = () => {
		const rndInt = Math.floor(Math.random() * 10) + 1;
		return rndInt;
	};

	return (
		<SideBarOptionWrapper>
			<div>
				<Icon style={{ paddingRight: "10px", fontSize: "2rem" }} />{" "}
				<span className='hid-m'>{title}</span>
			</div>
			{number && <span className='hid-m'>{getRandomNumber()}</span>}
		</SideBarOptionWrapper>
	);
};

export default SideBarOptionTop;

const SideBarOptionWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.6rem 1.1rem;
	cursor: pointer;
	transition: 0.3s;
	color: white;

	div {
		display: flex;
		align-items: center;
	}
	&:hover {
		background: rgb(55, 0, 56);
	}

	@media (max-width: 568px) {
		background-color: transparent;
	}

	.hid-m {
		@media (max-width: 767px) {
			display: none;
		}
	}
`;
