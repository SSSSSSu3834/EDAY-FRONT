import React from 'react';
import styled from 'styled-components';

//infoPage에서 사용할 경우에만 type에 info를 넘겨주면 됩니다.
const GreenBorder = ({ text, type }) => {
    return (
        <>
            <Border className={type}>
                <Text>{text}</Text>
            </Border>
        </>
    );
};

export default GreenBorder;

const Border = styled.div`
    height: 0;
    border-bottom: 4px solid var(--green2);
    border-radius: 2px;
    position: relative;
    display: flex;
    justify-content: center;

    &.info {
        width: 390px;
        border-radius: 0px;
    }
`;

const Text = styled.div`
    font-family: NanumBarunpen;
    font-weight: 700;
    font-size: 16px;
    line-height: 20.38px;
    color: var(--green2);
    position: absolute;
    bottom: 8px;
`;
