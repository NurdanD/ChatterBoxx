import React from 'react'

const Mesaj = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="user avatar"/>

            </div>
        </div>

        <div className="chat-bubble text-gray-300">Nasılsın</div>
        <time className="text-xs opacity-100">12:45</time>


    </div>
  )
}

export default Mesaj