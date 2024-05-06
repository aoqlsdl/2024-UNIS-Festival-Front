import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 13rem;
	height: fit-content;
	display: flex;
	flex-direction: row;
`;

export const Timebox = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const TimeLabel = styled.label`
	width: 100%;
	height: 1.13rem;
	display: flex;
	flex-direction: row;
	margin-bottom: 1rem;
	line-height: 1.13rem;
	align-items: center;

	& > span {
		font-size: 0.68rem;
		color: #ff0000;
		margin-left: 0.5rem;
	}
`;

export const TimeInput = styled.input`
	margin-right: 0.88rem;
	accent-color: var(--light-point);
`;

export const CustomerInfo = styled.div``;
