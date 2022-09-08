import React,  {useState} from 'react';
import { useNavigate } from 'react-router';

  const MyPage = () => {
  //   const [isAuthenticated, setIsAuthenticated] = useState<string|null>(sessionStorage.getItem('isAuthenticated'));
  //   const navigate = useNavigate();
  //   const onLogout = (e:any) => {
  //     setIsAuthenticated("false");
  //     sessionStorage.setItem('isAuthenticated', "false");
  //     navigate('/');
  // };

  return(
    <>
      <h1>My Page</h1>
      <div>로그인해야만 접속 가능</div>
      <div>
           <button >로그아웃</button>
      </div>
    </>
  )
}
export default MyPage;