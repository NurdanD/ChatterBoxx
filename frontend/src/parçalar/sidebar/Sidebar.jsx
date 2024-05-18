import React from 'react'
import Konuşmalar from './Konuşmalar'
import Arama from './Arama'
import Çıkış from './Çıkış'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-50 p-4 flex flex-col'>
        <Arama />
        <div className='divider px-3'></div>
        <Konuşmalar />
        
        <Çıkış />

    </div>
  )
}

export default Sidebar