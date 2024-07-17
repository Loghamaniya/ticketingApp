// src/UserContext.js
import React, { createContext, useState ,useEffect} from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // const [username, setUsername] = useState('');
  const [username, setUsername] = useState(() => {
    // Retrieve the username from localStorage if it exists
    const savedUsername = localStorage.getItem('username');
    return savedUsername || '';
  });

  useEffect(() => {
    // Save the username to localStorage whenever it changes
    localStorage.setItem('username', username);
  }, [username]);


  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
