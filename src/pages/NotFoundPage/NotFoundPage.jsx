import { useNavigate } from 'react-router-dom';
import * as s from './NotFound.styles';

const NotFoundPage = () => {
	const navigate = useNavigate();

	const goToMain = () => {
		navigate('/');
	};
	return (
		<>
			<s.Container>
				<s.Text>404 Not Found :(</s.Text>
				<s.Desc>경로를 다시 확인해주세요.</s.Desc>
				<s.Button type="button" onClick={() => goToMain()}>
					메인 페이지로 돌아가기
				</s.Button>
			</s.Container>
		</>
	);
};

export default NotFoundPage;
