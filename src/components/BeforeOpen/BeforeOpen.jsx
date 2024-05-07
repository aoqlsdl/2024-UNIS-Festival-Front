import { useState, useEffect } from 'react';
import * as s from './BeforeOpen.styles';

const BeforeOpen = () => {
	const [timeLeft, setTimeLeft] = useState(null);

	useEffect(() => {
		// 목표 시간 설정
		const targetDate = new Date(new Date().getFullYear(), 4, 8); // 5월 8일 (월은 0부터 시작하므로 4)

		// 1초마다 남은 시간 갱신
		const interval = setInterval(() => {
			const now = new Date();
			const difference = targetDate - now;

			if (difference <= 0) {
				clearInterval(interval);
				setTimeLeft('00:00:00:00');
			} else {
				const hours = Math.floor(
					(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
				);
				const minutes = Math.floor(
					(difference % (1000 * 60 * 60)) / (1000 * 60)
				);
				const seconds = Math.floor((difference % (1000 * 60)) / 1000);

				setTimeLeft(`${hours}시간 ${minutes}분 ${seconds}초 후부터`);
			}
		}, 1000);

		// 컴포넌트 언마운트 시 인터벌 정리
		return () => clearInterval(interval);
	}, []);
	return (
		<>
			<s.Container>
				<s.Title>5월 8일 오픈합니다.</s.Title>
				<s.Countdown>{timeLeft}</s.Countdown>
				<s.Desc>픽업 주문 및 이벤트 참여 가능</s.Desc>
				<s.Club>이화여자대학교 중앙실전창업학회 UNIS</s.Club>
			</s.Container>
		</>
	);
};

export default BeforeOpen;
