import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	min-width: 23.438rem;
	max-width: 49.125rem;
	height: fit-content;
	display: flex; // 이미지들을 가로로 배열
	overflow: hidden; // 슬라이드 외의 이미지 숨김
`;

export const Img = styled.img`
	flex: 0 0 100%; // 각 이미지가 컨테이너의 100% 너비를 차지
	min-width: 23.438rem;
	height: fit-content;
	transition: transform 0.5s ease-in-out; // 부드러운 트랜지션 효과
	margin: 0 auto;
`;
