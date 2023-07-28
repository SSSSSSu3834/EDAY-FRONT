import React from 'react';
import styled from 'styled-components';
import Header from '../components/quizpage/Header';
import Btn from '../components/_common/Btn';

const AnswerPage = ({ answer, answerInfo }) => {
    return (
        <>
            <Header></Header>
            <AnswerWrapper>
                <CheckAnswer>정답확인 :</CheckAnswer>
                <Answer>{answer}안녕</Answer>
            </AnswerWrapper>
            <AnswerInfo>
                {answerInfo}무인복합기는 모든 건물에 있지만 흑백은 약 50원,
                컬러는 약 300~400원 정도의 가격을 지불해야 해요. 용지만 들고
                간다면 무료로 인쇄가 가능한 곳은 학생문화관 최대 네줄 우하하학
            </AnswerInfo>
            <BtnWrapper>
                <TopBtn>
                    <Btn text='추가정보 보러가기'></Btn>
                </TopBtn>
                <Btn text='메인페이지로 돌아가기' type='deepGreen'></Btn>
            </BtnWrapper>
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
    font-size: 16px;
    line-height: 150%;
    font-weight: 600;
    text-align: justify;
`;

const BtnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: 66px;
    left: 0;
    right: 0;
`;

const TopBtn = styled.div`
    margin-bottom: 16px;
`;
