/**
 * 전화번호를 000-0000-0000 형태로 포맷팅하는 함수
 * @param {string} phoneNumber - 포맷팅할 전화번호
 * @returns {string} 포맷팅된 전화번호
 */
export const formatPhoneNumber = value => {
	// 숫자만 추출하고 최대 11자리까지만 허용
	const digits = value.replace(/\D/g, '').slice(0, 11);
	let formattedNumber = '';

	// 11자리의 경우, 000-0000-0000 형식으로 포맷팅
	if (digits.length === 11) {
		formattedNumber = `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7, 11)}`;
	}
	// 10자리의 경우, 000-000-0000 형식으로 포맷팅
	else if (digits.length === 10) {
		formattedNumber = `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
	}
	// 그 외에는 원래 숫자 그대로 반환
	else {
		formattedNumber = digits;
	}

	return formattedNumber;
};
