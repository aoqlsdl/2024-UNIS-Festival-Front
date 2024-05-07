import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	min-width: 23.438rem;
	max-width: 49.125rem;
	height: fit-content;
	cursor: default;
`;

export const Content = styled.div`
	width: calc(100vw - 1.88rem);
	margin: 1.13rem auto 0;

	&.pickup {
		margin: 2.06rem auto 0;
	}
`;

export const Manual = styled.div`
	text-align: left;
	width: 100vw;
	min-width: 23.438rem;
	max-width: 49.125rem;
	height: 17.94rem;
	margin-left: -1.13rem;
	background-image: url('/imgs/order_info_bg.webp');
	background-size: 100vw auto;
	background-repeat: no-repeat;
	background-position: center bottom;
`;

export const ManualContent = styled.div`
	margin: 0 0 0.88rem 0.94rem;
`;

export const ManualTitle = styled.div`
	font-size: 1.5rem;
	height: 1.56rem;
	margin: 0;
	&.warning {
		margin: 0 0 1rem 0.94rem;
		font-size: 1rem;
		height: 1.25rem;
	}
`;

export const UnderlinedText = styled.span`
	border-bottom: 1px solid #000;
`;

export const ManualDesc = styled.div`
	font-size: 1rem;
	margin: 0.38rem 0 0;
	height: 1.25rem;
`;

export const Title = styled.div`
	font-size: 1.25rem;
	text-align: left;
	margin-bottom: 0.63rem;
`;

export const Order = styled.button`
	-webkit-appearance = none;
	width: 93%;
	min-width: 21.88rem;
	height: 2.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	background-color: var(--point);
	border: none;
	border-radius: 5px;
	font-family: 'ChosunCentennial';
	font-size: 1.25rem;
	color: #fff;
	cursor: pointer;
`;

export const ReservationBox = styled.div`
	width: 100%;
	height: 13.31rem;
	margin: 0 auto;
	display: flex;
	align-items: center;
	border-radius: 10px;
	box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
`;

export const Reservations = styled.div`
	width: calc(100% - 1.31rem);
	height: 11.25rem;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	overflow-y: scroll;

	&::-webkit-scrollbar {
		width: 0.25rem;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-color: #a6a6a6;
		opacity: 0.7;
	}
	&::-webkit-scrollbar-track {
		width: 4px;
	}
`;

export const Reservation = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	font-size: 1.25rem;
`;

export const Date = styled.div``;

export const Customer = styled.div`
	margin-right: 0.88rem;
	font-size: 0.94rem;
	color: var(--point);
`;
