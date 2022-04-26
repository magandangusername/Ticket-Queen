import React from "react";
import dateFormat from "dateformat";

const ListingTicketClone = ({
    ticketClone,
    setTicketClone,
    isTicketEditLoading,
    handleTicketCloneEdit,
    isTicketSaving,
    handleTicketCloneUpdate
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
                                <h4>{ticketClone[0].event_name}</h4>
                                <p>
                                    <b>
                                        {dateFormat(
                                            ticketClone[0].event_date,
                                            "dddd, dd mmmm yyyy"
                                        )}
                                    </b>
                                    <br />
                                    {ticketClone[0].event_venue}
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
                                                        value={clone.section}
                                                        onChange={(e) =>
                                                            handleTicketCloneEdit(
                                                                e.target.value,
                                                                index,
                                                                "section"
                                                            )
                                                        }
                                                        required
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
                                                        value={clone.row}
                                                        onChange={(e) =>
                                                            handleTicketCloneEdit(
                                                                e.target.value,
                                                                index,
                                                                "row"
                                                            )
                                                        }
                                                        required
                                                    />
                                                </td>

                                                <td>
                                                    <input
                                                        type="seatfrom"
                                                        className="form-control"
                                                        id="exampleFormControlInput1"
                                                        value={clone.seats_from}
                                                        onChange={(e) =>
                                                            handleTicketCloneEdit(
                                                                e.target.value,
                                                                index,
                                                                "seats_from"
                                                            )
                                                        }
                                                        required
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="seatto"
                                                        className="form-control"
                                                        id="exampleFormControlInput1"
                                                        value={clone.seats_to}
                                                        onChange={(e) =>
                                                            handleTicketCloneEdit(
                                                                e.target.value,
                                                                index,
                                                                "seats_to"
                                                            )
                                                        }
                                                        required
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        id="exampleFormControlInput1"
                                                        value={clone.price === "NaN" ? 0 : Number(clone.price).toString()}
                                                        onChange={(e) =>
                                                            e.target.value === "" ?
                                                            handleTicketCloneEdit(
                                                                0,
                                                                index,
                                                                "price"
                                                            )
                                                            :
                                                            handleTicketCloneEdit(
                                                                parseFloat(e.target.value).toFixed(2),
                                                                index,
                                                                "price"
                                                            )
                                                        }
                                                        required
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        id="exampleFormControlInput1"
                                                        value={clone.price === "NaN" ? 0 : Number(clone.proceeds).toString()}
                                                        onChange={(e) =>
                                                            e.target.value === "" ?
                                                            handleTicketCloneEdit(
                                                                0,
                                                                index,
                                                                "proceeds"
                                                            )
                                                            :
                                                            handleTicketCloneEdit(
                                                                parseFloat(e.target.value).toFixed(2),
                                                                index,
                                                                "proceeds"
                                                            )
                                                        }
                                                        required
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        id="exampleFormControlInput1"
                                                        value={
                                                            Number(clone.tickets_available).toString()
                                                        }
                                                        onChange={(e) =>
                                                            handleTicketCloneEdit(
                                                                parseFloat(e.target.value).toFixed(0),
                                                                index,
                                                                "tickets_available"
                                                            )
                                                        }
                                                        required
                                                    />
                                                </td>
                                                <td className="text-justify">
                                                    {index ? (
                                                        <i
                                                            className="fa text-danger fa-times-circle"
                                                            aria-hidden="true"
                                                            onClick={() =>
                                                                setTicketClone(
                                                                    ticketClone.filter(
                                                                        (
                                                                            ticket,
                                                                            ticketindex
                                                                        ) =>
                                                                            ticketindex !==
                                                                            index
                                                                    )
                                                                )
                                                            }
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
                                            ticketClone[ticketClone.length - 1],
                                        ])
                                    }
                                >
                                    + Add another clone
                                </button>
                                <div>
                                    {isTicketSaving ? (
                                        <button
                                            type="button"
                                            className="btn btn-success"
                                            disabled
                                        >
                                            Saving...
                                        </button>
                                    ) : (
                                        <button
                                            type="button"
                                            className="btn btn-success"
                                            data-bs-dismiss="modal"
                                            onClick={() =>
                                                handleTicketCloneUpdate(

                                                )
                                            }
                                        >
                                            Save
                                        </button>
                                    )}

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