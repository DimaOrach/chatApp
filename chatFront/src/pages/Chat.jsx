import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Form from '../components/Form';

const Chat = ({ socket }) => {
  const [chatInitiated, setChatInitiated] = useState(false);
  const [chats, setChats] = useState([]);
  const [receiverId, setReceiverId] = useState();
  const userId = window.localStorage.getItem('userId'); 

  useEffect(() => {
    socket.emit('join', userId);
  });

  useEffect(() => {
    const handleNewMessages = (message) => {
      if(receiverId === message.sender) {
        setChats(state => [...state, {sender: message.sender, sontent: message.content}]);
      }
      
    }
    socket.on('newMessage', handleNewMessages);
    return () => {
      socket.off('newMessage', handleNewMessages); // Вимикання слухача при розмонтуванні компонента
    }
  }, [socket, receiverId]);
  
  const styles = {
    container: {
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
      textAlign: 'center',
      position: 'relative', // Для використання накладання
    },
    chatBox: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    },
    welcomeText: {
      fontSize: '3rem',
      padding: '0.75rem 0',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      color: '#4A5568',
      fontWeight: 'bold',
      borderRadius: '0.75rem',
      fontFamily: 'Anek',
    },
    chatContent: {
      overflowY: 'auto',
      marginBottom: '20px',
      display: 'flex',
      flexDirection: 'column',
      height: '80vh',
      width: '100%',
    },
    chatMessage: (isSender) => ({
      display: 'flex',
      
      padding: '8px 16px',
      //якщо повідомлення від мене - воно зліва, якщо від когось - справа
      justifyContent: isSender ? 'flex-end' : 'flex-start',
      
    }),
    messageBox: (isSender) => ({
      
      padding: '8px',
      margin: '8px 0',
      borderRadius: '8px',
      backgroundColor: isSender ? '#4299e1' : '#ffffff',
      color: isSender ? '#ffffff' : '#000000',
    }),
  };

  return (
    <div style={styles.container}>
      <Sidebar
        setChatInitiated={setChatInitiated}
        setChats={setChats}
        setReceiverId={setReceiverId}
      />

      <div>
        {chatInitiated ? (
          <div style={styles.chatContent}>
            {chats &&
              chats.map((chat, index) => (
                <div
                  key={index}
                  style={styles.chatMessage(chat.sender === userId)}
                >
                  <div style={styles.messageBox(chat.sender === userId)}>
                    {chat.content}
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div style={styles.chatBox}>
            <h2 style={styles.welcomeText}>✋Welcome✋</h2>
          </div>
        )}
        <Form receiverId={receiverId} setChats={setChats} chats={chats} />
      </div>
    </div>
  );
};

export default Chat;
