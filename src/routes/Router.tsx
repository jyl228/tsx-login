import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MyPage from '../components/main'
import Login from '../components/login'
import PrivateRoute from './PrivateRouter';


export default function Router() {
  
  return (
    <BrowserRouter>
      <Routes>

        인증 여부 상관 없이 접속 가능한 페이지 정의
        <Route element={<PrivateRoute authentication={false}/>}>
          <Route path="/main" element={<MyPage/>} />
        </Route>

        인증을 반드시 해야지만 접속 가능한 페이지 정의
        <Route element={<PrivateRoute authentication={true}/>}>
          <Route path="/" element={<Login/>} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}