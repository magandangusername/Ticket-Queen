import React from "react";

const ListingNewTicket = ({
    // ticketEdit,
    restrictions,
    listingNotes,
    isTicketEditLoading,
    ticketRestrictionEdit,
    ticketListingNoteEdit,
    handleTicketEditChange,
    ticketEditUpdate,
    isTicketSaving,
    successMsg,
    ticketTypes,

    newTicket,
    setNewTicket,
    ticketTypeSelected,
    isTicketNewLoading,
    handleTicketNewChange,
    ticketNewUpdate
}) => {
    return (
        <div className="modal" id="newTicket" aria-hidden="true">
            <div
                className="modal-dialog modal-lg"
                style={{ overflowY: "initial !important" }}
            >
                <div className="modal-content">
                    {isTicketNewLoading ? (
                        <p>Loading data...</p>
                    ) : (
                        <>
                            {/* <!-- Modal Header --> */}
                            <div className="modal-header "
                            style={{ background: "#424549", color: "#edf6ff"}}
                            >
                                <h4>{newTicket.event_name}</h4>
                                <p>
                                    <b>{newTicket.event_date}</b>
                                    <br />
                                </p>

                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                ></button>
                            </div>

                            {/* <!-- Modal body --> */}
                            <div
                                className="row modal-body"
                                style={{ height: 90 + "vh" }}
                            >
                                <div
                                    className="container-fluid col"
                                    style={{
                                        overflowY: "scroll",
                                        maxHeight: 100 + "%",
                                    }}
                                >
                                    <form>
                                        <div className="row">
                                            <div className="form-group col">
                                                <label htmlFor="exampleFormControlInput1">
                                                    Available Tickets*
                                                </label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="exampleFormControlInput1"
                                                    value={
                                                        Number(newTicket.tickets_available).toString()
                                                    }
                                                    onChange={(e) =>
                                                        setNewTicket({...newTicket, tickets_available: parseFloat(e.target.value).toFixed(0)})
                                                    }
                                                    required
                                                />
                                            </div>

                                            <div className="form-group col">
                                                {/* idk what this thing is in the database*/}
                                                <label htmlFor="exampleFormControlSelect1">
                                                    Ticket Separation
                                                </label>
                                                <select
                                                    className="form-control"
                                                    id="exampleFormControlSelect1"
                                                    onChange={(e) =>
                                                        setNewTicket({...newTicket, ticket_separation: e.target.value})
                                                    }
                                                    value={
                                                        newTicket.ticket_separation ===
                                                        null
                                                            ? ""
                                                            : newTicket.ticket_separation
                                                    }
                                                    required
                                                >
                                                    <option value="any">
                                                        Any
                                                    </option>
                                                    {newTicket.ticket_separation ===
                                                    null ? (
                                                        <option value="none" defaultValue>
                                                            None
                                                        </option>
                                                    ) : (
                                                        <option>None</option>
                                                    )}

                                                    <option value="Avoid leaving one ticket">
                                                        Avoid leaving one ticket
                                                    </option>
                                                    <option
                                                        value="Avoid leaving one or
                                                        three tickets"
                                                    >
                                                        Avoid leaving one or
                                                        three tickets
                                                    </option>
                                                    <option value="Avoid odd numbers">
                                                        Avoid odd numbers
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="form-group col">
                                                <label htmlFor="exampleFormControlInput1">
                                                    Quantity Sold
                                                </label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="exampleFormControlInput1"
                                                    value={
                                                        newTicket.tickets_sold
                                                    }
                                                    readOnly
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="form-group col">
                                                <label htmlFor="exampleFormControlInput1">
                                                    Section*
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="exampleFormControlInput1"
                                                    value={newTicket.section}
                                                    onChange={(e) =>
                                                        setNewTicket({...newTicket, section: e.target.value})
                                                    }
                                                    required
                                                />
                                            </div>

                                            <div className="form-group col">
                                                <label htmlFor="exampleFormControlInput1">
                                                    Row
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="exampleFormControlInput1"
                                                    value={newTicket.row}
                                                    onChange={(e) =>
                                                        setNewTicket({...newTicket, row: e.target.value})
                                                    }
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <label
                                                    className=""
                                                    htmlFor="#inlineFormInputGroupUsername"
                                                >
                                                    Seats
                                                </label>
                                                <div className="input-group">
                                                    {/* this needs to be fixed in the database */}
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="inlineFormInputGroupMinimum"
                                                        value={
                                                            newTicket.seats_from
                                                        }
                                                        onChange={(e) =>
                                                            setNewTicket({...newTicket, seats_from: e.target.value})
                                                        }
                                                        required
                                                    />
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text">
                                                            To
                                                        </div>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="inlineFormInputGroupMaximum"
                                                        value={
                                                            newTicket.seats_to
                                                        }
                                                        onChange={(e) =>
                                                            setNewTicket({...newTicket, seats_to: e.target.value})
                                                        }
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row my-1">
                                            <div className="col">
                                                <label
                                                    className=""
                                                    htmlFor="inlineFormInputGroupUsername"
                                                >
                                                    Website Price*
                                                </label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text">
                                                            A$
                                                        </div>
                                                    </div>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        id="inlineFormInputGroupUsername"
                                                        value={newTicket.price === "NaN" ? 0 : Number(newTicket.price).toString()}
                                                        onChange={(e) =>
                                                            e.target.value === "" ? setNewTicket({...newTicket, price: 0}) : setNewTicket({...newTicket, price: parseFloat(e.target.value).toFixed(2)})
                                                        }
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="col">
                                                {/* i dont see this in the database, so i wont code this */}
                                                <label htmlFor="exampleFormControlSelect1">
                                                    Currency
                                                </label>
                                                <select
                                                    className="form-control"
                                                    id="exampleFormControlSelect1"
                                                    // onChange={(e)=>handleTicketNewChange(
                                                    //     "ticket_separation",
                                                    //     e.target.value
                                                    // )}
                                                    // value={newTicket.ticket_separation === null ? "" : newTicket.ticket_separation}
                                                    required
                                                >
                                                    <option>AUD</option>
                                                    <option>AED</option>
                                                    <option>ARS</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <br />
                                            <p>
                                                <b>
                                                    Select Restrictions on Use
                                                </b>
                                                <br />
                                                If any of the following
                                                conditions apply to your
                                                tickets, please select them from
                                                the list below. If there is a
                                                restriction on the use of your
                                                ticket not shown here, please
                                                stop listing and contact us.
                                                <br />
                                            </p>
                                        </div>
                                        <div className="row">
                                            <div className="listboxes col">
                                                {restrictions.length ? (
                                                    <>
                                                        {restrictions.map(
                                                            (restriction) => (
                                                                <div
                                                                    className="form-check"
                                                                    key={
                                                                        "r" +
                                                                        restriction.restriction_id
                                                                    }
                                                                >
                                                                    <>
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            id={`restriction${restriction.restriction_id}`}
                                                                            checked={
                                                                                restriction.isChecked
                                                                            }
                                                                            onChange={() =>
                                                                                handleTicketNewChange(
                                                                                    "restriction",
                                                                                    restriction.restriction_id
                                                                                )
                                                                            }
                                                                        />
                                                                        <label
                                                                            className="form-check-label"
                                                                            htmlFor={`restriction${restriction.restriction_id}`}
                                                                        >
                                                                            {
                                                                                restriction.restriction
                                                                            }
                                                                        </label>
                                                                    </>
                                                                </div>

                                                                // && index % 9 === 0 && </div><div className="listboxes col">
                                                            )
                                                        )}
                                                    </>
                                                ) : (
                                                    <p>
                                                        No restriction options
                                                        available
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        <div className="row">
                                            <b>Listing notes</b>
                                        </div>

                                        <div className="row">
                                            <div className="listboxes col">
                                                {listingNotes.length ? (
                                                    <>
                                                        {listingNotes.map(
                                                            (listingNote) => (
                                                                <div
                                                                    className="form-check"
                                                                    key={
                                                                        "l" +
                                                                        listingNote.listing_note_id
                                                                    }
                                                                >
                                                                    <div
                                                                        key={
                                                                            "l" +
                                                                            listingNote.listing_note_id
                                                                        }
                                                                    >
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            id={`listingnote${listingNote.listing_note_id}`}
                                                                            checked={
                                                                                listingNote.isChecked
                                                                            }
                                                                            onChange={() =>
                                                                                handleTicketNewChange(
                                                                                    "listing_note",
                                                                                    listingNote.listing_note_id

                                                                                )
                                                                            }
                                                                        />
                                                                        <label
                                                                            className="form-check-label"
                                                                            htmlFor={`listingnote${listingNote.listing_note_id}`}
                                                                        >
                                                                            {
                                                                                listingNote.listing_note
                                                                            }
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            )
                                                        )}
                                                    </>
                                                ) : (
                                                    <p>
                                                        No listing note options
                                                        available
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-3">
                                    <div className="form-check form-switch border p-1">
                                        {newTicket.is_published === 1 ? (
                                            <input
                                                className="form-check-input ms-auto"
                                                type="checkbox"
                                                role="switch"
                                                id={
                                                    "flexSwitchCheckDefault " +
                                                    newTicket.is_published
                                                }
                                                checked
                                                onChange={() =>
                                                    handleTicketNewChange(
                                                        "publish"
                                                    )
                                                }
                                            />
                                        ) : (
                                            <input
                                                className="form-check-input ms-auto"
                                                type="checkbox"
                                                role="switch"
                                                id={
                                                    "flexSwitchCheckDefault " +
                                                    newTicket.is_published
                                                }
                                                checked={false}
                                                onChange={() =>
                                                    handleTicketNewChange(
                                                        "publish"
                                                    )
                                                }
                                            />
                                        )}
                                        <label
                                            className="form-check-label ms-5"
                                            htmlFor="flexSwitchCheckDefault"
                                        >
                                            Publish
                                        </label>
                                    </div>
                                    <div className="border p-1">
                                        <label
                                            className="form-label"
                                            htmlFor=""
                                        >
                                            Ticket Type
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            value={ticketTypeSelected ? ticketTypes.filter((type)=>type.ticket_type_id===ticketTypeSelected)[0].ticket_type : ""}
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Modal footer --> */}
                            <div className="modal-footer justify-content-center">
                                <p className="text-success">{successMsg}</p>

                                {isTicketSaving ? (
                                    <button
                                        type="button"
                                        className="btn btn-success float-sm-end"
                                        disabled
                                    >
                                        Saving...
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        className="btn btn-success float-sm-end"
                                        onClick={() =>
                                            ticketNewUpdate()
                                        }
                                        data-bs-dismiss="modal"
                                    >
                                        Save
                                    </button>
                                )}

                                <button
                                    type="button"
                                    className="btn btn-secondary float-sm-end"
                                    data-bs-dismiss="modal"
                                >
                                    Cancel
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ListingNewTicket;