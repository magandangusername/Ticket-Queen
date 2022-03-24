import React from "react";
import ListingTickets from "./ListingTickets";

const ListingConcerts = ({ concert, tickets, handleCheck, handlePriceSelect, handlePriceChange, handleAvailableTicketSelect, handleAvailableTicketChange }) => {
    return (
        <>
            <tr
                className="clickable js-tabularinfo-toggle"
                data-toggle="collapse"
                id="row2"
                data-target={`.a${concert.ConcertID}`}
            >
                <td>
                    <div className="col-sm-6">
                        <div className="row mb-2">
                            <a href="#" className="link">
                                <button
                                    type="button"
                                    name="edit"
                                    id={concert.ConcertID}
                                    className="edit btn btn-xs btn-outline-danger btn-sm my-0"
                                >
                                    <i className="fa fa-plus-circle"></i>
                                </button>
                            </a>
                        </div>
                    </div>
                </td>
                <td>
                    <div className="d-flex align-items-center">
                        <div className="ms-3 pe-5">
                            <p className="fw-bold mb-1" id="ticketinfocontent">
                                {concert.ConcertName} [{concert.ConcertID}]
                            </p>
                            <p className="text-white-50 mb-0">
                                {concert.ConcertDate}
                            </p>
                            <p className="text-white-50 mb-0">
                                {concert.Location}
                            </p>
                        </div>
                    </div>
                </td>
                <td>
                    <p className="text-white-50 mb-0">Last Minute Sales Event</p>
                </td>
                <td>
                    <p className="fw-normal mb-1 text-light">Available Tickets</p>
                    <p className="text-white-50 mb-0">{concert.Total_Available}</p>
                </td>
                <td>
                    <p className="fw-normal mb-1 text-light">Ticket Sold</p>
                    <p className="text-white-50 mb-0">{concert.Total_Sold}</p>
                </td>
                <td>
                    <div className="border border-dark border-2 container-fluid h-auto bg-danger rounded">
                        <p className="fw-normal-50 mb-1">No. of ticket</p>
                        <p className="text-white-50 mb-0">Sold in the last</p>
                        <p className="text-black-50 mb-1">No. of days</p>
                    </div>
                </td>
                <td>
                    <p className="text-muted mb-0">{concert.remaining_days}</p>
                </td>
                <td></td>
            </tr>
            <tr
                className={`tabularinfo__subblock collapse a${concert.ConcertID}`}
            >
                <td colSpan="8">
                    <table
                        className="table-active table table-bordered"
                        id="rowcontent"
                    >
                        <thead>
                            <tr>
                                <th className="text-center border-dark"></th>
                                <th className="text-center border-dark">Ticket Details</th>
                                <th className="text-center border-dark">Ticket Type</th>
                                <th className="text-center border-dark">Visibility</th>
                                <th className="text-center border-dark">Price</th>
                                <th className="text-center border-dark">
                                    Available Tickets
                                </th>
                                <th className="text-center border-dark">Sold tickets</th>
                                <th className="text-center border-dark">Publish</th>
                                <th className="text-center border-dark"></th>
                            </tr>
                        </thead>

                        {tickets.length ? (
                            <tbody>
                                {tickets.map((ticket) =>
                                    ticket.ConcertID === concert.ConcertID & ticket.status === "active" ? (
                                        <ListingTickets
                                            key={ticket.Listing_ID}
                                            ticket={ticket}
                                            handleCheck={handleCheck}
                                            handlePriceSelect={handlePriceSelect}
                                            handlePriceChange={handlePriceChange}
                                            handleAvailableTicketSelect={handleAvailableTicketSelect}
                                            handleAvailableTicketChange={handleAvailableTicketChange}
                                        />
                                    ) : null
                                )}
                            </tbody>
                        ) : null}
                    </table>
                </td>
            </tr>
        </>
    );
};

export default ListingConcerts;

// if (document.getElementById("ListingConcerts")) {
//     ReactDOM.render(<ListingConcerts />, document.getElementById("ListingConcerts"));
// }
