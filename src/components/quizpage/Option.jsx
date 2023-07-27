import React from 'react';
import styled from 'styled-components';

const Option = ({ option1, option2, option3 }) => {
    return (
        <Wrapper>
            <OptionBox class='option1'>{option1}</OptionBox>
            <OptionBox class='option2'>{option2}</OptionBox>
            <OptionBoxLast class='option3'>{option3}</OptionBoxLast>
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
    background-color: var(--green1);
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    border-radius: 4px;

    font-size: 16px;
    font-weight: 600;
    text-align: center;
    color: var(--black);
`;

const OptionBoxLast = styled(OptionBox)`
    margin-bottom: 0;
`;
