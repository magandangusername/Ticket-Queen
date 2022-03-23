import React from "react";

const ListingTickets = ({ ticket, handleCheck, handlePriceSelect, handlePriceChange }) => {
    return (
        <tr>
            <td>
                <div className="container-fluid">
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input ms-3"
                            id="ticketselection"
                            onChange={() => handleCheck(ticket.Listing_ID)}
                            checked={ticket.isSelected}

                        />
                    </div>
                </div>
            </td>
            <td>
                <div className="container-fluid">
                    <p>{ticket.Section}</p>
                    <p>
                        {ticket.Row} {ticket.Seats}
                    </p>
                </div>
            </td>
            <td>
                <div className="container-fluid">
                    <p>{ticket.Ticket_Type}</p>
                    <a href="#" className="link-primary text-decoration-none">
                        <p>Upload Now</p>
                    </a>
                </div>
            </td>
            <td>
                <div className="container-fluid">
                    <p className="text-warning">No. %</p>
                </div>
            </td>

            <td>
                <div className="container-fluid">
                    <input
                        type="text"
                        className="form-control d-inline"
                        style={{width: 75 + 'px'}}
                        value={ticket.Price}
                        // onChange={(e) => handlePriceChange(e.target.value)}
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

            <td>
                <div className="container-fluid">
                    <input
                        type="text"
                        className="form-control d-inline"
                        style={{width: 75 + 'px'}}
                        value={ticket.Available_Tickets}
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
            <td>
                <div>
                    <p>{ticket.Ticket_Sold}</p>
                </div>
            </td>
            <td>
                <div className="form-check form-switch">
                    <input
                        className="form-check-input"
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
            <td>
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
