import React, { useState } from 'react';
import axios from 'axios';

const Form = ({ receiverId, setChats, chats }) => {
  const [message, setMessage] = useState('');
  const userId = window.localStorage.getItem('userId');

  const sendMessage = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post(
        'http://localhost:5000/chat/message/send/' + receiverId,
        { content: message },
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem('chat-token')}`,
          },
        }
      );
      setChats([...chats, { content: message, sender: userId }]);
      setMessage();
      
    } catch (error) {
      console.log(error);
    }
  };

  const styles = {
    container: {
      padding: '10px',
      position: 'fixed',
      bottom: 0,
      left: '22%',
      right: '2%',
      backgroundColor: 'white',
      display: 'flex',
      backgroundOpacity: 0.8,
      borderRadius: '16px',
      margin: '16px',
    },
    form: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },
    input: {
      width: '100%',
      padding: '8px',
      border: '1px solid #ccc',
      borderRadius: '8px 0 0 8px',
      boxSizing: 'border-box',
    },
    button: {
      padding: '8px',
      backgroundColor: '#3b82f6',
      color: 'white',
      borderRadius: '0 8px 8px 0',
      cursor: 'pointer',
      marginLeft: '8px',
    },
  };

  return (
    <div style={styles.container}>
      <form onSubmit={sendMessage} style={styles.form}>
        <input
          type='text'
          placeholder='Type your message...'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={styles.input}
        />
        <button type='submit' style={styles.button}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
