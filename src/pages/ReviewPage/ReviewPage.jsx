import { Helmet } from 'react-helmet';
import { useState } from 'react';
import * as s from './Review.styles';
import { postReview } from '../../lib/api/review';
import { formatPhoneNumber } from '../../lib/utils';

const ReviewPage = () => {
	// 폼 데이터를 위한 상태 초기화
	const [formData, setFormData] = useState({
		title: '',
		rating: '',
		body: '',
		file: null,
		nickname: '',
		phoneNumber: '',
		password: '',
	});

	// 입력 필드 업데이트를 위한 핸들러
	const handleChange = e => {
		const { name, value, files } = e.target;
		if (name === 'file') {
			setFormData(prevState => ({ ...prevState, file: files[0] }));
		} else if (name === 'rating') {
			const floatValue = parseFloat(value);
			if (!isNaN(floatValue)) {
				setFormData(prevState => ({ ...prevState, [name]: floatValue }));
			} else {
				setFormData(prevState => ({ ...prevState, [name]: '' }));
			}
		} else if (name === 'phoneNumber') {
			// 휴대폰 번호 입력 필드인 경우, 포맷 함수를 적용
			const formattedPhoneNumber = formatPhoneNumber(value);
			setFormData(prevState => ({
				...prevState,
				[name]: formattedPhoneNumber,
			}));
		} else {
			setFormData(prevState => ({ ...prevState, [name]: value }));
		}
	};

	// 폼 제출 핸들러
	const handleSubmit = async e => {
		e.preventDefault();

		try {
			const reviewData = {
				data: {
					title: formData.title,
					rating: formData.rating,
					body: formData.body,
					nickname: formData.nickname,
					phoneNumber: formData.phoneNumber,
					password: formData.password,
				},
				file: formData.file,
			};

			const response = await postReview(reviewData);
			console.log('리뷰가 성공적으로 등록되었습니다.', response);
		} catch (err) {
			console.error('리뷰 등록 중 오류가 발생했습니다.', err);
		}
	};

	return (
		<>
			<Helmet>
				<title>리뷰하기</title>
			</Helmet>

			<s.Container onSubmit={handleSubmit}>
				<div>리뷰 작성자를 추첨하여 기프티콘 증정!</div>
				<form>
					<s.Content>
						<s.InputBox>
							<s.Label>제목: </s.Label>
							<s.Input
								placeholder="제목을 입력하세요"
								value={formData.title}
								onChange={handleChange}
								name="title"
							/>
						</s.InputBox>
						<s.InputBox>
							<s.Label>별점: </s.Label>
							<s.Input
								value={formData.rating}
								onChange={handleChange}
								name="rating"
							/>
						</s.InputBox>
						<s.InputBox className="textarea">
							<s.Label>내용: </s.Label>
							<s.Textarea
								value={formData.body}
								onChange={handleChange}
								name="body"
							/>
						</s.InputBox>
						<s.InputBox>
							<s.Label>사진: </s.Label>
							<s.Input type="file" onChange={handleChange} name="file" />
						</s.InputBox>
						<s.InputBox>
							<s.Label>닉네임: </s.Label>
							<s.Input
								placeholder="닉네임을 입력하세요"
								value={formData.nickname}
								onChange={handleChange}
								name="nickname"
							/>
						</s.InputBox>
						<s.InputBox>
							<s.Label>전화번호: </s.Label>
							<s.Input
								placeholder="이벤트 참여를 원할시에만 기재"
								value={formData.phoneNumber}
								onChange={handleChange}
								name="phoneNumber"
							/>
						</s.InputBox>
						<s.InputBox>
							<s.Label>비밀번호: </s.Label>
							<s.Input
								placeholder="비밀번호 입력"
								value={formData.password}
								onChange={handleChange}
								name="password"
							/>
						</s.InputBox>
					</s.Content>
					<s.Submit type="submit">리뷰 작성하기</s.Submit>
				</form>
			</s.Container>
		</>
	);
};

export default ReviewPage;
