import { Helmet } from 'react-helmet';
import { useState } from 'react';
import * as s from './Review.styles';
import { postReview } from '../../lib/api/review';
import { formatPhoneNumber } from '../../lib/utils';
import Stars from '../../components/Stars/Stars';
import { useNavigate } from 'react-router-dom';
import ReviewModal from '../../components/ReviewModal/ReviewModal';

const ReviewPage = () => {
	// 폼 데이터를 위한 상태 초기화
	const [formData, setFormData] = useState({
		title: '',
		rating: 0,
		body: '',
		file: [],
		nickname: '',
		phoneNumber: '',
		password: '',
	});

	// 글자수 세기
	const [titleCharCount, setTitleCharCount] = useState(0);
	const [bodyCharCount, setBodyCharCount] = useState(0);

	// 파일명
	const [fileNames, setFileNames] = useState([]);

	// 모달
	const [isModalOpen, setIsModalOpen] = useState(false);

	const navigate = useNavigate();

	// 입력 필드 업데이트를 위한 핸들러
	const handleChange = e => {
		const { name, value, files } = e.target;
		if (name === 'file') {
			const fileList = Array.from(files); // 파일 목록을 배열로 변환

			// 이전 파일 목록을 유지하고 새 파일을 추가
			setFormData(prevState => ({
				...prevState,
				file: [...prevState.file, ...fileList],
			}));

			// 파일명을 상태에 저장
			setFileNames(prevNames => [
				...prevNames,
				...fileList.map(file => file.name),
			]);

			console.log(fileNames);
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

			// 글자수 세기
			if (name === 'title') {
				setTitleCharCount(value.length);
			} else if (name === 'body') {
				setBodyCharCount(value.length);
			}
		}
	};

	// 폼 제출 핸들러
	const handleSubmit = async e => {
		e.preventDefault();

		// 입력 필드의 빈 값을 검사
		if (
			!formData.title ||
			!formData.body ||
			formData.rating === 0 ||
			!formData.nickname ||
			!formData.password
		) {
			alert('리뷰 등록에 실패했습니다. 모든 항목을 작성해주세요.');
			return; // 빈 값이 있을 경우 함수 종료
		}

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

			console.log(reviewData);

			const response = await postReview(reviewData);
			console.log('리뷰 등록 성공: ', response);
			setIsModalOpen(false);
			alert('리뷰가 등록되었습니다!');
			navigate('/reviews');
		} catch (err) {
			console.error('리뷰 등록 중 오류가 발생했습니다.', err);
			alert('리뷰 등록에 실패했습니다.');
		}
	};

	// 별점 핸들러
	const handleRatingChange = newRating => {
		setFormData(prevState => ({ ...prevState, rating: newRating }));
	};

	return (
		<>
			<Helmet>
				<title>리뷰하기</title>
			</Helmet>

			<s.Container onSubmit={handleSubmit}>
				<s.Event>
					리뷰 작성자 중 <br />
					추첨을 통해 기프티콘 증정!
				</s.Event>
				<form>
					<s.Content>
						<s.InputBox>
							<s.Label>제목</s.Label>
							<s.Input
								value={formData.title}
								onChange={handleChange}
								name="title"
								maxLength={50}
							/>
							<s.CharCount>{titleCharCount}/50</s.CharCount>
						</s.InputBox>
						<s.InputBox>
							<s.Label>별점</s.Label>
							<s.StarBox>
								<Stars
									rating={formData.rating}
									setRating={handleRatingChange}
								/>
								<s.Input
									value={formData.rating}
									onChange={handleChange}
									name="rating"
									className="rating"
									type="number"
								/>
							</s.StarBox>
						</s.InputBox>
						<s.InputBox className="textarea">
							<s.Label>내용</s.Label>
							<s.Textarea
								value={formData.body}
								onChange={handleChange}
								name="body"
								maxLength={100}
							/>
							<s.CharCount>{bodyCharCount}/100</s.CharCount>
						</s.InputBox>
						<s.InputBox>
							<s.Label>이미지 업로드</s.Label>
							<s.FileBox>
								<s.File className="input-file-button" htmlFor="input-file">
									<img src="/icons/upload.svg" />
									<span>파일 업로드</span>
								</s.File>
								<s.FileName>
									{fileNames.length > 0 && fileNames.join(', ')}
								</s.FileName>
								<input
									type="file"
									id="input-file"
									style={{ display: 'none' }}
									accept="image/*"
									onChange={handleChange}
									name="file"
									multiple
								/>
							</s.FileBox>
						</s.InputBox>
						<s.InputBox>
							<s.Label>닉네임</s.Label>
							<s.Input
								value={formData.nickname}
								onChange={handleChange}
								name="nickname"
							/>
						</s.InputBox>
						<s.InputBox>
							<s.Label>전화번호 (이벤트 참여 희망 시에만 기재) </s.Label>
							<s.Input
								value={formData.phoneNumber}
								onChange={handleChange}
								name="phoneNumber"
							/>
						</s.InputBox>
						<s.InputBox>
							<s.Label>비밀번호</s.Label>
							<s.Input
								value={formData.password}
								onChange={handleChange}
								name="password"
								type="password"
							/>
						</s.InputBox>
						<s.Submit type="button" onClick={() => setIsModalOpen(true)}>
							후기 등록하기
						</s.Submit>
					</s.Content>
				</form>
			</s.Container>
			<ReviewModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				onSubmit={handleSubmit}
			/>
		</>
	);
};

export default ReviewPage;
