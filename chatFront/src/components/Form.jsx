import React from 'react'

const Form = () => {
    const styles = {
        container: {
            padding: '10px',
            position: 'fixed',
            bottom: 0,
            left: '22%',
            right: '2%',
            backgroundColor: 'white',
            display: 'flex',
            alignItems: 'center',
            backgroundOpacity: 0.8,
            borderRadius: '16px', // округляє края контейнера
            margin: '16px', // відступ від країв екрану
            
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
            marginLeft: '8px', // Додаємо відступ зліва від кнопки
        }
    };

    return (
        <div style={styles.container}>
            <input
                type='text'
                placeholder='Type your message...'
                style={styles.input}
            />
            <button
                style={styles.button}
            >
                Send
            </button>
        </div>
    )
}

export default Form;
