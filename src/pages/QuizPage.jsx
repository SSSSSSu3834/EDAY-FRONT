import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/quizpage/Header';
import Option from '../components/quizpage/Option';
import Btn from '../components/_common/Btn';
import styled from 'styled-components';

const QuizPage = () => {
    const [isCorrect, setIsCorrect] = useState(true);
    const { dDay } = useParams();
    const navigate = useNavigate();

    const handleCheckAnswer = () => {
        const userAnswer = '3';
        const correctAnswer = '4';

        setIsCorrect(userAnswer === correctAnswer);

        if (userAnswer === correctAnswer) {
            //modal 띄우기
            navigate(`/answer/${dDay}`);
        }
    };

    return (
        <>
            <Header />
            {dDay === '1' ? (
                <Option option1='안녕' option2='어쩔' option3='아니' />
            ) : dDay === '2' ? (
                <Option option1='노노' option2='d2' option3='d2' />
            ) : dDay === '3' ? (
                <Option option1='노노' option2='d3' option3='d3_' />
            ) : dDay === '4' ? (
                <Option option1='노노' option2='d4' option3='d4_' />
            ) : dDay === '5' ? (
                <Option option1='노노' option2='d5' option3='d5_' />
            ) : dDay === '6' ? (
                <Option option1='노노' option2='d6' option3='d6_' />
            ) : dDay === '7' ? (
                <Option option1='노노' option2='d7' option3='d7_' />
            ) : null}
            <Wrapper>
                {isCorrect ? <Retry /> : <Retry>다시 생각해보세요!</Retry>}
                <Btn
                    type='deepGreen'
                    text='정답 확인하기'
                    onClick={handleCheckAnswer}
                />
            </Wrapper>
        </>
    );
};

export default QuizPage;

const Wrapper = styled.div`
    height: 75px;
    display: flex;
    flex-direction: column;
    align-items: center;

    position: absolute;
    bottom: 130px;
    left: 0;
    right: 0;
`;

const Retry = styled.div`
    width: 100px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;

    font-size: 12px;
    font-weight: 500;
    color: var(--pink);
`;
