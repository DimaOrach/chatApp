import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Chat = () => {

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
     <Sidebar />
   </div>
 )
}

export default Chat;