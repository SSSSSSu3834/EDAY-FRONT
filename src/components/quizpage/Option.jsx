import React, { useState, useEffect, createContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import QuizPage from '../../pages/QuizPage';

//import { GetQuiz, PostAnswer } from '../../api/quiz';

const Option = ({ num }) => {
    const { dDay } = useParams();
    const [selectedOption, setSelectedOption] = useState('');
    const [options, setOptions] = useState([]);
    const [quizDescription, setQuizDescription] = useState('');
    const [isAnswer, setIsAnswer] = useState(false);
    const [answerContent, setAnswerContent] = useState('');

    //퀴즈 선택지 가져오기
    // useEffect(() => {
    //     GetQuiz(num).then(res => {
    //         console.log(res.data);
    //         setOptions(res.data.optionList);
    //     });
    // }, [num]);

    //option 1,2,3 에 따라 content 다르게 받기
    // const getOptionContent = optionNum => {
    //     const option = options.find(op => op.optionNumber === optionNum);
    //     return option ? option.content : null;
    // };

    //선택된 option number 찾기
    // const handleOptionClick = optionNum => {
    //     const option = options.find(op => op.optionNumber === optionNum);
    //     setSelectedOption(option.optionNumber);

    //     const requestBody = {
    //         optionNumber: optionNum,
    //     };

    //     PostAnswer(dDay, requestBody)
    //         .then(res => {
    //             console.log(res.data);
    //             setIsAnswer(res.data.answer);
    //             setQuizDescription(res.data.quizDescription);
    //         })
    //         .catch(err => console.log(err));
    // };

    /* <Wrapper>
        <OptionBox
            onClick={() => handleOptionClick(1)}
            isselected={selectedOption === 1}
        >
            {getOptionContent(1)}
        </OptionBox>
        <OptionBox
            onClick={() => handleOptionClick(2)}
            isselected={selectedOption === 2}
        >
            {getOptionContent(2)}
        </OptionBox>
        <OptionBox
            onClick={() => handleOptionClick(3)}
            isselected={selectedOption === 3}
        >
            {getOptionContent(3)}
        </OptionBox>
    </Wrapper>
</> */

    return (
        <>
            <Wrapper>
                <OptionBox onClick={() => (isselected = 'true')}>ecc</OptionBox>
                <OptionBox onClick={() => (isselected = 'true')}>
                    학문관
                </OptionBox>
                <OptionBox onClick={() => (isselected = 'true')}>
                    종과
                </OptionBox>
            </Wrapper>
        </>
    );
};

export default Option;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 78px;
`;

const OptionBox = styled.div`
    background-color: ${props =>
        props.isselected ? 'var(--green2)' : 'var(--green1)'};
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 100ms ease-in;

    font-size: 16px;
    font-weight: 600;
    text-align: center;
    color: ${props => (props.isselected ? 'var(--white)' : 'var(--black)')};

    &.last {
        margin-bottom: 0;
    }
`;
