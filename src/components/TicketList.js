import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchTickets, deleteTicket } from '../actions/ticketActions'; // Import deleteTicket action
import { FaRegFlag, FaTrash, FaSearch } from 'react-icons/fa'; // Import icons from react-icons

const TicketList = ({ tickets, loading, error, fetchTickets, deleteTicket, filter, onTicketSelect }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const ticketsPerPage = 7;

  useEffect(() => {
    fetchTickets();
  }, [fetchTickets]);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(filteredTickets.length / ticketsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleDelete = (ticketId) => {
    deleteTicket(ticketId);
  };

  const offset = (currentPage - 1) * ticketsPerPage;

  // Filter tickets based on search criteria and status filter
  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = ticket.name.toLowerCase().includes(searchQuery.toLowerCase())
      || ticket.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filter === 'All' || ticket.status === filter;
    return matchesSearch && matchesStatus;
  });

  const currentTickets = filteredTickets.slice(offset, offset + ticketsPerPage);

  

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  // Mapping of priority to flag icons
  const priorityToIcon = {
    low: <FaRegFlag className="text-blue-500" />,
    medium: <FaRegFlag className="text-yellow-500" />,
    high: <FaRegFlag className="text-red-500" />,
  };

  return (
    <div >
      <div className="flex justify-between mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by Name or Email"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
          />
          <div className="absolute right-0 top-0 mt-3 mr-4">
            <FaSearch className="text-gray-500" />
          </div>
        </div>
        
      </div>
      <div className="overflow-hidden" style={{ height: '400px', width: '100%' }}>
        <table className="min-w-full bg-white border rounded-lg border-gray-200" style={{ tableLayout: 'fixed', width: '100%' }}>
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-gray-800" style={{ width: '15%' }}>Name</th>
              <th className="py-2 px-4 border-b text-gray-800" style={{ width: '20%' }}>Email</th>
              <th className="py-2 px-4 border-b text-gray-800" style={{ width: '8%' }}>Priority</th>
              <th className="py-2 px-4 border-b text-gray-800" style={{ width: '10%' }}>Mode</th>
              <th className="py-2 px-4 border-b text-gray-800" style={{ width: '10%' }}>Status</th>
              <th className="py-2 px-4 border-b text-gray-800" style={{ width: '32%' }}>Description</th>
              <th className="py-2 px-4 border-b text-gray-800" style={{ width: '5%' }}></th> {/* Column for delete icon */}
            </tr>
          </thead>
          <tbody>
            {currentTickets.map((ticket) => (
              <tr key={ticket.email} className="cursor-pointer m-4 rounded-lg hover:bg-gray-100" style={{ border: '5px solid #e2e8f0' }}>
                <td className="py-2 px-4 " style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} onClick={() => onTicketSelect(ticket)}>{ticket.name}</td>
                <td className="py-2 px-4 " style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} onClick={() => onTicketSelect(ticket)}>{ticket.email}</td>
                <td className="py-2 px-4 " style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {priorityToIcon[ticket.priority]}
                </td>
                <td className="py-2 px-4 " style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} onClick={() => onTicketSelect(ticket)}>{ticket.mode}</td>
                <td className="py-2 px-4 " style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} onClick={() => onTicketSelect(ticket)}>{ticket.status}</td>
                <td className="py-2 px-4 " style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} onClick={() => onTicketSelect(ticket)}>{ticket.description}</td>
                <td className="py-2 px-4 ">
                  <button onClick={() => handleDelete(ticket.email)}>
                    <FaTrash className="text-red-500 hover:text-red-700" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-3 py-1 border border-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-3 py-1">{`Page ${currentPage} of ${Math.ceil(filteredTickets.length / ticketsPerPage)}`}</span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(filteredTickets.length / ticketsPerPage)}
          className="px-3 py-1 border border-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tickets: state.ticket.tickets,
  error: state.ticket.error,
});

const mapDispatchToProps = {
  fetchTickets,
  deleteTicket, // Add deleteTicket to mapDispatchToProps
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketList);
