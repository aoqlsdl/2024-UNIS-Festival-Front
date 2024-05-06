import NumInput from '../NumInput/NumInput';
import * as s from './MenuItem.styles';

const MenuItem = ({ title, img, discount, quantity, onQuantityChange }) => {
	return (
		<>
			<s.Wrapper>
				<s.ImgBox>
					<s.Img src={img} />
				</s.ImgBox>
				<s.DescBox>
					<s.InfoBox>
						<s.Title>{title}</s.Title>
						<s.Discount>{discount}</s.Discount>
					</s.InfoBox>
					<NumInput quantity={quantity} onQuantityChange={onQuantityChange} />
				</s.DescBox>
			</s.Wrapper>
		</>
	);
};

export default MenuItem;
