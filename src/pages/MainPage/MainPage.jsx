// MainPage.jsx

import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import UpperBanner from '../../components/UpperBanner/UpperBanner';
import LowerBanner from '../../components/LowerBanner/LowerBanner';
import * as s from './MainStyles';
import MainButton from '../../components/MainButton/MainButton';
import BriefReviewBox from '../../components/BriefReviewBox/BriefReviewBox';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
	const [reviews, setReviews] = useState([]);
	const navigate = useNavigate();

	const goToReview = () => {
		navigate('/reviews');
	};

	return (
		<>
			<Helmet>
				<title>유니스 주막</title>
			</Helmet>
			<UpperBanner />
			<s.Contents>
				<s.Title>환영하오...</s.Title>
				<MainButton title={'예약 주문'} desc={'기다리지 말고 픽업하세요!'} />
				<MainButton title={'이벤트'} desc={'참여만 해도 반값할인'} />
				<MainButton title={'오시는 길'} desc={'부스 위치 안내도'} />
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
			<LowerBanner />
		</>
	);
	// useEffect(() => {
	//     GetBriefReviewByTime().then(data => {
	//         console.log(data);
	//     });
	// }, []);

	const openPopup = link => {
		window.open(link, '_blank', 'width=600,height=400');
	};

	return (
		<>
			<Helmet>
				<title>유니스 주막</title>
			</Helmet>
			<UpperBanner />
			<s.Contents>
				<s.Title>환영하오...</s.Title>
			</s.Contents>
			<s.Contents>
				<table style={{ width: '100vw' }}>
					<tr>
						<td>
							<a href="/scr/pages/OrderListPage.jsx">
								<MainButton
									title={'예약 주문'}
									desc={'기다리지 말고 픽업하세요!'}
									imageSrc="/public/imgs/reservation.webp"
								/>
							</a>
						</td>
						<td>
							<a href="https://m.search.naver.com/search.naver?sm=mtp_hty.top&where=m&query=%EB%A6%AC%EB%85%B8">
								<MainButton
									title={'이벤트'}
									desc={'참여만 해도 반값할인'}
									imageSrc="/public/imgs/event.webp"
								/>
							</a>
						</td>
						<td>
							<MainButton
								title={'오시는 길'}
								desc={'부스 위치 안내도'}
								imageSrc="/public/imgs/position.webp"
								onClick={() =>
									openPopup(
										'https://m.search.naver.com/search.naver?sm=mtp_hty.top&where=m&query=%EB%A6%AC%EB%85%B8'
									)
								}
							/>
						</td>
					</tr>
				</table>
			</s.Contents>
			<s.Contents>
				<s.Title>벗들의 생생한 후기</s.Title>
			</s.Contents>
			<s.Contents>
				<s.Title>어젯밤 구해주신 홍보물입니다</s.Title>
			</s.Contents>
			<LowerBanner />
		</>
	);
};

export default MainPage;
