import { useState,useDispatch, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import AuthService from "./appwrite/auth";
// import { login, logout } from './features/auth/authSlice';


function App() {
  
  const [loading,setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    AuthServicegetCurrentUser().then((userData) =>{}).finally()
  },[])

  return (
    <>
     <h1>hello react i am learning react </h1>
    
    </>
  )
}

export default App
