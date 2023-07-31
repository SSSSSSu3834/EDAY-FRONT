import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/quizpage/Header';
import Btn from '../components/_common/Btn';

const AnswerPage = ({ answer, answerInfo }) => {
    const navigate = useNavigate();
    const { dDay } = useParams();

    //퀴즈 줄 개수(dDay)에 따라 정답 버튼과 퀴즈 사이의 간격 &
    //설명 박스와 '추가정보 보러가기'버튼 사이의 간격 다르게 하기
    let answerMargin;
    let btnMargin;
    //'정답확인'(14px)과  정답 버튼을 감싼 wrapper를 기준으로 한 margin-top &
    // '추가정보 보러가기'버튼 과 설명 박스를 기준으로 한 margin-top
    switch (dDay) {
        case '1': //한줄 일 때
            answerMargin = '92px';
            btnMargin = '52px';
            break;
        case '2': //두줄 일 때
        case '3':
        case '4':
        case '5':
        case '6':
            answerMargin = '116px';
            btnMargin = '51px';
            break;
        case '7': //세줄 일 때
            answerMargin = '115px';
            btnMargin = '26px';
            break;
    }

    return (
        <>
            <Header />
            <AnswerWrapper style={{ marginTop: answerMargin }}>
                <CheckAnswer>정답확인 :</CheckAnswer>
                {dDay === '1' ? (
                    <Answer>{answer}안녕</Answer>
                ) : dDay === '2' ? (
                    <Answer>{answer}d2</Answer>
                ) : dDay === '3' ? (
                    <Answer>{answer}d3</Answer>
                ) : dDay === '4' ? (
                    <Answer>{answer}d4</Answer>
                ) : dDay === '5' ? (
                    <Answer>{answer}d5</Answer>
                ) : dDay === '6' ? (
                    <Answer>{answer}d6</Answer>
                ) : dDay === '7' ? (
                    <Answer>{answer}d7</Answer>
                ) : null}
            </AnswerWrapper>
            {dDay === '1' ? (
                <AnswerInfo>
                    {answerInfo}무인복합기는 모든 건물에 있지만 흑백은 약 50원,
                    컬러는 약 300~400원 정도의 가격을 지불해야 해요. 용지만 들고
                    간다면 무료로 인쇄가 가능한 곳은 학생문화관 최대 네줄
                    우하하학
                </AnswerInfo>
            ) : dDay === '2' ? (
                <AnswerInfo>{answerInfo}d2</AnswerInfo>
            ) : dDay === '3' ? (
                <AnswerInfo>{answerInfo}d3</AnswerInfo>
            ) : dDay === '4' ? (
                <AnswerInfo>{answerInfo}d4</AnswerInfo>
            ) : dDay === '5' ? (
                <AnswerInfo>{answerInfo}d5</AnswerInfo>
            ) : dDay === '6' ? (
                <AnswerInfo>{answerInfo}d6</AnswerInfo>
            ) : dDay === '7' ? (
                <AnswerInfo>{answerInfo}d7</AnswerInfo>
            ) : null}

            <BtnWrapper style={{ marginTop: btnMargin }}>
                <TopBtn>
                    <Btn
                        text='추가정보 보러가기'
                        type='deepGreen'
                        onClick={() => {
                            navigate(`/info/${dDay}`);
                        }}
                    />
                </TopBtn>
                <Btn
                    text='메인페이지로 돌아가기'
                    onClick={() => {
                        navigate(`/`);
                    }}
                />
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

const CheckAnswer = styled.div`
    font-size: 12px;
    font-weight: 500;
`;

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
`;

const TopBtn = styled.div`
    margin-bottom: 16px;
`;
