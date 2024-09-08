import React, { useState } from 'react'
import { RiLogoutCircleLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import Cookies from "js-cookie";
import toast from 'react-hot-toast';
function Logout() {
  const [loading,setLoading] = useState(false)
  const handleLogOut = async()=>{
    setLoading(true)
       try {
         const res=await axios.post("/api/user/logout")
         localStorage.removeItem("ChatApp");
         Cookies.remove("jwt")
         setLoading(false)
         toast.success("Logged Out Successfully")
         window.location.reload();
       } catch (error) {
         console.log("error in logout ", error);
         toast.error("error in logout")
       }
  }
  return (
    <div className="h-[10vh]">
        <div className="text-4xl text-white hover:bg-slate-700 duration-300 cursor-pointer rounded-full p-2 ml-2 mt-1">
    <RiLogoutCircleLine onClick={handleLogOut}/>
    </div>
    </div>
  )
}

export default Logout;