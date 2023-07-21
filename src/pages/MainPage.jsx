import React from 'react';
import Btn from '../components/_common/Btn';
import Title from '../components/_common/Title';

const MainPage = () => {
    return (
        <>
            <h1>MainPage</h1>
            <p>어쩌구저쩌구</p>
            <p style={{ fontFamily: 'GothamBold' }}>D-7</p>
            <p style={{ fontFamily: 'NanumBarunpen' }}>어쩌구저쩌구</p>

            {/* 버튼 사용 예시 */}
            <Btn text={'버튼 생성'} type={'deepGreen'} />
            <Title num={'1.'} title={'공학관 올라가기'} />
        </>
    );
};

export default MainPage;
