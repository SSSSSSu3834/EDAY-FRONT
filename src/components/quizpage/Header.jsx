import React from 'react';
import styled from 'styled-components';
import XBtn from '../_common/XBtn';
import Dday from '../_common/Dday';
import GreenBorder from '../_common/GreenBorder';
import GreenBorderBox from '../_common/GreenBorderBox';

const Header = ({ num, text }) => {
    return (
        <>
            <Top>
                <Dday num='6'></Dday>
                <XBtnContainer>
                    <XBtn />
                </XBtnContainer>
            </Top>
            <GreenBorder text='추가정보제목위치' />
            <BoxWrapper>
                <GreenBorderBox>
                    퀴즈내용 어쩌고 가나다라마바ㄴㄴㅁㄻ니ㅓㄹ 아니아
                    거라호미ㅏㅓㅣ
                </GreenBorderBox>
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
