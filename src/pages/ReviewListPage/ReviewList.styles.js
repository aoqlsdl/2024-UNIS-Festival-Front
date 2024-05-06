import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	min-width: 23.438rem;
	max-width: 49.125rem;
`;

export const Guide = styled.div`
	width: 100%;
	height: 14.06rem;
	position: relative;
	background-image: url('/imgs/order_info_bg.webp');
	background-size: 100vw auto;
	background-repeat: no-repeat;
	background-position: center bottom;
	margin-bottom: 3.88rem;
`;

export const GuideContent = styled.div`
	position: relative;
	height: 100%;
`;

export const PineTree = styled.img`
	width: 13.38rem;
	height: 10.13rem;
	position: absolute;
	left: 0;
	top: 1rem;
`;

export const GuideText = styled.p`
	text-align: right;
	margin: 0 1rem 0.19rem 0;
	font-size: 1rem;

	&.big {
		font-size: 1.25rem;
		margin-top: 1.94rem;
	}

	&.small {
		font-size: 0.69rem;
		position: absolute;
		right: 0;
		bottom: -3.15rem;
	}
`;

export const Gifts = styled.img`
	width: 10.81rem;
	height: 6.25rem;
	position: absolute;
	right: 0;
	bottom: 0;
`;

export const Title = styled.p`
	text-align: left;
	font-size: 1.25rem;
	margin: 0 0 1.25rem 0.94rem;
`;

export const Button = styled.button`
	-webkit-appearance: none;
	width: 21.56rem;
	height: 2.5rem;
	margin: 0 auto 2.13rem;
	border: none;
	border-radius: 5px;
	background-color: var(--point);
	font-family: 'ChosunCentennial';
	font-size: 1rem;
	color: #fff;

	&:focus {
		outline: none;
	}
`;

export const ReviewBox = styled.div``;
