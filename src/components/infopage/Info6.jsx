import React from 'react';
import InfoBox from '../_common/InfoBox';

const Content = () => {
    return (
        <p>
            10분 간 움직임이 없으면 자동으로 로그아웃 돼요! 수강신청 사이트에서
            제공하는 10분 타이머가 다 지나기 전에 사이트 내의 새로고침 버튼을
            누르도록 합시다.
        </p>
    );
};

const Info6 = () => {
    return (
        <>
            <h1>6</h1>
            <InfoBox btnText='교과과정확인'></InfoBox>
            <InfoBox btnText='교과과정확인' content={Content}></InfoBox>
        </>
    );
};

export default Info6;
