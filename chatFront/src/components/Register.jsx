import React, { useState } from 'react';

const Register = ({openLogin}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [file, setFile] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
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
      <h2 style={titleStyle}>Sign Up</h2>
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
            placeholder="Enter Password" />
          </div>
        </div>
        
        <div style={{ marginBottom: '1rem' }}> {}
          <label style={{ display: 'block', color: '#4a5568' }}>Upload Image</label> {}
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            style={{
              border: '1px solid #d1d5db', 
              padding: '0.5rem', 
              display: 'block', 
              width: '100%',
              fontSize: '0.875rem', 
              color: '#6b7280', 
              width: '96%',
              
              // Стилі для кнопки введення файлу
              '::file-selector-button': {
                marginRight: '1rem', 
                padding: '0.5rem 1rem',
                borderRadius: '9999px', 
                border: 'none', 
                fontSize: '0.875rem',
                fontWeight: '600', 
                backgroundColor: '#3b82f6', 
                color: 'white',
                cursor: 'pointer', 
              },
              
              // Стан наведення курсора на кнопку введення файлу
              '::file-selector-button:hover': {
                backgroundColor: '#1d4ed8', 
              },
            }}
          />
        </div>


        <div style={containerStyle}>
          <button type="submit" style={buttonStyle}>Sing Up</button>
        </div>
      </form>
      <div style={bottomContainerStyle}>
        <span style={{ color: '#4a5568' }}>Already Have an Account?</span>
        <button style={signUpButtonStyle} onClick={openLogin}>Login</button>
      </div>
    </div>
  );
};

export default Register;
