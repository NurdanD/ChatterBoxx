import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useKonuşma from '../../zustand/useKonuşma';
import { extractTime } from '../../utils/extractTime';

//Mesaj kutusunda mesajlaşırken oluşan görüntüyü ayarlıyoruz.
const Mesaj = ({mesaj}) => {
  const {authUser}= useAuthContext();
  const {selectedKonuşma}=useKonuşma()
  const fromMe =mesaj.senderId === authUser._id;
  const formattedTime = extractTime(mesaj.createdAt);
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilePic : selectedKonuşma?.profilePic;
  const bubbleBgColor = fromMe ? 'bg-blue-900' :"";
   
  return (
    <div className={`chat ${chatClassName}`}>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
            <img alt='user avatar' src={profilePic} />

            </div>
        </div>

        <div className={`chat-bubble text-white ${bubbleBgColor} pb-2`}>{mesaj.message} </div>
        <div className='chat-footer opacity-100 text-xs flex gap-1 items-center'>{formattedTime}</div>

    </div>
  );
};

export default Mesaj;