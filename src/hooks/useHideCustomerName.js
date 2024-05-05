const useHideCustomerName = name => {
	if (!name) return '';

	// 이름이 짧은 경우 직접 처리
	if (name.length <= 2) return `${name[0]}*`;

	// 이름의 중간 부분을 별표로 대체
	const firstChar = name[0];
	const lastChar = name[name.length - 1];
	const stars = '*'.repeat(name.length - 2);

	return `${firstChar}${stars}${lastChar}`;
};

export default useHideCustomerName;
