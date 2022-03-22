import React from "react";

const ListingTickets = ({ ticket }) => {
    return (
        <tr>
            <td>
                <div className="container-fluid">
                    <div className="form-check">
                        <input
                            className="form-check-input ms-3"
                            type="checkbox"
                            // value=""
                            id="ticketselection"
                            readOnly
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
                        // type="text"
                        // className="form-control d-inline"
                        // style="width: 75px"
                        // value={ticket.Price}
                        // // onChange={(e) => handlePriceChange(e.target.value)}
                        // readOnly
                    />
                    <img
                        // src="/images/default.png"
                        // alt="no picture"
                        // style="width: 20px; height: 20px"
                        // className="rounded-circle d-inline"
                    />
                </div>
            </td>

            <td>
                <div className="container-fluid">
                    <input
                        // type="text"
                        // className="form-control d-inline"
                        // style="width: 75px"
                        // value={ticket.Available_Tickets}
                        // readOnly
                    />
                    <img
                        // src="/images/default.png"
                        // alt="no picture"
                        // style="width: 20px; height: 20px"
                        // className="rounded-circle d-inline"
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
                        // checked
                        readOnly
                    />
                    <img
                        // src="/images/default.png"
                        // alt="no picture"
                        // style="width: 20px; height: 20px"
                        // className="rounded-circle d-inline"
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
