import React, { useState, useEffect } from 'react';
import Model from '../components/Model';
import Register from '../components/Register';
import Login from '../components/Login';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const [isModelOpen, setIsModelOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const openSignUp = () => {
      setIsModelOpen(true);
      setIsLogin(false);
    }
    const openLogin = () => {
      setIsModelOpen(true);
      setIsLogin(true);
    }

    const navigate = useNavigate();
      useEffect(() => {
      const verifyUser = async () => {
      try{
        const response = await axios.get('http://localhost:5000/chat/user/verify', {
          headers: {
            'Authorization': `Bearer ${window.localStorage.getItem('chat-token')}`
          }
        }); 
          console.log(response);
        
          if(response.data.msg === 'Success!') {
          navigate('/chat');
        } 
      } catch(error) {
        console.log(error);
      }
      }

      verifyUser();
    }, []);

  return (
    <div 
      style={{
        height: '100vh',
        margin: 0,
        padding: 0,
        backgroundImage: "url('/cube.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}
    >
      <div >
        <h2 
          style={{
            fontSize: '6rem', 
            padding: '0.75rem 0', 
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            color: '#4A5568', 
            fontWeight: 'bold', 
            borderRadius: '0.75rem', 
            fontFamily: 'Anek', 
            
          }}
        >
          ✋Welcome✋
        </h2>
        <button 
          style={{
            padding: '0.75rem',
            backgroundColor: '#2B6CB0', 
            color: '#FFFFFF', 
            fontSize: '1.875rem', 
            fontWeight: 'bold', 
            borderRadius: '0.75rem', 
            marginTop: '0.5rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2B6AB0'} 
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2B6CB0'} 
          onClick={() => setIsModelOpen(true)}
        >
          Login / Register
        </button>
      </div>
      <Model isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
        {isLogin ? <Login openSignUp={openSignUp} /> : <Register openLogin={openLogin} />}
        </Model>
    </div>
  );
};

export default Home;


// інший варіант
// const Home = () => {
//     return (
//       <div className='flex items-center justify-center h-screen bg-gray-100'>
//           <div style={{backgroundImage: "url('/cube.jpg')"}}
//           className='bg-cover w-2/4 h-[calc(100vh-60px)]'>
//               <div>
//                   <h2>Welcome</h2>
//                   <button>Login / Register</button>
//               </div>
//           </div>
//       </div>
//     )
//   }
  
