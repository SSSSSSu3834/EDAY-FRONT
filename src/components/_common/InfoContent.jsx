import '../../styles/InfoContentStyle.css';

// text는 내용
// type에는 두가지 - smallDot, top, noMargin
// smallDot: 작은 점이 기호로 들어간 글
// top: Title 바로 밑에 들어가는 글 (마진 top이 들어감)
// noMargin : margin-bottom 없을 때(true)
// 그 외는 디폴트값으로 아무것도 타입으로 넘겨주지 않아도 된다.
//①②③④⑤ (동그라미 안 숫자) 는 그냥 텍스트에 포함시켜서 넣으면 된다.
// BodyBox들어가면 예시 들어놓았음. (info/1)

const InfoContent = ({ text, type, noMargin }) => {
    const contentType = ['smallDot', 'top'].includes(type) ? type : 'default';

    const style = {
        marginBottom: noMargin ? '3px' : '20px',
    };

    return (
        <div
            className={['InfoContent', `InfoContent_${contentType}`].join(' ')}
            style={style}
        >
            {text}
        </div>
    );
};

InfoContent.defaultProps = {
    type: 'default',
};

export default InfoContent;
