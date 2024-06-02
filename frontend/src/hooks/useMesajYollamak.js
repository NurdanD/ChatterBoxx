import React, { useState } from 'react'
import toast from 'react-hot-toast';
import useKonuşma from '../zustand/useKonuşma';

const useMesajYollamak = () => {
  

    const [loading,setLoading] = useState(false);
    const {mesajlar, setMesajlar, selectedKonuşma} = useKonuşma();

    const sendMessage =async (mesaj) =>{
        setLoading(true)
        const url = `/api/messages/send/${selectedKonuşma._id}`;

        try {
            const res= await fetch(url, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({message: mesaj})
            });

            if (!res.ok) {
                throw new Error('Message sending failed');
              }

            const data= await res.json();
            console.log('Message sent successfully:', data);
            if(data.error){
            throw new Error(data.error);
        }
        setMesajlar([...mesajlar,data]);
            
        } catch (error) {
            console.error('Error sending message:', error);
            toast.error(error.message)
        }finally{
            setLoading(false)
         }


    };

    return{sendMessage,loading};

};

export default useMesajYollamak;