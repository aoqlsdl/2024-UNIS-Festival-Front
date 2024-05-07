import * as s from './MainButton.styles';

const MainButton = ({ title, desc, onClick }) => {
	return (
		<>
			<s.Wrapper onClick={onClick}>
				<s.Title>{title}</s.Title>
				<s.Desc>{desc}</s.Desc>
			</s.Wrapper>
		</>
	);
};

export default MainButton;
