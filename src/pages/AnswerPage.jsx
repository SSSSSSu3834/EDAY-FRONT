import React from 'react';
import styled from 'styled-components';
import Header from '../components/quizpage/Header';

const AnswerPage = ({ answer, answerInfo }) => {
    return (
        <>
            <Header></Header>
            <AnswerWrapper>
                <CheckAnswer>정답확인 :</CheckAnswer>
                <Answer>안녕</Answer>
            </AnswerWrapper>
            <AnswerInfo>{answerInfo}</AnswerInfo>
        </>
    );
};

export default AnswerPage;

const AnswerWrapper = styled.div``;

const Answer = styled.div`
    background-color: var(--green2);
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 8px;
    margin-bottom: 20px;
    border-radius: 4px;

    font-size: 16px;
    font-weight: 600;
    text-align: center;
    color: var(--white);
`;

const CheckAnswer = styled.div``;

const AnswerInfo = styled.div`
    background-color: var(--gray1);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 20px;
    color: var(--black);
    text-align: center;
    font-size: 16px;
    line-height: 150%;
    font-weight: 600;
    word-break: keep-all;
`;
