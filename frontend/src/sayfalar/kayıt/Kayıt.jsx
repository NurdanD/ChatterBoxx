import React, { useState } from 'react'
import Cinsiyet from './Cinsiyet'
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';

const Kayıt = () => {


    const [inputs, setInputs] = useState({
        fullName:'',
        username: '',
        password:'',
        confirmPassword:'',
        gender:'',

    });

    
    const {loading, signup} = useSignup();

    const handleCinsiyetKutusu = (gender) =>{
        setInputs({...inputs,gender})
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        await signup(inputs);
        
    }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-md shadow-2xl bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40'>
        <h1 className='text-3xl font-semibold text-center text-gray-100'>
                ChatterBox
            </h1>

            <form onSubmit={handleSubmit}>
            <div className='mt-4'>
                <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                    <input type="text" className="grow" placeholder="Tam Ad" 
                    value={inputs.fullName}
                    onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
                    />
                </label>
                </div>

                <div className='mt-4'>
                <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                    <input type="text" className="grow" placeholder="Kullanıcı Adı" 
                    value={inputs.username}
                    onChange={(e) => setInputs({...inputs, username: e.target.value})}/>
                </label>
                </div>

                <div className='mt-4'>
                    <label className="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
                </svg>
                <input type="password" className="grow" placeholder="Şifre" 
                value={inputs.password}
                onChange={(e) => setInputs({...inputs, password: e.target.value})}/>
                    </label>
                </div>

                <div className='mt-4'>
                    <label className="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
                </svg>
                <input type="password" className="grow" placeholder="Şifre Tekrar"
                value={inputs.confirmPassword}
                onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})} />
                    </label>
                </div>

                <Cinsiyet onCinsiyetKutusu ={handleCinsiyetKutusu} selectedGender= {inputs.gender}/>

                <Link to={"/giriş"} className='text-sm hover:underlin hover:text-red-700 mt-2 inline-block' href='#'>
                    Zaten hesabınız var mı?
                </Link>

                <div className='mt-4'>
                <button className="btn btn-block mt-2 btn-info"
                    disabled={loading}
                    >
                            {loading ? <span className='loading loading-spinner'></span> : "Kaydol"}

                    </button>
                </div>


            </form>


        </div>


    </div>
  );
};

export default Kayıt

