import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/common.css';

import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import MyPage from './pages/MyPage';
import HelpPage from './pages/HelpPage';
import QuizPage from './pages/QuizPage';
import AnswerPage from './pages/AnswerPage';
import InfoPage from './pages/InfoPage';
import LoginHandler from './components/loginpage/LoginHandler';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* 메인 페이지 */}
                <Route exact path='/' element={<MainPage />} />
                {/* 로그인 페이지 */}
                <Route exact path='/login' element={<LoginPage />} />
                <Route exact path='/auth' element={<LoginHandler />} />
                {/* 마이페이지 */}
                <Route exact path='/mypage' element={<MyPage />} />
                {/* 문의 페이지 */}
                <Route exact path='/help' element={<HelpPage />} />
                {/* 퀴즈 문제 페이지 */}
                <Route exact path='/quiz/:dDay' element={<QuizPage />} />
                {/* 퀴즈 해설 페이지 */}
                <Route exact path='/answer/:dDay' element={<AnswerPage />} />
                {/* 추가 정보 페이지 */}
                <Route exact path='/info/:dDay' element={<InfoPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
