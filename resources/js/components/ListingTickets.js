import React from "react";

const ListingTickets = ({
    ticket,
    handleCheck,
    handlePriceSelect,
    handlePriceChange,
    handleAvailableTicketSelect,
    handleAvailableTicketChange,
    handleTicketEdit,
    concert,
    handleTicketPublishChange,
    ticketTypes
}) => {
    return (
        <tr>
            <td className="border-dark border-1 justify-content-center">
                <div className="container-fluid d-flex justify-content-center">
                    <div className="form-check d-flex justify-content-center">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="ticketselection"
                            onChange={() => handleCheck(ticket.listing_id)}
                            checked={ticket.isSelected}
                        />
                    </div>
                </div>
            </td>
            <td className="border-dark border-1 justify-content-center">
                <div className="container-fluid d-flex justify-content-center">
                    <p className="me-2">{ticket.section}</p>
                    <p>
                        {ticket.row} {ticket.seats_from} {ticket.seats_to}
                    </p>
                </div>
            </td>
            <td className="border-dark border-1 justify-content-center">
                <div className="container-fluid d-flex justify-content-center">
                    <p className="me-2">{ticketTypes.filter((type)=>type.ticket_type_id===ticket.ticket_type_id)[0].ticket_type}</p>
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
                        style={{ width: 75 + "px" }}
                        title="Double click to edit"
                        value={ticket.price}
                        readOnly={!ticket.isPriceSelected}
                        onDoubleClick={() =>
                            handlePriceSelect(ticket.listing_id)
                        }
                        onBlur={() =>
                            ticket.isPriceSelected &&
                            handlePriceSelect(ticket.listing_id)
                        }
                        onChange={(e) =>
                            handlePriceChange(
                                ticket.listing_id,
                                e.target.value,
                                e
                            )
                        }
                        onKeyDown={(e) => e.key === "Enter" && e.target.blur()}
                    />
                    <img
                        // src=""
                        alt="???"
                        style={{ width: 20 + "px", height: 20 + "px" }}
                        className="rounded-circle d-inline"
                    />
                </div>
            </td>

            <td className="border-dark border-1 justify-content-center">
                <div className="container-fluid d-flex justify-content-center">
                    <input
                        type="text"
                        className="form-control d-inline me-2"
                        style={{ width: 75 + "px" }}
                        title="Double click to edit"
                        value={ticket.tickets_available}
                        readOnly={!ticket.isAvailableTicketSelected}
                        onDoubleClick={() =>
                            handleAvailableTicketSelect(ticket.listing_id)
                        }
                        onBlur={() =>
                            ticket.isAvailableTicketSelected &&
                            handleAvailableTicketSelect(ticket.listing_id)
                        }
                        onChange={(e) =>
                            handleAvailableTicketChange(
                                ticket.listing_id,
                                e.target.value,
                                e
                            )
                        }
                        onKeyDown={(e) => e.key === "Enter" && e.target.blur()}
                    />
                    <img
                        // src=""
                        alt="???"
                        style={{ width: 20 + "px", height: 20 + "px" }}
                        className="rounded-circle d-inline"
                    />
                </div>
            </td>
            <td className="border-dark border-1 justify-content-center">
                <div className="d-flex justify-content-center">
                    <p>{ticket.tickets_sold}</p>
                </div>
            </td>
            <td className="border-dark border-1 justify-content-center">
                <div className="form-check form-switch d-flex justify-content-center">
                    {ticket.is_published === 1 ? (
                        <input
                            className="form-check-input me-4"
                            type="checkbox"
                            id="flexSwitchCheckChecked"
                            checked
                            onChange={() => handleTicketPublishChange(ticket.listing_id)}
                        />
                    ) : (
                        <input
                            className="form-check-input me-4"
                            type="checkbox"
                            id="flexSwitchCheckChecked"
                            checked={false}
                            onChange={() => handleTicketPublishChange(ticket.listing_id)}
                        />
                    )}
                    <img
                        // src=""
                        alt="???"
                        style={{ width: 20 + "px", height: 20 + "px" }}
                        className="rounded-circle d-inline"
                    />
                </div>
            </td>
            <td className="border-dark border-1 justify-content-center ">
                <a
                    href=""
                    className="fas fa-edit"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                    onClick={() => handleTicketEdit(ticket.listing_id, concert)}
                ></a>
            </td>
        </tr>
    );
};

export default ListingTickets;
