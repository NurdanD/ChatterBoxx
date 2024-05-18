import React from 'react'
import Mesajlar from './Mesajlar'
import MesajGir from './MesajGir'

const MesajKutusu = () => {
  return (
    <div className='md:min-w-[450px] flex flex-col '>

        <>
        <div className='bg-slate-500 px-4 py-2 mb-2'>
            <span className='label-text'> To:</span>  <span className='text-gray-800 font-bold'>Ezgi Yıldız</span>
        </div>

        <Mesajlar />
        <MesajGir />

        
        </>
    </div>
  )
}

export default MesajKutusu


