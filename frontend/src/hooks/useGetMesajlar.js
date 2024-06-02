import React, { useEffect, useState } from 'react'
import useKonuşma from '../zustand/useKonuşma';
import toast from 'react-hot-toast';

const useGetMesajlar = () => {
    const [loading,setLoading] = useState(false);
    const {mesajlar, setMesajlar, selectedKonuşma} = useKonuşma();

    useEffect(() => {

        const getMessages = async() => {
            setLoading(true)
            const url = `/api/messages/${selectedKonuşma._id}`;
            try {
                const res= await fetch(url);

                const data= await res.json();
            console.log('Message sent successfully:', data);
            if(data.error){
            throw new Error(data.error);
        }

        setMesajlar(data);

            } catch (error) {
                toast.error(error.message)
                
            }finally{
                setLoading(false)
            }
        }


        if(selectedKonuşma?._id) getMessages();

    },[selectedKonuşma?._id,setMesajlar]);


    return {mesajlar,loading};
}

export default useGetMesajlar;