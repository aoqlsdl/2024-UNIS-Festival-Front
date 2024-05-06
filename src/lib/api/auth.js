import AuthService from './services/authservice';

export const getAuthInfo = async () => {
	try {
		const res = await AuthService.getAuthInfo();
		return res.data;
	} catch (err) {
		console.error('관리자 정보 조회 실패:', err);
		throw new Error('관리자 정보 조회에 실패했습니다.');
	}
};
