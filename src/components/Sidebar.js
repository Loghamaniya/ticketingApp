import React, { useContext } from 'react';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ setStatusFilter }) => {
  const { username, setUsername } = useContext(UserContext);


  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove username from context
    setUsername('');
    // Redirect to the login page
    navigate('/');
  };

  return (
    <div className="w-40 bg-gray-800 relative  flex flex-col h-cover">
      <h4 className="text-xl text-yellow-100 p-4 pb-1 font-bold mb-1">
          Welcome,
        </h4>
        <h2 className="text-2xl text-yellow-100 p-4 pt-0 font-bold mb-4 max-w-full truncate">
          {username}
        </h2>
        {/* <p className="text-yellow-100 p-4 mb-4 truncate">{username}</p> */}
      {/* <h2 className="text-2xl text-yellow-100 p-4 font-bold mb-4 truncate">Welcome, {username}</h2> */}
      <ul>
        <li className="hover:bg-gray-500">
          <button
            onClick={() => setStatusFilter('All')}
            className="block w-full text-lg text-yellow-100 text-left px-4 py-2"
          >
            All
          </button>
        </li>
        <li className="hover:bg-gray-500">
          <button
            onClick={() => setStatusFilter('open')}
            className="block w-full text-lg text-yellow-100 text-left px-4 py-2"
          >
            Open
          </button>
        </li>
        <li className="hover:bg-gray-500">
          <button
            onClick={() => setStatusFilter('in-progress')}
            className="block w-full text-lg text-yellow-100 text-left px-4 py-2 hover:bg-gray-500"
          >
            In-Progress
          </button>
        </li>
        <li className="hover:bg-gray-500">
          <button
            onClick={() => setStatusFilter('close')}
            className="block w-full text-lg text-yellow-100 text-left px-4 py-2"
          >
            Close
          </button>
        </li>
      </ul>
      <div className="ml-9  relative mt-60 mr-9">
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
