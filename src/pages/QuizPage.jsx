import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/quizpage/Header';
import Option from '../components/quizpage/Option';
import Btn from '../components/_common/Btn';

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

    //퀴즈 줄 개수(dDay)에 따라 '정답 확인하기' 버튼과 선택지들 사이의 간격 다르게 하기
    let btnMargin;
    //'정답 확인하기' 버튼+'다시 생각해보세요(16px)'를 감싼 wrapper를 기준으로 한 margin-top
    switch (dDay) {
        case '1': //한 줄 일때
            btnMargin = '103px';
            break;
        case '2': //두 줄 일때
        case '3':
        case '4':
        case '5':
        case '6':
            btnMargin = '78px';
            break;
        case '7': //세 줄 일때
            btnMargin = '53px';
            break;
        default:
            btnMargin = '78px';
            break;
    }

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
            <BtnWrapper style={{ marginTop: btnMargin }}>
                {isCorrect ? <Retry /> : <Retry>다시 생각해보세요!</Retry>}
                <Btn
                    type='deepGreen'
                    text='정답 확인하기'
                    onClick={handleCheckAnswer}
                />
            </BtnWrapper>
        </>
    );
};

export default QuizPage;

const BtnWrapper = styled.div`
    height: 75px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
