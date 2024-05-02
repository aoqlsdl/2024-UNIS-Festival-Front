import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import * as s from './LayoutStyles';

const NavbarLayout = ({ title }) => {
	return (
		<>
			<s.Container>
				<Navbar title={title} />
				<s.Wrapper>
					<Outlet />
				</s.Wrapper>
				<Footer />
			</s.Container>
		</>
	);
};

export default NavbarLayout;
