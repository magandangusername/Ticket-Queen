import React from "react";
import dateFormat from "dateformat";

const ListingTicketClone = ({
    ticketClone,
    setTicketClone,
    isTicketEditLoading,
    handleTicketCloneEdit,
}) => {
    return (
        <div className="modal fade container-fluid" id="clone">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    {isTicketEditLoading ? (
                        <p>Loading data...</p>
                    ) : (
                        <>
                            <div
                                className="modal-header p-2"
                                style={{
                                    background: "#424549",
                                    color: "#edf6ff",
                                }}
                            >
                                <b>
                                    <h4 className="modal-title">
                                        Clone Listing
                                    </h4>
                                </b>

                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                ></button>
                            </div>

                            <div className="form-group modal-body m-1 p-3">
                                <p>
                                    <i className="fa-solid fa-circle-info"></i>
                                    By cloning this listing you are confirming
                                    that all information provided about the
                                    listings you want to create, except the
                                    fields you explicitly change, are the same.
                                </p>
                                <h4>{ticketClone[0].ConcertName}</h4>
                                <p>
                                    <b>
                                        {dateFormat(
                                            ticketClone[0].ConcertDate,
                                            "dddd, dd mmmm yyyy"
                                        )}
                                    </b>
                                    <br />
                                    {ticketClone[0].Location}
                                </p>
                                <table className="container form bg-light text-dark border">
                                    <thead>
                                        <tr>
                                            <th>Section</th>
                                            <th>Row</th>
                                            <th>Seat From</th>
                                            <th>Seat To</th>
                                            <th>Website Price</th>
                                            <th>Proceeds</th>
                                            <th>Available Ticket</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {ticketClone.map((clone, index) => (
                                            <tr className="p-2" key={index}>
                                                <td>
                                                    {/* <select
                                                        className="form-control"
                                                        id="exampleFormControlSelect1"
                                                    >
                                                        <option defaultValue>
                                                            Choose one
                                                        </option>
                                                        <option>Lounge</option>
                                                        <option>417</option>
                                                        <option>
                                                            Lower Tier
                                                        </option>
                                                        <option>
                                                            Upper Tier
                                                        </option>
                                                    </select> */}
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        value={clone.Section}
                                                        onChange={(e)=>handleTicketCloneEdit(e.target.value, index, 'Section')}

                                                    />
                                                </td>
                                                <td>
                                                    {/* <select
                                                        className="form-control"
                                                        id="exampleFormControlSelect1"
                                                    >
                                                        <option>A</option>
                                                        <option>B</option>
                                                        <option defaultValue>
                                                            P
                                                        </option>
                                                        <option>C</option>
                                                        <option>D</option>
                                                    </select> */}
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        value={clone.Row}
                                                        onChange={(e)=>handleTicketCloneEdit(e.target.value, index, 'Row')}
                                                    />
                                                </td>

                                                <td>
                                                    <input
                                                        type="seatfrom"
                                                        className="form-control"
                                                        id="exampleFormControlInput1"
                                                        value={clone.Seats}
                                                        onChange={(e)=>handleTicketCloneEdit(e.target.value, index, 'Seats')}
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="seatto"
                                                        className="form-control"
                                                        id="exampleFormControlInput1"
                                                        value={clone.Seats}
                                                        onChange={(e)=>handleTicketCloneEdit(e.target.value, index, 'Seats')}
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="webprice"
                                                        className="form-control"
                                                        id="exampleFormControlInput1"
                                                        value={clone.Price}
                                                        onChange={(e)=>handleTicketCloneEdit(e.target.value, index, 'Price')}
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="proceeds"
                                                        className="form-control"
                                                        id="exampleFormControlInput1"
                                                        value={clone.Price}
                                                        onChange={(e)=>handleTicketCloneEdit(e.target.value, index, 'Price')}
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="availtick"
                                                        className="form-control"
                                                        id="exampleFormControlInput1"
                                                        value={
                                                            clone.Available_Tickets
                                                        }
                                                        onChange={(e)=>handleTicketCloneEdit(e.target.value, index, 'Available_Tickets')}
                                                    />
                                                </td>
                                                <td className="text-justify">
                                                    {index ? (
                                                        <i
                                                            className="fa text-danger fa-times-circle"
                                                            aria-hidden="true"
                                                            onClick={()=>setTicketClone(ticketClone.filter((ticket, ticketindex)=>ticketindex !== index))}
                                                        ></i>
                                                    ) : null}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="modal-footer m-1 p-2 justify-content-between">
                                <button
                                    type="button"
                                    className="btn btn-light"
                                    onClick={() =>
                                        setTicketClone([
                                            ...ticketClone,
                                            ticketClone[ticketClone.length - 1]
                                        ])
                                    }
                                >
                                    + Add another clone
                                </button>
                                <div>
                                    <button
                                        type="button"
                                        className="btn btn-light"
                                    >
                                        Save
                                    </button>

                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ListingTicketClone;
