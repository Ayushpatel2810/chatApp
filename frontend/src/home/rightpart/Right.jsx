import React, { useEffect } from 'react'
import Chatuser from './Chatuser';
import Messages from './Messages';
import Typesend from './Typesend';
import useConversation from '../../zustand/useConversation';
import {useAuth} from "../../context/Authprovider.jsx"

function Right() {
  const {selectedConversaton,setSelectedConversation} =useConversation()
  useEffect(()=>{
    return setSelectedConversation(null)
  },[setSelectedConversation]) 

  return (
    <div className="w-[70%]  bg-slate-900 text-gray-300">
    <div>
      {!selectedConversaton?(
        <NoChatSelected />
        ):(
     <>
     <Chatuser/>
     <div 
         className="flex-1 overflow-y-auto"  
         style={{maxHeight:"calc(92vh - 8vh)"}}
      >
      <Messages/>
    </div>
     <Typesend />
     </>
     )}
      </div>
    </div>
  )
}

export default Right;

const NoChatSelected = ()=>{
  const [authUser] = useAuth()
  return (
    <>
     <div className=' flex h-screen items-center justify-center'>
      <h1 className="text-center ">Welcome<span className='font-semibold text-x1'>{authUser.user.fullname}</span>
      <br />
       No chat selected, please start conversation by selecting anyone to your contacts
      </h1>
     </div>
    </>
  )
}