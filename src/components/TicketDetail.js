import React from 'react';
import { FaTimes } from 'react-icons/fa'; // Import the close icon

const TicketDetail = ({ ticket, onEdit, onClose }) => {
  return (
    <div className="border-l border-gray-800 p-4 rounded h-full flex flex-col relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Ticket Details</h2>
        <button onClick={onClose} className="text-gray-800 hover:text-gray-600">
          <FaTimes />
        </button>
      </div>
      <div className="flex-grow flex flex-col justify-between space-y-4 h-full">
        <div className="flex flex-col space-y-6 h-full">
          <div>
            <strong>Name:</strong> {ticket.name}
          </div>
          <div>
            <strong>Email:</strong> {ticket.email}
          </div>
          <div>
            <strong>Priority:</strong> {ticket.priority}
          </div>
          <div>
            <strong>Mode:</strong> {ticket.mode}
          </div>
          <div>
            <strong>Status:</strong> {ticket.status}
          </div>
          <div>
            <strong>Description:</strong> {ticket.description}
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => onEdit(ticket)} // Pass ticket to onEdit callback
              className="hover:bg-gray-500 px-10 py-2 bg-gray-800 text-yellow-100 rounded"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDetail;
