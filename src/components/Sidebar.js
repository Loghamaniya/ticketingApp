import React, { useContext, useState } from 'react';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ setStatusFilter, setSelectedTicket }) => {
  const { username, setUsername } = useContext(UserContext);
  const navigate = useNavigate();
  
  // State to track active status filter
  const [activeStatus, setActiveStatus] = useState('All');

  const handleLogout = () => {
    localStorage.removeItem('username');
    setUsername('');
    navigate('/');
  };

  return (
    <div style={{ width: '200px' }} className=" bg-gray-800 relative flex flex-col h-screen">
      <h4 className="text-xl text-yellow-100 p-4 pb-1 font-bold mb-1">
        Welcome,
      </h4>
      <h2 className="text-2xl text-yellow-100 overflow-hidden whitespace-nowrap overflow-ellipsis leading-normal p-4 pt-0 font-bold">
        {username}
      </h2>
      
      <ul>
        <li className="hover:bg-gray-500">
          <button
            onClick={() => {
              setStatusFilter('All');
              setActiveStatus('All');
            }}
            className={`block w-full text-lg text-yellow-100 text-left px-5 py-2 ${activeStatus === 'All' ? 'bg-gray-500' : ''}`}
          >
            All
          </button>
        </li>
        <li className="hover:bg-gray-500">
          <button
            onClick={() => {
              setStatusFilter('open');
              setActiveStatus('open');
            }}
            className={`block w-full text-lg text-yellow-100 text-left px-5 py-2 ${activeStatus === 'open' ? 'bg-gray-500' : ''}`}
          >
            Open
          </button>
        </li>
        <li className="hover:bg-gray-500">
          <button
            onClick={() => {
              setStatusFilter('in-progress');
              setActiveStatus('in-progress');
            }}
            className={`block w-full text-lg text-yellow-100 text-left px-5 py-2 ${activeStatus === 'in-progress' ? 'bg-gray-500' : ''}`}
          >
            In-Progress
          </button>
        </li>
        <li className="hover:bg-gray-500 mb-20">
          <button
            onClick={() => {
              setStatusFilter('close');
              setActiveStatus('close');
            }}
            className={`block w-full text-lg text-yellow-100 text-left px-5 py-2 ${activeStatus === 'close' ? 'bg-gray-500' : ''}`}
          >
            Close
          </button>
        </li>
        <li className="fixed bottom-10">
          <button
            onClick={handleLogout}
            className="rounded text-gray-800 ml-10 text-left px-4 py-2 bg-yellow-100 hover:bg-gray-500"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
