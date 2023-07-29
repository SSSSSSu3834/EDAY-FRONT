import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import InfoBox from '../_common/InfoBox';
import Dday from '../_common/Dday';
import XBtn from '../_common/XBtn';
import GreenBorder from '../_common/GreenBorder';
import Btn from '../_common/Btn';
import map5 from '../../assets/infopage/dDay5_map.svg';
import Title from '../_common/Title';
import InfoContent from '../_common/InfoContent';
import FloatingBtn from '../_common/FloatingBtn';

const Content = () => {};

const Info5 = () => {
    const navigate = useNavigate();
    const { dDay } = useParams();

    return (
        <>
            <Top>
                <Dday num='5'></Dday>
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
                <MapImg src={map5} alt='d-5 지도' />
            </MapWrapper>
            <InfoBox btnText='대출 서비스' content={Content}></InfoBox>
            <InfoBox btnText='학위논문 이용 서비스' content={Content}></InfoBox>
            <InfoBox btnText='무인복합기' content={Content}></InfoBox>
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

export default Info5;

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
