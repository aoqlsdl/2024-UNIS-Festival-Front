import styled from 'styled-components';

export const Container = styled.div`
	width: 21.56rem;
	height: fit-content;
	margin: 0 auto;
`;

export const TimeBox = styled.div`
	display: flex;
	flex-direction: column;
	border-bottom: 1px solid var(--light-gray);
`;

export const TimeslotBox = styled.div`
	display: flex;
	flex-direction: column;
	width: 8.06rem;
	text-align: left;
	align-items: initial;
`;

export const BoxTitle = styled.div`
	margin: 0.88rem 0 0.63rem;
`;

export const DayLabel = styled.label``;

export const DayInput = styled.input`
	margin-bottom: 1rem;
`;

export const SelectedInputBox = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: left;
	align-items: center;
	font-family: 'ChosunCentennial';
	font-size: 1.25rem;
`;

export const SelectBox = styled.div`
	display: flex;
	flex-direction: row;
`;

export const SelectedInput = styled.input`
	-webkit-appearance: none;
	height: 1.31rem;
	border: none;
	border-bottom: 1px solid #000;
	font-family: 'ChosunCentennial';
	font-size: 1.25rem;

	&.date {
		width: 0.88rem;
	}

	&.time {
		width: 5.63rem;
		margin-left: 0.19rem;
	}
`;

export const MenuBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: left;
	text-align: left;
`;

export const MenuTitle = styled.div`
	margin: 1.38rem 0 1.06rem;
	font-size: 1.25rem;
`;

export const CustomerInfo = styled.div``;
