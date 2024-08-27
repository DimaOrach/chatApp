import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Form from '../components/Form';

const Chat = () => {
  const [chatInitiated, setChatInitiated] = useState(false);
  const [chats, setChats] = useState([]);

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
     <Sidebar
     setChatInitiated = {setChatInitiated} 
     chatInitiated = {chatInitiated}/>

     <div >
       {chatInitiated ? (
        <div>
          <p> Chat Initiated </p>

            <Form />

        </div>) : (
       <div 
         style={{
           display: 'flex',
           justifyContent: 'center',
           alignItems: 'center',
           height: '100%',
         }}
       >
         <h2 
           style={{
             fontSize: '3rem', 
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
       </div>)}
     </div>
   </div>
 )
}

export default Chat;
