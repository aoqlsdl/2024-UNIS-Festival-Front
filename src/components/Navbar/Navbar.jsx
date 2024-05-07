import { useNavigate } from 'react-router-dom';
import * as s from './NavbarStyles';

const Navbar = ({ title }) => {
	const navigate = useNavigate();

	const goBefore = () => {
		navigate(-1);
	};
	return (
		<>
			<s.Wrapper>
				<s.Content>
					<s.Arrow src="/icons/arrow.svg" onClick={() => goBefore()} />
					<s.Title>{title}</s.Title>
				</s.Content>
			</s.Wrapper>
		</>
	);
};

export default Navbar;
