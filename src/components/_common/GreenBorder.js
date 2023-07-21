import React from 'react';
import styled from 'styled-components';

const GreenBorder = ({ text }) => {
    return (
        <>
            <Text>{text}</Text>
            <Border />
        </>
    );
};

export default GreenBorder;

const Border = styled.div`
    width: 342px;
    height: 0;
    border-top: 4px solid var(--green2);
    border-radius: 2px;
`;

const Text = styled.div`
    font-family: NanumBarunpen;
    font-weight: 700;
    font-size: 16px;
    line-height: 20.38px;
    color: var(--green2);
    margin-bottom: 8px;
`;
