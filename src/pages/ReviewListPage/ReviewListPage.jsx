import { Helmet } from 'react-helmet';
import * as s from './ReviewList.styles';
import AllReviewBox from '../../components/AllReviewBox/AllReviewBox';

const ReviewListPage = () => {
	<Helmet>
		<title>벗들의 생생한 후기</title>
	</Helmet>;
	return (
		<>
			<s.Container>
				<s.Guide>
					<s.Title>리뷰 가이드</s.Title>
					<s.GuideContent>
						<s.PineTree src="/imgs/pine-tree.webp" />
						<s.GuideText>
							재미있는 리뷰를 남긴 벗,
							<br />
							친구와 함께한 리뷰를 남긴 벗,
							<br />
							재방문한 리뷰를 남긴 벗...
						</s.GuideText>
						<s.GuideText className="big">
							벗에게 기프티콘을 드리겠소.
						</s.GuideText>
						<s.Gifts src="/imgs/gifts.webp" />
					</s.GuideContent>
					<s.GuideText className="small">
						치킨(2명), 아메리카노(3명), 베스킨라빈스(4명)
					</s.GuideText>
				</s.Guide>
				<s.Button>후기 남기고 기프티콘 받으러 가기</s.Button>

				<s.ReviewBox>
					<s.Title>쩝쩝 석박사생들의 생생한 후기</s.Title>
					<AllReviewBox />
				</s.ReviewBox>
			</s.Container>
		</>
	);
};

export default ReviewListPage;
