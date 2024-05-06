import { useEffect } from 'react';
import * as s from './ReviewModal.styles';

const ReviewModal = ({ isOpen, onClose, onSubmit }) => {
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
					<s.Text>리뷰를 작성하시겠습니까?</s.Text>
					<s.Button type="submit" onClick={onSubmit}>
						리뷰작성하기
					</s.Button>
				</s.Wrapper>
			</s.Background>
		</>
	);
};

export default ReviewModal;
