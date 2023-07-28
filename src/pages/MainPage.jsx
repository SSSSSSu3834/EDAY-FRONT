import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GreenBorderBox from '../components/_common/GreenBorderBox';
import Modal from '../components/_common/Modal';
import Dday from '../components/_common/Dday';

import { GetInfo } from '../api/info';

const MainPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const opener = () => setIsModalOpen(true);
    const closer = () => setIsModalOpen(false);
    const yes = () => console.log('확인 버튼');

    useEffect(() => {
        // GetInfo(1);
    }, []);
    return (
        <Wrapper>
            <Container>
                <br />
                <GreenBorderBox>
                    종합과학관 A동은 ‘종A’, 학관은 ‘학’ 어쩌구저쩌구
                </GreenBorderBox>
                <Dday num='6' isGreen={true} />
                <button onClick={opener}>모달 열기</button>
            </Container>
            {isModalOpen ? (
                <Modal
                    isModalOpen={isModalOpen}
                    closer={closer}
                    btn='2'
                    btntext1='아니요'
                    btntext2='네'
                    maintext='정말 탈퇴하시겠습니까?'
                    onClick1={closer}
                    onClick2={yes}
                />
            ) : null}
        </Wrapper>
    );
};

export default MainPage;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;
const Container = styled.div`
    width: calc(100% - 48px);
`;
