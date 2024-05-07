const useMealTime = time => {
	const mealTimes = {
		1: ['아침', ' (AM 11:00)'],
		2: ['점심', ' (PM 12:30)'],
		3: ['간식', ' (PM 2:00)'],
		4: ['저녁', ' (PM 4:00)'],
	};

	// 입력된 time 값에 해당하는 식사 시간과 이름을 반환
	return mealTimes[time] || ['미정', '시간 미정']; // time 값이 매핑되지 않는 경우 기본 값을 반환
};

export default useMealTime;
