import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	min-width: 23.438rem;
	max-width: 49.125rem;
	height: fit-content;
`;

export const Content = styled.div`
	width: calc(100vw - 1.88rem);
	margin: 1.13rem auto 0;

	&.pickup {
		margin: 2.06rem auto 0;
	}
`;
export const Title = styled.div`
	font-size: 1.25rem;
	text-align: left;
	margin-bottom: 0.63rem;
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
`;

export const Reservation = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export const Date = styled.div``;

export const Customer = styled.div`
	margin-right: 0.88rem;
`;
