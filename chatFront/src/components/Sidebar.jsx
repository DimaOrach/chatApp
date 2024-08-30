import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({setChatInitiated, setChats, setReceiverId}) => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const handleLogout = () => {
        window.localStorage.removeItem('chat-token');
        window.localStorage.removeItem('userId');
        navigate('/');
    }

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const users = await axios.get('http://localhost:5000/chat/users', {
                    headers: {
                        'Authorization': `Bearer ${window.localStorage.getItem('chat-token')}`
                    }
                });
                setUsers(users.data.users);
            } catch (error) {
                navigate('/');
                console.log(error);
            }
        }
        fetchUsers();
    }, []);

    const startChat = async (id) => {
        try{
            const response = await axios.get(
                'http://localhost:5000/chat/message/read/' + id,
                {
                  headers: {
                    Authorization: `Bearer ${window.localStorage.getItem('chat-token')}`,
                  },
                }
              );
              setChats(response.data);
        } catch(error) {
            if(error.response.data.message === 'Not Found') {
                setChats([]);
            }
            console.log(error);
        }
        setChatInitiated(true);
        setReceiverId(id);
    }

    const styles = {
        container: {
            width: '20%', 
            height: '100vh', 
            backgroundColor: 'black',
            padding: '16px',
            boxSizing: 'border-box', 
            position: 'fixed', 
            top: 0,
            left: 0, 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between', 
            zIndex: 1
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
            flexGrow: 1, 
            overflowY: 'auto',
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
            borderRadius: '4px',
            backgroundColor: '#3b82f6',
            color: 'white',
            padding: '8px',
            textAlign: 'center',
            cursor: 'pointer',
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
                            onClick={() => startChat(user._id)}
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
            ) : (
                <p style={styles.noUsers}>No Users</p>
            )}
            <button
            onClick={handleLogout}
                style={styles.logoutButton}
            >
                Logout
            </button>
        </div>
    );
};

export default Sidebar;
