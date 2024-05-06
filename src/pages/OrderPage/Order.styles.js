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
	margin-right: 0.88rem;
	margin-bottom: 1rem;
	accent-color: var(--light-point);
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
		width: 1.5rem;
	}

	&.time {
		width: 5.63rem;
		margin-left: 0.19rem;
	}

	&:focus {
		outline: none;
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

export const CustomerInfo = styled.div`
	text-align: left;
`;

export const InfoBox = styled.div`
	width: 21.56rem;
`;

export const InfoTitle = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 0.31rem;
	align-items: center;

	& > span {
		font-size: 0.63rem;
		color: #ff0000;
		margin-left: 0.44rem;
	}
`;

export const InfoInput = styled.input`
	width: 100%;
	height: 2.06rem;
	margin-bottom: 1.19rem;
	border: none;
	border-radius: 5px;
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
`;

export const Warning = styled.div`
	font-size: 0.94rem;
	color: #a6a6a6;
`;

export const Account = styled.p`
	margin: 0.5rem 0 1.25rem;
	color: #0038ff;
`;

export const Order = styled.button`
	-webkit-appearance: none;
	width: 21.56rem;
	height: 2.88rem;
	border: none;
	border-radius: 5px;
	background-color: var(--point);
	font-size: 1.25rem;
	font-family: 'ChosunCentennial';
	color: #fff;
`;
