import React, { useEffect, useRef } from 'react'
import Mesaj from './Mesaj'
import useGetMesajlar from '../../hooks/useGetMesajlar'
import MesajSkeleton from '../skeletons/MesajSkeleton';
import useListenMessages from '../../hooks/useListenMessages';

const Mesajlar = () => {
  const {mesajlar,loading} = useGetMesajlar();
  useListenMessages();
  console.log("mesajlar:",mesajlar);


  const lastMesajRef= useRef();
  useEffect(() => {

    setTimeout(() => {lastMesajRef.current?.scrollIntoView({behavior: "smooth"});
  }, 100);
  },[mesajlar]);

  return (
    <div className='px-4 flex-1 overflow-auto'>

      {!loading && mesajlar.length>0 && 
      mesajlar.map((mesaj) => (
        <div key={mesaj._id}   ref={lastMesajRef}>     
          <Mesaj  mesaj={mesaj}/>
          </div>
      ) )}

        {loading && [...Array(3)].map((_, idx) => <MesajSkeleton key={idx} />)}

        {!loading && mesajlar.length === 0 && (
          <p className='text-center'>Mesajlaşmayı başlatın...</p>
        ) }
    </div>
  );
};

export default Mesajlar;