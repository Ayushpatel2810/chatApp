import React, { useEffect } from 'react'
import { useSocketContext } from './socketContext'
import useConversation from '../zustand/useConversation'
import { Socket } from 'socket.io-client'

const useGetSocketMessage=()=> {
    const {socket} = useSocketContext()
    const {messages,setMessage} = useConversation()

    useEffect(()=>{
        socket.on("newMessage",(newMessage)=>{
            setMessage([...messages,newMessage])
        })
        return ()=>{
            socket.off("newMessage")
        }
    },[socket,messages,setMessage])
  
}

export default useGetSocketMessage