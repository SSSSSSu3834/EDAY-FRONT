import React from 'react';
import XBtn from '../components/_common/XBtn';
import Dday from '../components/_common/Dday';
import GreenBorder from '../components/_common/GreenBorder';
import GreenBorderBox from '../components/_common/GreenBorderBox';
import Option from '../components/quizpage/Option';
import Btn from '../components/_common/Btn';

const QuizPage = () => {
    return (
        <>
            <h1>QuizPage</h1>
            <Dday num='6'></Dday>
            <XBtn></XBtn>
            <GreenBorder></GreenBorder>
            <GreenBorderBox></GreenBorderBox>
            <Option></Option>
            <Btn type='deepGreen' text='정답 확인하기'></Btn>
        </>
    );
};

export default QuizPage;
