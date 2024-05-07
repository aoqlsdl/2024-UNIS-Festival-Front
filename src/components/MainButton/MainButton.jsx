import * as s from './MainButton.styles';

const MainButton = ({ title, desc, imageSrc, onClick }) => {
    return (
        <s.Wrapper onClick={onClick}>
            <img src={imageSrc} alt="이미지" />
        </s.Wrapper>
    );
};

export default MainButton;

