import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import XBtn from '../_common/XBtn';
import Dday from '../_common/Dday';
import GreenBorder from '../_common/GreenBorder';
import GreenBorderBox from '../_common/GreenBorderBox';

const Header = ({ num, text }) => {
    const greenBorderBoxRef = useRef(null);
    const greenBorderBoxHeight = useRef(0);

    useEffect(() => {
        if (greenBorderBoxRef.current) {
            greenBorderBoxHeight.current =
                greenBorderBoxRef.current.clientHeight;
            console.log('GreenBorderBox Height:', greenBorderBoxHeight.current);
        }
    });

    return (
        <>
            <Top>
                <Dday num='6'></Dday>
                <XBtnContainer>
                    <XBtn />
                </XBtnContainer>
            </Top>
            <GreenBorder text='추가 정보 제목 위치' />
            <BoxWrapper ref={greenBorderBoxRef}>
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
