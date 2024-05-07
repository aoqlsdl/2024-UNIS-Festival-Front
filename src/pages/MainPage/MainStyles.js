import styled from 'styled-components';

export const Container = styled.div`
	display: inline-block;
	flex-direction: column;
`;
export const BannerWrapper = styled.div`
	width: 100vw;
	min-width: 23.438rem;
	max-width: 49.125rem;
	height: fit-content;
	position: relative;
`;
export const Main = styled.div`
	width: calc(100vw - 0.94rem);
	display: flex;
	flex-direction: column;
	position: relative;
	margin: 0 auto;
`;
export const Contents = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 1.81rem auto 0;
	width: calc(100vw - 0.94rem);
	min-width: 10.438rem;
	max-width: 49.125rem;
	height: fit-content;

	&.review,
	&.btn-group {
		flex-direction: column;
		text-align: left;
	}
`;

export const Title = styled.div`
	width: 21.56rem;
	margin: 0 auto 0.63rem;
	font-size: 1.25rem;
	text-align: left;
	position: relative;
`;

export const ButtonGroup = styled.div`
	width: 21.56rem;
	margin: 0 auto;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
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
