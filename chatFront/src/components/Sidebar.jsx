import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            try{
                const users = await axios.get('http://localhost:5000/chat/users', {
                    headers: {
                      'Authorization': `Bearer ${window.localStorage.getItem('chat-token')}`
                    }
                  });
                setUsers(users.data.users);
            } catch(error) {
                navigate('/');
                console.log(error);
            }
        }
        fetchUsers()
    }, []);
    
    const styles = {
        container: {
            width: '25%',
            backgroundColor: 'black',
            padding: '16px',
            backgroundOpacity: 0.7,
            position: 'relative',
            boxSizing: 'border-box',  // Додано для правильного врахування padding і border
        },
        input: {
            width: '100%',
            padding: '8px',
            marginBottom: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxSizing: 'border-box',
        },
        userContainer: {
            spaceY: '16px',
        },
        userItem: {
            display: 'flex',
            alignItems: 'center',
            padding: '8px',
            cursor: 'pointer',
            hover: {
                backgroundColor: '#ccc',
            },
        },
        userImage: {
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '1px solid #ccc',
        },
        userName: {
            color: 'white',
            fontSize: '14px',
            fontWeight: 'bold',
            marginLeft: '16px',
        },
        noUsers: {
            color: 'white',
            fontWeight: 'bold',
        },
        logoutButton: {
            position: 'fixed',
            bottom: '280px',
            right: '800px',
            left: '800px',
            borderRadius: '4px',
            backgroundColor: '#3b82f6',
            color: 'white',
            padding: '8px',
            textAlign: 'center',
            hover: {
                backgroundColor: '#2563eb',
            },
        },
    };
    
    return (
        <div style={styles.container}>
            <input 
            type='text' 
            placeholder='Search'
            style={styles.input}
            />
            {users.length > 0 ? (
                <div style={styles.userContainer}>
                    {users.map(user => (
                        <div
                        key={user._id}
                        style={styles.userItem}
                        >
                            <img src='' 
                            alt='' 
                            style={styles.userImage}
                            />
                            <span style={styles.userName}>
                                {user.username}
                            </span>
                        </div>
                    ))}
                </div>
            ): (
                <p style={styles.noUsers}>No Users</p>
            )}
            <button
                style={styles.logoutButton}
            >
                Logout
            </button>
        </div>
    )
}

export default Sidebar