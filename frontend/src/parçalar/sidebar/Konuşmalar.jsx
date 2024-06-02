import React from 'react'

import useGetKonuşmalar from '../../hooks/useGetKonuşmalar';
import Konuşma from './Konuşma';

const Konuşmalar = () => {
  const {loading,konuşmalar} = useGetKonuşmalar();
  
  return (
    <div className='py-2 flex flex-col overflow-auto'>

      {konuşmalar.map((konuşma,idx) => (
        <Konuşma  key={konuşma._id}
        konuşma={konuşma}
        lastIdx={idx === konuşmalar.length -1}
        />
      ))} 

{loading ? <span className='loading loading-spinner mx-auto'></span> : null}

    </div>
    
  );
};

export default Konuşmalar

