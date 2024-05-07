import styled from 'styled-components';

export const Contents = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 0 auto;
	width: calc(100vw - 0.94rem);
	min-width: 23.438rem;
	max-width: 49.125rem;
	height: fit-content;

	&.review {
		flex-direction: column;
		text-align: left;
	}
`;

export const Title = styled.div`
	margin-left: 0.94rem;
	font-size: 1.25rem;
`;

export const ReviewButton = styled.button`
	-webkit-appearance: none;
	width: 21.56rem;
	height: 2.5rem;
	border: none;
	border-radius: 5px;
	background-color: var(--point);
	font-family: 'ChosunCentennial';
	font-size: 1rem;
	color: #fff;
	margin: 0.63rem auto 1.06rem;
`;
