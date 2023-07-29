import React, { useState } from 'react';
import styled from 'styled-components';

const Option = ({ option1, option2, option3 }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleClickOption = option => {
        setSelectedOption(option);
    };

    return (
        <Wrapper>
            <OptionBox
                onClick={() => handleClickOption(option1)}
                isSelected={selectedOption === option1}
            >
                {option1}
            </OptionBox>
            <OptionBox
                onClick={() => handleClickOption(option2)}
                isSelected={selectedOption === option2}
            >
                {option2}
            </OptionBox>
            <OptionBox
                className='last'
                onClick={() => handleClickOption(option3)}
                isSelected={selectedOption === option3}
            >
                {option3}
            </OptionBox>
        </Wrapper>
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
        props.isSelected ? 'var(--green2)' : 'var(--green1)'};
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
    color: ${props => (props.isSelected ? 'var(--white)' : 'var(--black)')};

    &.last {
        margin-bottom: 0;
    }
`;
