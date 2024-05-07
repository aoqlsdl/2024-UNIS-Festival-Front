import { useEffect, useState } from 'react';
import * as s from './BriefReviewBox.styles';
import { GetBriefReviewByTime } from '../../lib/api/review';
import StarsDisplay from '../StarsDisplay/StarsDisplay';

const BriefReviewBox = () => {
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		GetBriefReviewByTime()
			.then(data => {
				setReviews(data);
			})
			.catch(err => console.error('리뷰 최신순 5개 fetch 실패: ', err));
	}, []);
	return (
		<>
			<s.Container>
				<s.ReviewBox>
					{reviews.map(review => (
						<s.Contents key={review.reviewId}>
							<s.Review>
								<s.ReviewTitle>{review.title}</s.ReviewTitle>
								<s.ReviewDesc>{review.body}</s.ReviewDesc>
							</s.Review>
							<s.StarBox>
								<StarsDisplay rating={review.rating} />
							</s.StarBox>
						</s.Contents>
					))}
				</s.ReviewBox>
			</s.Container>
		</>
	);
};

export default BriefReviewBox;
