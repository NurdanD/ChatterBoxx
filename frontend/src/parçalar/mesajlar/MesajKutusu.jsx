import React, { useEffect } from 'react'
import Mesajlar from './Mesajlar'
import MesajGir from './MesajGir'
import useKonuşma from '../../zustand/useKonuşma'
import {TiMessages} from "react-icons/ti"
import { useAuthContext } from '../../context/AuthContext'

const MesajKutusu = () => {
  const {selectedKonuşma, setSelectedKonuşma} = useKonuşma();


  useEffect(() =>{

    return() => setSelectedKonuşma(null);
  }, [setSelectedKonuşma]);

  return (
    <div className='md:min-w-[450px] flex flex-col '>
{!selectedKonuşma ? (
  <NoChatSelected /> ) : (
 
        <>
        <div className='bg-slate-500 px-4 py-2 mb-2'>
            <span className='label-text'></span><span className='text-gray-800 font-bold'>{selectedKonuşma.fullName}</span>
        </div>

        <Mesajlar />
        <MesajGir />

        
        </>
  )}
    </div>
  );
};

export default MesajKutusu;

const NoChatSelected = () => {
  const {authUser}= useAuthContext();
  return(

    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-300 font-semibold flex flex-col items-center gap-2'>
      <p>{authUser.fullName}</p>
      <p>Hoşgeldiniz...</p>
      <TiMessages className= 'text-3xl md:text-6xl text-center'/>

      </div>

    </div>
  );
};


