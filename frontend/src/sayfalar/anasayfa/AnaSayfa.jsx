import React from 'react'
import Sidebar from '../../parçalar/sidebar/Sidebar';
import MesajKutusu from '../../parçalar/mesajlar/MesajKutusu';

const AnaSayfa = () => {
  return (
   <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40'>
    <Sidebar/>
    <MesajKutusu />
       
    </div>
  );
};

export default AnaSayfa;
