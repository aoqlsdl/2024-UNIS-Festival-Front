import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	min-width: 23.438rem;
	max-width: 49.125rem;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
export const Contents = styled.div`
	height: fit-content;
`;
export const Title = styled.p`
	font-size: 2rem;
	margin: 0;
`;

export const Desc = styled.p`
	font-size: 1.25rem;
	margin: 0;
`;

export const Club = styled.p`
	position: absolute;
	bottom: 3rem;
	font-size: 0.75rem;
	color: #cdcdcd;
`;

export const Countdown = styled.div`
	font-size: 1.25rem;
	margin-top: 0.75rem;
	color: var(--point);
	font-weight: 600;
`;
