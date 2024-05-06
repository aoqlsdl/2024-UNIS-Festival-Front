import { useState } from 'react';
import * as s from './NumInput.styles';

const NumInput = ({ quantity, onQuantityChange }) => {
	const handleInputChange = e => {
		const newValue = parseInt(e.target.value, 10);
		// 숫자가 유효 범위 내에 있는지 확인하고 조정
		if (!isNaN(newValue) && newValue >= 0 && newValue <= 5) {
			onQuantityChange(newValue); // 부모 컴포넌트의 변경 처리 함수 호출
		}
	};

	const increment = () => {
		onQuantityChange(Math.min(quantity + 1, 5));
	};

	const decrement = () => {
		onQuantityChange(Math.max(quantity - 1, 0));
	};

	return (
		<>
			<s.Wrapper>
				<s.Button onClick={decrement} disabled={quantity === 0} type="button">
					-
				</s.Button>
				<s.Input
					type="number"
					value={quantity}
					onChange={handleInputChange}
					min="0"
					max="5"
				/>
				<s.Button onClick={increment} disabled={quantity === 5} type="button">
					+
				</s.Button>
			</s.Wrapper>
		</>
	);
};

export default NumInput;
