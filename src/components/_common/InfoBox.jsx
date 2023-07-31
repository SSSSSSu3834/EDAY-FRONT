import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

// components
import XBtn from './XBtn';
import FloatingBtn from './FloatingBtn';

const InfoBox = ({ btnText, content: Content }) => {
    const [boxClass, setBoxClass] = useState('btn'); // Box 컴포넌트 클래스 이름 ('btn' || 'box)
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0); // Content 컴포넌트 높이

    // Box 클릭 시 (클래스 이름이 btn일 경우)
    const handleBoxClick = () => {
        boxClass === 'btn' && setBoxClass('box');
    };

    // XBtn 클릭 시
    const handleXBtnClick = () => {
        setBoxClass('btn');
    };

    // Content 컴포넌트 높이 측정
    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.clientHeight);
        }
    }, [boxClass]);

    return (
        <BoxWrapper height={boxClass === 'box' ? `${contentHeight}px` : '59px'}>
            <Box className={boxClass} onClick={handleBoxClick}>
                {boxClass === 'btn' ? (
                    <div>{btnText}</div>
                ) : (
                    <div>
                        <XBtn option='info' onClick={handleXBtnClick} />
                        <ContentWrapper ref={contentRef}>
                            {Content}
                        </ContentWrapper>
                    </div>
                )}
            </Box>
        </BoxWrapper>
    );
};

export default InfoBox;

const BoxWrapper = styled.div`
    width: calc(100%-48px);
    height: ${props => props.height};
    margin-bottom: 20px;

    transition: all 300ms ease-in-out;
`;

const Box = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 4px;

    &.btn {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--green2);

        font-size: 16px;
        color: rgba(250, 255, 248, 1);
        cursor: pointer;
    }

    &.box {
        background-color: var(--gray1);
    }
`;

const ContentWrapper = styled.div`
    width: 100%;
`;
