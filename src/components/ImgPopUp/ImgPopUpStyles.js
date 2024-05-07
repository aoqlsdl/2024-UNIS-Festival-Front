import styled from 'styled-components';

export const Background = styled.div`
	position: fixed; // 전체 화면에 걸쳐 고정
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5); // 반투명 배경
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000; // 다른 요소들 위에 위치
`;

export const Img = styled.img`
	width: 70%;
	min-width: 20rem;
	max-width: 49.125rem;
	height: fit-content;
	box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
`;
