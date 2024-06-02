import React from 'react'
import useKonuşma from '../../zustand/useKonuşma'
import { useSocketContext } from '../../context/SocketContext';

const Konuşma = ({konuşma,lastIdx}) => {
    const {selectedKonuşma, setSelectedKonuşma}=useKonuşma();

    const isSelected = selectedKonuşma?._id ===konuşma._id;
    const {onlineUsers} = useSocketContext(); //Çevrimiçi kullanıcılar gösterilir.
    const isOnline = onlineUsers.includes(konuşma._id);

  return (
    <>
    <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-sky-900" : ""} `}
    
    onClick={() => setSelectedKonuşma(konuşma)}
    >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
            <div className='w-12 rounded-full'>
                <img src={konuşma.profilePic} alt="user avatar"/>
            </div>
        </div>

        <div className='flex flex-col flex-1'>
            <div className='flex gap-2 justify-between'>
                <p className='font-bold text-gray-300'> {konuşma.fullName}</p>
            </div>
        </div>
    </div>

    {!lastIdx && <div className='divider my-0 py-0 h-1'/>}
    
    </>
  )
}

export default Konuşma

