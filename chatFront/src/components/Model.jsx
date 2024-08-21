const Model = ({ setIsModelOpen, isModelOpen, children }) => {
    if (!isModelOpen) return null;
  
    // Inline стилі
    const overlayStyle = {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(31, 41, 55, 0.75)', 
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 50
    };
  
    const modalStyle = {
      backgroundColor: 'white',
      borderRadius: '0.5rem', 
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
      padding: '1.5rem', 
      width: '100%',
      maxWidth: '28rem' 
    };
  
    const closeButtonStyle = {
      position: 'absolute',
      top: '1rem', 
      right: '1rem', 
      color: '#000', 
      fontSize: '1.875rem', 
      cursor: 'pointer',
    };
  
    return (
      <div style={overlayStyle}>
        <div style={modalStyle}>
          <button style={closeButtonStyle} onClick={() => setIsModelOpen(false)}>
            &times;
          </button>
          {children}
        </div>
      </div>
    );
  }
  
  export default Model;
  