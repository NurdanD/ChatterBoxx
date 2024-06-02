import React, { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext';
import useKonuşma from '../zustand/useKonuşma';

const useListenMessages = () => {
  const {socket} = useSocketContext();

  const{mesajlar, setMesajlar} = useKonuşma();


  useEffect(() => {
    socket?.on("newMessage",(newMessage) => {
        setMesajlar([...mesajlar,newMessage]);
    });

    return() => socket?.off("newMessage");
  }, [socket,setMesajlar,mesajlar]);


};

export default useListenMessages;