import UpperBanner from '../../components/UpperBanner/UpperBanner';
import LowerBanner from '../../components/LowerBanner/LowerBanner';
import * as s from './MainStyles';
import CategoryButton from '../../components/CategoryButton/CategoryButton';
import SurveyButton from '../../components/SurveyButton/SurveyButton';
import BoothMap from '../../components/BoothMap/BoothMap';

const MainPage = () => {
	return (
		<>
			<UpperBanner />
			<s.Contents>
				<CategoryButton />
				<SurveyButton />
				<BoothMap /> {/* BoothMap 클릭시 ImgPopUp 컴포넌트 나타남 */}
			</s.Contents>
			<s.Contents></s.Contents>
			<LowerBanner />
		</>
	);
};

export default MainPage;
