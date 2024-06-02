import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const useGetKonuşmalar = () => {
  
    const [loading,setLoading] = useState(false);
    const [konuşmalar, setKonuşmalar]= useState([]);


    useEffect(() => {

        const getKonuşmalar =async () => {
            setLoading(true);
            try {
                const res= await fetch('/api/users');
                const data= await res.json();
                if(data.error){
                throw new Error(data.error);
        }
                setKonuşmalar(data);
            } catch (error) {
                toast.error(error.message);
            }finally{
                setLoading(false);
            }
        }

            getKonuşmalar();
    }, []);


return {loading,konuşmalar};

}

export default useGetKonuşmalar