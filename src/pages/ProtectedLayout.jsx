import { useState } from 'react';
import * as s from './LayoutStyles';
import AuthPage from './AuthPage/AuthPage';

const ProtectedLayout = () => {
	const [isAuth, setIsAuth] = useState(false);
	const [password, setPassword] = useState('');
	const pw = import.meta.env.VITE_UNIS_CODE;

	// 비밀번호 입력 처리
	const handlePasswordChange = e => {
		setPassword(e.target.value);
	};

	// 비밀번호 일치 확인
	const handlePasswordInput = () => {
		if (password === pw) {
			setIsAuth(true);
		} else {
			alert('패스워드가 틀렸습니다!');
		}
	};

	return (
		<>
			<s.Container>
				<h2>Auth Page</h2>
				{isAuth ? (
					<>
						<AuthPage />
					</>
				) : (
					<s.InputWrapper>
						<s.Input
							placeholder="패스워드 입력"
							type="password"
							onChange={handlePasswordChange}
						/>
						<s.Button onClick={handlePasswordInput}>확인</s.Button>
					</s.InputWrapper>
				)}
			</s.Container>
		</>
	);
};

export default ProtectedLayout;
