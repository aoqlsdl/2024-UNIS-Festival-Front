import { useState } from 'react';
import * as s from './Timeslot.styles';

const Timeslot = ({ day, orderTimes, onSlotSelect }) => {
	const dayToIndex = {
		'8일': 0,
		'9일': 4,
		'10일': 8,
	};
	const startIndex = dayToIndex[day];
	const times = {
		'8일': [
			'아침 (AM 11:00)',
			'점심 (PM 12:30)',
			'간식 (PM 2:30)',
			'저녁 (PM 5:00)',
		],
		'9일': [
			'아침 (AM 11:00)',
			'점심 (PM 12:30)',
			'간식 (PM 2:30)',
			'저녁 (PM 5:00)',
		],
		'10일': [
			'아침 (AM 11:00)',
			'점심 (PM 12:30)',
			'간식 (PM 2:30)',
			'저녁 (PM 5:00)',
		],
	};

	// 선택된 시간을 관리하는 상태
	const [selectedTimes, setSelectedTimes] = useState(new Array(4).fill(false));

	const handleCheckboxChange = index => {
		const updatedSelection = selectedTimes.map((item, i) => i === index);
		setSelectedTimes(updatedSelection);
		onSlotSelect(times[day][index], day);
	};

	return (
		<>
			<s.Wrapper>
				<s.Timebox>
					{times[day].map((time, index) => (
						<s.TimeLabel key={index}>
							<s.TimeInput
								type="checkbox"
								checked={selectedTimes[index]}
								onChange={() => handleCheckboxChange(index)}
								disabled={!orderTimes[startIndex + index]}
							/>
							{time} {orderTimes[startIndex + index] ? '' : '주문 마감'}
						</s.TimeLabel>
					))}
				</s.Timebox>
			</s.Wrapper>
		</>
	);
};

export default Timeslot;
