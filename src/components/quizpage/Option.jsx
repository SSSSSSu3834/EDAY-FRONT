import React from 'react';
import styled from 'styled-components';

const Option = () => {
    return (
        <Wrapper>
            <OptionBox></OptionBox>
            <OptionBox></OptionBox>
            <OptionBox></OptionBox>
        </Wrapper>
    );
};

export default Option;

const Wrapper = styled.div``;

const OptionBox = styled.div`
    background-color: var(--green1);
    height: 60px;
`;
