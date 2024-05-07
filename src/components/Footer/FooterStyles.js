import styled from 'styled-components';

// Footer 전체 컨테이너
export const FooterContainer = styled.footer`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	font-family: 'AppleSDGothicNeoM';
`;

export const Top = styled.div`
	display: flex;
	flex-direction: column;
	width: 95%;
	min-width: 21.56rem;
	max-width: 49.125rem;
	height: 6.69rem;
	border-top: 1px solid #a6a6a6;
	border-bottom: 1px solid #a6a6a6;
	margin: 1.25rem auto 0;
`;

export const Title = styled.p`
	margin-top: 0.25rem;
	margin-bottom: 0.31rem;
	text-align: left;
	line-height: 1rem;
	height: 1rem;
	font-family: 'AppleSDGothicNeoR00', 'AppleSDGothicNeoM';
`;

export const LinkBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-bottom: 0.69rem;
`;

export const Icon = styled.img`
	margin-right: 0.2rem;
	width: 1.19rem;
	height: 1.19rem;

	&.kakao {
		width: 1.25rem;
	}
`;

export const Route = styled.div`
	display: flex;
	flex-direction: row;
`;

export const Link = styled.a`
	height: 1.19rem;
	font-size: 0.75rem;
	color: #000;
	text-decoration: none;
`;

export const Down = styled.div`
	display: f flex;
	flex-direction: row;
`;

export const Copyright = styled.p`
	margin: 1rem auto;
	font-size: 0.75rem;
`;
