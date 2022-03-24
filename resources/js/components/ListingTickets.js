import React from "react";

const ListingTickets = ({ ticket, handleCheck, handlePriceSelect, handlePriceChange, handleAvailableTicketSelect, handleAvailableTicketChange }) => {
    return (
        <tr>
            <td className="border-dark border-1 justify-content-center">
                <div className="container-fluid d-flex justify-content-center">
                    <div className="form-check d-flex justify-content-center">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="ticketselection"
                            onChange={() => handleCheck(ticket.Listing_ID)}
                            checked={ticket.isSelected}

                        />
                    </div>
                </div>
            </td>
            <td className="border-dark border-1 justify-content-center">
                <div className="container-fluid d-flex justify-content-center">
                    <p className="me-2">{ticket.Section}</p>
                    <p>
                        {ticket.Row} {ticket.Seats}
                    </p>
                </div>
            </td>
            <td className="border-dark border-1 justify-content-center">
                <div className="container-fluid d-flex justify-content-center">
                    <p className="me-2">{ticket.Ticket_Type}</p>
                    <a href="#" className="link-primary text-decoration-none">
                        <p>Upload Now</p>
                    </a>
                </div>
            </td>
            <td className="border-dark border-1 justify-content-center">
                <div className="container-fluid d-flex justify-content-center">
                    <p className="text-success">No. %</p>
                </div>
            </td>

            <td className="border-dark border-1 justify-content-center">
                <div className="container-fluid d-flex justify-content-center">
                    <input
                        type="text"
                        className="form-control d-inline me-2"
                        style={{width: 75 + 'px'}}
                        value={ticket.Price}
                        readOnly = {!ticket.isPriceSelected}
                        onDoubleClick={() => handlePriceSelect(ticket.Listing_ID)}
                        onBlur={() => handlePriceSelect(ticket.Listing_ID)}
                        onChange={(e) => handlePriceChange(ticket.Listing_ID, e.target.value, e)}
                        onKeyDown={e => e.key === 'Enter' && handlePriceSelect(ticket.Listing_ID)}
                    />
                    <img
                        // src=""
                        alt="???"
                        style={{width: 20 + 'px', height: 20 + 'px'}}
                        className="rounded-circle d-inline"
                    />
                </div>
            </td>

            <td className="border-dark border-1 justify-content-center">
                <div className="container-fluid d-flex justify-content-center">
                    <input
                        type="text"
                        className="form-control d-inline me-2"
                        style={{width: 75 + 'px'}}
                        value={ticket.Available_Tickets}
                        readOnly = {!ticket.isAvailableTicketSelected}
                        onDoubleClick={() => handleAvailableTicketSelect(ticket.Listing_ID)}
                        onBlur={() => handleAvailableTicketSelect(ticket.Listing_ID)}
                        onChange={(e) => handleAvailableTicketChange(ticket.Listing_ID, e.target.value, e)}
                        onKeyDown={e => e.key === 'Enter' && handleAvailableTicketSelect(ticket.Listing_ID)}
                    />
                    <img
                        // src=""
                        alt="???"
                        style={{width: 20 + 'px', height: 20 + 'px'}}
                        className="rounded-circle d-inline"
                    />
                </div>
            </td>
            <td className="border-dark border-1 justify-content-center">
                <div className="d-flex justify-content-center">
                    <p>{ticket.Ticket_Sold}</p>
                </div>
            </td>
            <td className="border-dark border-1 justify-content-center">
                <div className="form-check form-switch d-flex justify-content-center">
                    <input
                        className="form-check-input me-4"
                        type="checkbox"
                        id="flexSwitchCheckChecked"
                        readOnly
                    />
                    <img
                        // src=""
                        alt="???"
                        style={{width: 20 + 'px', height: 20 + 'px'}}
                        className="rounded-circle d-inline"
                    />
                </div>
            </td>
            <td className="border-dark border-1 justify-content-center ">
                <button
                    type="button"
                    className="btn btn-link btn-sm btn-rounded"
                    readOnly
                >
                    Basta
                </button>
            </td>
        </tr>
    );
};

export default ListingTickets;
