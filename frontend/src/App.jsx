import React from 'react'
import Left from './home/rightpart/leftpart/Left'
import Right from './home/rightpart/Right'
import Signup from './components/signup'
import Login from './components/Login'
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from './context/Authprovider'
import Loading from './components/Loading'
import  { Toaster } from 'react-hot-toast';
function App() {
  const [authUser,setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
    <Routes>
      <Route 
         path='/'
          element={
            authUser? (
            <div className="flex h-screen">
              <Left />
              <Right/>
            </div>
            
          ):(
          //  <Login/>
        <Navigate to={"/login"} />
          )
        }
      />
      <Route path='/login' element={authUser? <Navigate to={"/"}/>:<Login />} />
      <Route path='/signup'  element={authUser? <Navigate to={"/"}/>:<Signup />} />
    </Routes>
    <Toaster />
    </>
  );
}

export default App;