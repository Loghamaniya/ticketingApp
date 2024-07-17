import React from 'react';

const TicketDetail = ({ ticket, onEdit }) => {
  return (
    <div className="border-l border-gray-800 p-4 rounded h-full flex flex-col">
      <h2 className="text-xl font-bold mb-4">Ticket Details</h2>
      <div className="flex-grow flex flex-col justify-between space-y-4 h-full">
        <div className="flex flex-col space-y-6 h-full">
            <br></br>
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
              className=" hover:bg-gray-500 px-10 py-2 bg-gray-800 text-yellow-100 rounded"
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
