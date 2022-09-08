import { useNavigate } from 'react-router';
import React,  {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import {useRecoilState} from "recoil";
import atom from '../recoil/atom';


const Login = () => {
  const [user, setUser] = useRecoilState(atom.userState);
  const navigate = useNavigate();

   useEffect(() => {
     setUser(user => ({
         ...user,
     }));
 }, [user]);
 
  const [inputs, setInputs] = useState({
      id: '',
      pwd: ''
    });

    const{id, pwd}=inputs;

const onChange = (e:any) => {
     const { value, name } = e.target;
     setInputs({
         ...inputs, 
         [name]: value 
       });
 };


 const onClickLogin = async () => {
   try {
       const response = await axios.post('http://192.168.204.158:3000/api/user/auth',{
         password: pwd, // 수정
         username: id,
         withCredentials: true,
          crossDomain: true, 
          credentials: "include"
       })
       if (response.status === 200) {
        alert("성공 : " +response.headers)
         sessionStorage.setItem('isAuthenticated', 'true');
    
         // 메인으로 이동
           navigate('/main');
       }
   } catch (err) {
       console.log("Error >>", err);
   }

 }




   return (
     <>
       <h1>Login Page</h1>
       <div>로그인 하지 않아야만 접속 가능</div>
    
         <label>
           <p>Username</p>
           <input type="text" name='id' placeholder='id' onChange={onChange} value={id}/>
         </label>
         <label>
           <p>Password</p>
           <input type="password" name='pwd' placeholder='pwd' onChange={onChange} value={pwd}/>
         </label>
         <div>
           <button onClick={onClickLogin}>로그인</button>
         </div>
      
     </>
    
   )
 }
 export default Login;

