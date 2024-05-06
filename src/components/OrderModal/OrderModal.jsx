import { useEffect } from 'react';
import * as s from './OrderModal.styles';

const OrderModal = ({ isOpen, onClose, onSubmit }) => {
	// 모달 상태가 변경될 때마다 실행되는 useEffect
	useEffect(() => {
		const originalStyle = window.getComputedStyle(document.body).overflow;
		if (isOpen) {
			document.body.style.overflow = 'hidden'; // 모달이 열리면 스크롤 방지
		} else {
			document.body.style.overflow = originalStyle; // 모달이 닫히면 스크롤 재개
		}

		return () => {
			document.body.style.overflow = originalStyle;
		};
	}, [isOpen]);

	if (!isOpen) return null;
	return (
		<>
			<s.Background onClick={onClose}>
				<s.Wrapper>
					<s.Content>
						<s.Title>## 주의사항 ##</s.Title>
						<s.Account>기업 119-236332-02-010 노*경</s.Account>
						<s.Text>
							위 계좌로 금액을 입금하셔야
							<br />
							예약이 완료됩니다.
						</s.Text>
						<s.Button type="submit" onClick={onSubmit}>
							픽업주문하기
						</s.Button>
					</s.Content>
				</s.Wrapper>
			</s.Background>
		</>
	);
};

export default OrderModal;
