import React from 'react';
import styled from 'styled-components';

// assets
import mapdorm from '../../assets/infopage/map_dorm.svg';

// components
import Dday from '../_common/Dday';
import XBtn from '../_common/XBtn';
import GreenBorder from '../_common/GreenBorder';
import InfoContent from '../_common/InfoContent';
import InfoBox from '../_common/InfoBox';
import Btn from '../_common/Btn';

const Info7 = () => {
    return (
        <Wrapper>
            <Header>
                <Dday num='7' isGreen={false} />
                <div className='xbtn'>
                    <XBtn option='default' />
                </div>
            </Header>
            <Body>
                <GreenBorder text='건물위치&이동경로&소요시간&셔틀' />
                <MapDormImg src={mapdorm} />
                <InfoBox btnText='건물 간 이동정보' />
                <InfoBox btnText='지름길' />
                <InfoBox btnText='셔틀버스' />
            </Body>
            <Footer>
                <Btn text='메인페이지로 돌아가기' type='deepGreen' />
            </Footer>
        </Wrapper>
    );
};

export default Info7;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;

    width: calc(100% - 48px);
    margin-top: 57px;
    margin-bottom: 32px;

    & > .xbtn {
        margin-top: 2px;
    }
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;

    width: calc(100% - 48px);
    margin-top: 28px;
    margin-bottom: 10px;
`;

const Footer = styled.div`
    display: flex;
    justify-content: center;

    width: calc(100% - 48px);
    margin-top: 30px;
    margin-bottom: 33.97px;
`;

const MapDormImg = styled.img`
    align-self: center;

    width: 185.01px;
    height: 374.03px;
    margin: 40px 0px;
`;
