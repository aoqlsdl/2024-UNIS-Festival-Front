import { useEffect, useState } from 'react';
import * as s from './AllReviewBox.styles';
import { GetReviewByTime } from '../../lib/api/review';
import StarsDisplay from '../StarsDisplay/StarsDisplay';

const AllReviewBox = () => {
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		GetReviewByTime()
			.then(data => {
				setReviews(data);
				console.log(data);
			})
			.catch(err => console.error('리뷰 최신순 fetch 실패: ', err));
	}, []);
	return (
		<>
			<s.Container>
				<s.ReviewBox>
					{reviews.length > 0 ? (
						reviews.map(review => (
							<s.Contents key={review.reviewId}>
								<s.Review>
									<s.StarBox>
										<StarsDisplay rating={review.rating} />
									</s.StarBox>
									<s.ReviewTitle>{review.title}</s.ReviewTitle>
									<s.ReviewDesc>{review.body}</s.ReviewDesc>
									<s.Reviewer>닉네임: {review.nickname}</s.Reviewer>
								</s.Review>
								{review.imageLinks > 0 ? (
									<s.ReviewImg src={review.imageLinks[0]} />
								) : (
									<s.ReviewImg src="/imgs/thumbnail.webp" />
								)}
							</s.Contents>
						))
					) : (
						<s.EmptyMessage>리뷰를 등록해주세요</s.EmptyMessage>
					)}
				</s.ReviewBox>
			</s.Container>
		</>
	);
};

export default AllReviewBox;
