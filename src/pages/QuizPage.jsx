import React, { useState } from 'react';
import Header from '../components/quizpage/Header';
import Option from '../components/quizpage/Option';
import Btn from '../components/_common/Btn';
import styled from 'styled-components';

const QuizPage = () => {
    const [isCorrect, setIsCorrect] = useState(true);

    const handleCheckAnswer = () => {
        setIsCorrect(isCorrect);
    };

    return (
        <>
            <Header></Header>
            <Option option1='안녕' option2='어쩔' option3='아니'></Option>
            <Wrapper>
                {isCorrect ? (
                    <>
                        <Retry></Retry>
                        <Btn
                            type='deepGreen'
                            text='정답 확인하기'
                            onClick={handleCheckAnswer}
                        ></Btn>
                    </>
                ) : (
                    <>
                        <Retry>다시 생각해보세요!</Retry>
                        <Btn
                            type='deepGreen'
                            text='정답 확인하기'
                            onClick={handleCheckAnswer}
                        ></Btn>
                    </>
                )}
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
