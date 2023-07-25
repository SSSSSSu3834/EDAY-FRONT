import React, { useState } from 'react';
import styled from 'styled-components';
import GreenBorderBox from '../components/_common/GreenBorderBox';
import Modal from '../components/_common/Modal';
import Dday from '../components/_common/Dday';

const MainPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const opener = () => setIsModalOpen(true);
    const closer = () => setIsModalOpen(false);
    const yes = () => console.log('확인 버튼');
    return (
        <Wrapper>
            <Container>
                <h1>MainPage</h1>
                <GreenBorderBox>
                    종합과학관 A동은 ‘종A’, 학관은 ‘학’ 어쩌구저쩌구
                </GreenBorderBox>
                <button onClick={opener}>모달 열기</button>
                <Dday num='6' isGreen={true} />
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
    border: 1px solid #000;
    width: calc(100% - 48px);
`;
