import React, { useContext } from 'react';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ setStatusFilter }) => {
  const { username, setUsername } = useContext(UserContext);

  // const handleLogout = () => {
  //   // Remove username from context
  //   setUsername('');
  // };

  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove username from context
    setUsername('');
    // Redirect to the login page
    navigate('/');
  };

  return (
    <div className="w-1/11 bg-gray-800 h-screen">
      <h2 className="text-2xl text-yellow-100 p-4 font-bold mb-4">Welcome, {username}</h2>
      <ul>
        <li className="hover:bg-gray-500">
          <button
            onClick={() => setStatusFilter('All')}
            className="block w-full text-yellow-100 text-left px-4 py-2"
          >
            All
          </button>
        </li>
        <li className="hover:bg-gray-500">
          <button
            onClick={() => setStatusFilter('open')}
            className="block w-full text-yellow-100 text-left px-4 py-2"
          >
            Open
          </button>
        </li>
        <li className="hover:bg-gray-500">
          <button
            onClick={() => setStatusFilter('in-progress')}
            className="block w-full text-yellow-100 text-left px-4 py-2 hover:bg-gray-500"
          >
            In-Progress
          </button>
        </li>
        <li className="hover:bg-gray-500">
          <button
            onClick={() => setStatusFilter('close')}
            className="block w-full text-yellow-100 text-left px-4 py-2"
          >
            Close
          </button>
        </li>
      </ul>
      <div className="ml-6  absolute bottom-11 ">
        <button
          onClick={handleLogout}
          className="block w-full rounded text-gray-800 text-left px-4 py-2 bg-yellow-100 hover:bg-gray-500"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
