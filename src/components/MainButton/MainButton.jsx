import * as s from './MainButton.styles';

const MainButton = ({ title, desc, imageSrc, onClick, width, height }) => {
    return (
        <s.Wrapper onClick={onClick}>
            <img src={imageSrc} alt="이미지" width={width} height={height} />
        </s.Wrapper>
    );
};

export default MainButton;
