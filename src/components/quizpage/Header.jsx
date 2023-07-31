import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import XBtn from '../_common/XBtn';
import Dday from '../_common/Dday';
import GreenBorder from '../_common/GreenBorder';
import GreenBorderBox from '../_common/GreenBorderBox';

const Header = () => {
    const navigate = useNavigate();
    const { dDay } = useParams();

    return (
        <>
            <Top>
                <Dday num={dDay} />
                <XBtnContainer>
                    <XBtn onClick={() => navigate(`/answer/${dDay}`)} />
                </XBtnContainer>
            </Top>
            <GreenBorder text='추가 정보 제목 위치' />
            <BoxWrapper>
                <GreenBorderBox>이화여대 공식 색상은 __색이다.</GreenBorderBox>
            </BoxWrapper>
        </>
    );
};

export default Header;

const Top = styled.div`
    margin-bottom: 79px;
    position: relative;
`;

const BoxWrapper = styled.div`
    margin-top: 76px;
`;

const XBtnContainer = styled.div`
    position: absolute;
    right: 0;
    top: 22px;
`;
