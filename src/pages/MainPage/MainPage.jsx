// MainPage.jsx

import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import UpperBanner from '../../components/UpperBanner/UpperBanner';
import LowerBanner from '../../components/LowerBanner/LowerBanner';
import * as s from './MainStyles';
import MainButton from '../../components/MainButton/MainButton';
import BriefReviewBox from '../../components/BriefReviewBox/BriefReviewBox';
import { useNavigate } from 'react-router-dom';
import ImgPopUp from '../../components/ImgPopUp/ImgPopUp';

const MainPage = () => {
	// 팝업창
	const [isOpen, setIsOpen] = useState(false);
	const closePopUp = () => setIsOpen(false);

	// 버튼 클릭시 이동
	const navigate = useNavigate();
	const goToReview = () => {
		navigate('/reviews');
	};
	const goToOrder = () => {
		navigate('/orders');
	};

	return (
		<>
			<Helmet>
				<title>유니스 주막</title>
			</Helmet>
			<s.Container>
				<s.BannerWrapper>
					<UpperBanner />
				</s.BannerWrapper>
				<s.Main>
					<s.Contents className="btn-group">
						<s.Title>환영하오...</s.Title>
						<s.ButtonGroup>
							<MainButton
								title={'예약 주문'}
								desc={'기다리지 말고 픽업하세요!'}
								onClick={goToOrder}
							/>
							<MainButton
								title={'이벤트'}
								desc={'참여만 해도 반값 할인'}
								onClick={() =>
									window.open('https://forms.gle/kTNJw7QeryxZ48Uc9')
								}
							/>
							<MainButton
								title={'오시는 길'}
								desc={'부스 위치 \n안내도'}
								onClick={() => setIsOpen(true)}
							/>
						</s.ButtonGroup>
					</s.Contents>
					<s.Contents className="review">
						<s.Title>벗들의 생생한 후기</s.Title>
						<BriefReviewBox />
						<s.ReviewButton type="button" onClick={() => goToReview()}>
							후기 남기고 기프티콘 받으러 가기
						</s.ReviewButton>
					</s.Contents>
					<s.Contents>
						<s.Title>어젯밤 구해주신 홍보물입니다</s.Title>
					</s.Contents>
				</s.Main>
				<LowerBanner />
				{isOpen && <ImgPopUp onClose={closePopUp} isOpen={isOpen} />}
			</s.Container>
		</>
	);
};

export default MainPage;
