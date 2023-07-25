import imageSrc from '../../assets/_common/img_icon.svg';
import styled from 'styled-components';

const Img = () => {
    return (
        <ImgIcon>
            <img src={imageSrc} />
        </ImgIcon>
    );
};

export default Img;

const ImgIcon = styled.div`
    margin-left: 10px;
`;
