import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const Login = ({openSignUp}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:5000/chat/user/login', {username, password});
          console.log(response);
          if(response.data.msg === 'Success!') {
            window.localStorage.setItem('chat-token', response.data.token);
            window.localStorage.setItem('userId', response.data.user._id);
            navigate('/chat');
          }
        } catch(error) {
          console.log(error);
        }
    }


  const containerStyle = {
    marginBottom: '1rem',
  };

  const labelStyle = {
    display: 'block',
    color: '#4a5568', 
    marginBottom: '0.5rem', 
    textAlign: 'left', 
  };

  const inputContainerStyle = {
    display: 'flex',
    justifyContent: 'left', 
    width: '135%',
  };

  const inputStyle = {
    padding: '0.5rem 0.75rem', 
    border: '1px solid #cbd5e0', 
    borderRadius: '0.25rem', 
    width: '70%', 
  };

  const checkboxLabelStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    color: '#4a5568',
  };

  const checkboxStyle = {
    marginRight: '0.5rem',
  };

  const linkStyle = {
    color: '#9b2c2c', 
  };

  const buttonStyle = {
    backgroundColor: '#2563eb',
    color: 'white', 
    padding: '0.5rem 0', 
    borderRadius: '0.25rem',
    border: 'none', 
    cursor: 'pointer', 
    width: '100%', 
  };

  const titleStyle = {
    fontSize: '1.5rem', 
    fontWeight: 'bold', 
    marginBottom: '1rem', 
    textAlign: 'left', 
  };

  const bottomContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1rem', 
  };

  const signUpButtonStyle = {
    ...linkStyle,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    marginLeft: '0.5rem', 
  };

  const textCenterStyle = {
    textAlign: 'center',
  };

  return (
    <div>
      <h2 style={titleStyle}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={containerStyle}>
          <label style={labelStyle}>Username:</label>
          <div style={inputContainerStyle}>
            <input type="text" style={inputStyle} onChange={(e) => setUsername(e.target.value)} 
            placeholder="Enter Username" />
          </div>
        </div>
        <div style={containerStyle}>
          <label style={labelStyle}>Password:</label>
          <div style={inputContainerStyle}>
            <input type="password" style={inputStyle} onChange={(e) => setPassword(e.target.value)} 
            placeholder="********" />
          </div>
        </div>
        <div style={{ ...containerStyle, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <label style={checkboxLabelStyle}>
            <input type="checkbox" style={checkboxStyle} />
            Remember Me
          </label>
          <a href="#" style={linkStyle}>
            Forgot Password?
          </a>
        </div>
        <div style={containerStyle}>
          <button type="submit" style={buttonStyle}>Login</button>
        </div>
      </form>
      <div style={bottomContainerStyle}>
        <span style={{ color: '#4a5568' }}>Don't Have an Account?</span>
        <button style={signUpButtonStyle} onClick={openSignUp}>Sign Up</button>
      </div>
    </div>
  );
};

export default Login;
