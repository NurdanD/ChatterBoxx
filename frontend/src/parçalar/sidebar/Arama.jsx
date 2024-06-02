import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import useKonuşma from '../../zustand/useKonuşma';
import useGetKonuşmalar from '../../hooks/useGetKonuşmalar';
import toast from 'react-hot-toast';


//Sidebarda bulunan konuşma arama işlemini yapıyoruz.
const Arama = () => {
  const [search, setSearch] = useState("");
  const {setSelectedKonuşma} = useKonuşma()
  const {konuşmalar}=useGetKonuşmalar()

  const handleSubmit= (e) =>{
    e.preventDefault();
    if(!search) return;
    if (search.length<3) {
      return toast.error('En az 3 karakter giriniz...');
    }
  
//Aranan konuşma burda bulunuyor.
  const konuşma= konuşmalar.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

  if (konuşma) {
    setSelectedKonuşma(konuşma);
    setSearch('');
  } else toast.error("Kullanıcı bulunmuyor..");
  };

  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
        <input type='text' placeholder='Ara' className='input input-bordered rounded-full'
        
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
        <IoSearchSharp className='w-6 h-6 outline-none'/>
        </button>

    </form>
  );
};


export default Arama
