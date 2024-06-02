import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import AnaSayfa from './sayfalar/anasayfa/AnaSayfa';
import Giriş from './sayfalar/giriş/Giriş';
import Kayıt from './sayfalar/kayıt/Kayıt';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';


function App() {
  
const {authUser}= useAuthContext();
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      
     <Routes>

      <Route path='/' element={authUser ? <AnaSayfa />  : <Navigate to={"/giriş"} />} />
      <Route path='/giriş' element={authUser ? <Navigate to="/" /> :<Giriş /> } />
      <Route path='/kayıt' element={authUser ? <Navigate to="/" />  : <Kayıt/>} />
     </Routes>
     <Toaster/>

      
    </div>
  );
};

export default App;
