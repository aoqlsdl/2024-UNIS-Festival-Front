import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import * as s from './LayoutStyles';

const NavbarLayout = ({ title }) => {
	return (
		<>
			<s.Container className="nav">
				<Navbar title={title} />
				<s.Wrapper className="nav">
					<Outlet />
				</s.Wrapper>
				<Footer />
			</s.Container>
		</>
	);
};

export default NavbarLayout;
