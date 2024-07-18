import React, { useState} from 'react';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';
import TicketList from './TicketList';
import CreateTicketForm from './CreateTicketForm'; 
import TicketDetail from './TicketDetail';

const Dashboard = ({  tickets }) => {
  const [filter, setFilter] = useState('All');
  const [showForm, setShowForm] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [addMode, setAddMode] = useState(false);


  const handleCreateTicketClick = () => {
    setShowForm(true);
    setEditMode(false); // Ensure edit mode is off when creating new ticket
    setAddMode(true);
  };

  const handleClose = () => {
    setSelectedTicket(null);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditMode(false); // Ensure edit mode is off when form is closed
    setAddMode(false);
  };

  const handleTicketSelect = (ticket) => {
    setSelectedTicket(ticket);
    setEditMode(false);
    setAddMode(false); // Ensure edit mode is off when selecting ticket
  };


  const handleEditTicket = (ticket) => {
    setSelectedTicket(ticket); // Set selected ticket for editing
    setEditMode(true);
    setAddMode(true);
    setShowForm(true); // Show formik form for editing
  };
  const modifiedTicket=(ticket)=>{
    setSelectedTicket(ticket);

  }


  return (
    <div className="flex bg-white p=0">
      <Sidebar setStatusFilter={setFilter} />
      {/* <div className={` bg-green-500 w-3/4 p-4  ${selectedTicket ? '' : 'w-4/4'}`}> */}
      <div className={`flex-grow  overflow-auto`}>
        <h1 className="flex text-3xl pt-2 font-bold mb-4 justify-center">Ticketing Dashboard</h1>
        <div className="flex justify-end pr-6">
        <button
          onClick={handleCreateTicketClick}
          className="mb-4 px-4 py-2 hover:bg-gray-500 bg-gray-800 text-yellow-100 rounded"
        >
          Create Ticket
        </button>
        </div>
        {showForm && (
          <CreateTicketForm
            setSelectedTicket={modifiedTicket}
            onClose={handleFormClose}
            initialValues={editMode ? selectedTicket : null} 
          />
        )}
        <TicketList tickets={tickets} filter={filter} onTicketSelect={handleTicketSelect} />
      </div>
      {selectedTicket && (!editMode || !addMode) &&(
        <div >
          <TicketDetail
            ticket={selectedTicket}
            onEdit={handleEditTicket} // Pass callback to handle edit button click
            onClose={handleClose}
          />
         </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  tickets: state.ticket.tickets,
});


// export default Dashboard;
export default connect(mapStateToProps)(Dashboard);
