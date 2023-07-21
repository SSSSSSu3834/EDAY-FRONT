import React, { useState } from 'react';
import styled from 'styled-components';

// components
import XBtn from './XBtn';

const InfoBox = ({ btnText, content: Content }) => {
    const [boxClass, setBoxClass] = useState('btn');

    return (
        <Wrapper
            className={boxClass}
            onClick={() => {
                boxClass === 'btn' && setBoxClass('box');
            }}
        >
            {boxClass === 'btn' ? (
                <div>{btnText}</div>
            ) : (
                <div>
                    <XBtn
                        option='info'
                        onClick={() => {
                            boxClass === 'box' && setBoxClass('btn');
                        }}
                    />
                    <Content />
                </div>
            )}
        </Wrapper>
    );
};

export default InfoBox;

const Wrapper = styled.div`
    position: relative;
    width: 342px;
    border-radius: 4px;

    // transition: all 0.2s ease-out;

    &.btn {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 59px;
        background-color: var(--green2);

        font-size: 16px;
        color: rgba(250, 255, 248, 1);
        cursor: pointer;
    }

    &.box {
        background-color: var(--gray1);
    }
`;
