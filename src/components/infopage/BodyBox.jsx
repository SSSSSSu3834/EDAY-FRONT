import Title from '../_common/Title';
import InfoContent from '../_common/InfoContent';
import Tip from '../_common/Tip';
import Img from '../_common/Img';
const BodyBox = () => {
    return (
        <div className='Bodybox'>
            <div className='title'>
                <Title num={'1.'} title={'공학관 올라가기'} />
            </div>

            <InfoContent text={'수강 가능 학점 확인'} type={'top'} />

            <InfoContent
                text={
                    '10분 간 움직임이 없으면 자동으로 로그아웃 돼요! 수강신청 사이트에서 제공하는 10분 타이머가 다 지나기 전에 사이트 내의 새로고침 버튼을 누르도록 합시다.'
                }
            />

            <InfoContent
                text={
                    '수강 신청 페이지 접속 후 좌측 상단의 이름 클릭 시 신청 가능 학점 확인 가능해요.'
                }
                type={'smallDot'}
                noMargin={true}
            />
            <InfoContent
                text={
                    '수강 신청 페이지 접속 후 좌측 상단의 이름 클릭 시 신청 가능 학점 확인 가능해요.'
                }
                type={'smallDot'}
            />

            <Tip />
            <InfoContent
                text={
                    '모바일로 이용할 때도 최초 1회는 반드시 PC에서 도서관 홈페이지를 통해 접속한 후 [바로가기]를 클릭해야 계정이 생성됩니다!'
                }
            />
            <Img />
        </div>
    );
};

export default BodyBox;
