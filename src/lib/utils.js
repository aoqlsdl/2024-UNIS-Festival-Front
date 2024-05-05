/**
 * 전화번호를 (000-0000-0000) 형태로 포맷팅하는 함수
 * @param {string} phoneNumber - 포맷팅할 전화번호
 * @returns {string} 포맷팅된 전화번호
 */
export const formatPhoneNumber = value => {
	// 숫자만 추출하고 최대 11자리까지만 허용
	const digits = value.replace(/\D/g, '').slice(0, 11);
	const match = digits.match(/^(\d{3})(\d{4})(\d{4})$/);
	if (match) {
		return `${match[1]}-${match[2]}-${match[3]}`;
	}
	return value;
};
