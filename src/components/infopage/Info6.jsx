import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import InfoBox from '../_common/InfoBox';
import Dday from '../_common/Dday';
import XBtn from '../_common/XBtn';
import GreenBorder from '../_common/GreenBorder';
import Btn from '../_common/Btn';
import Title from '../_common/Title';
import InfoContent from '../_common/InfoContent';
import FloatingBtn from '../_common/FloatingBtn';

import map6 from '../../assets/infopage/dDay6_map.svg';
import pic6_1 from '../../assets/infopage/dDay6_1.svg';

const NumberedText = () => {
    return (
        <div>
            '① 수강신청 사이트에 로그인합니다. ② 서브메뉴 중 [교과과정 및 교과목
            소개]를 클릭해요. ③ 본인 전공을 선택하고 출력 버튼을 클릭하면 본인이
            수강해야 하는 과목을 볼 수 있어요!'
        </div>
    );
};

const Content1 = () => {
    return (
        <>
            <Title num='1.' title='수강해야 하는 과목 확인 방법'></Title>
            <GreenBorder type='info'></GreenBorder>
            <InfoContent
                type='top'
                text='수강신청 사이트에서 확인하기'
            ></InfoContent>
            <InfoContent text={NumberedText}></InfoContent>

            <Img1 src={pic6_1}></Img1>

            <InfoContent text='학교 홈페이지에서 확인하기'></InfoContent>
        </>
    );
};
const Content2 = () => {
    return (
        <>
            <div>
                10분 간 움직임이 없으면 자동으로 로그아웃 돼요! 수강신청
                사이트에서 제공하는 10분 타이머가 다 지나기 전에 사이트 내의
                새로고침 버튼을 누르도록 합시다.
            </div>
        </>
    );
};
const Content3 = () => {
    return (
        <>
            <div>
                10분 간 움직임이 없으면 자동으로 로그아웃 돼요! 수강신청
                사이트에서 제공하는 10분 타이머가 다 지나기 전에 사이트 내의
                새로고침 버튼을 누르도록 합시다.
            </div>
        </>
    );
};

const Info6 = () => {
    const navigate = useNavigate();
    const { dDay } = useParams();

    return (
        <>
            <Top>
                <Dday num='6'></Dday>
                <XBtnContainer>
                    <XBtn
                        onClick={() => {
                            navigate(`/answer/${dDay}`);
                        }}
                    />
                </XBtnContainer>
            </Top>
            <GreenBorder text='추가 정보 제목 위치' />
            <MapWrapper>
                <MapImg src={map6} alt='d-6 지도' />
            </MapWrapper>
            <InfoBox btnText='교과과정 확인' content={Content1}></InfoBox>
            <InfoBox btnText='수강신청' content={Content2}></InfoBox>
            <InfoBox btnText='시간표' content={Content3}></InfoBox>
            <BtnWrapper>
                <Btn
                    text='메인페이지로 돌아가기'
                    type='deepGreen'
                    onClick={() => {
                        navigate('/');
                    }}
                />
            </BtnWrapper>
        </>
    );
};

export default Info6;

const Top = styled.div`
    margin-bottom: 79px;
    position: relative;
`;

const XBtnContainer = styled.div`
    position: absolute;
    right: 0;
    top: 22px;
`;

const MapImg = styled.img``;

const MapWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px 0;
`;

const BtnWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const Img1 = styled.img``;
