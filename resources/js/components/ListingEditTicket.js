import React from "react";

const ListingEditTicket = ({
    ticketEdit,
    restrictions,
    listingNotes,
    handleTicketDelete,
    isTicketEditLoading,
    setIsTicketEditLoading,
    ticketRestrictionEdit,
    ticketListingNoteEdit,
    setTicketRestrictionEdit,
    setTicketListingNoteEdit,
    handleTicketEditChange,
    ticketEditUpdate,
    isTicketSaving,
    successMsg,
    setTicketClone,
    ticketTypes
}) => {
    return (
        <div className="modal" id="myModal" aria-hidden="true">
            <div
                className="modal-dialog modal-lg"
                style={{ overflowY: "initial !important" }}
            >
                <div className="modal-content">
                    {isTicketEditLoading ? (
                        <p>Loading data...</p>
                    ) : (
                        <>
                            {/* <!-- Modal Header --> */}
                            <div className="modal-header">
                                <h4>{ticketEdit[0].event_name}</h4>
                                <p>
                                    <b>{ticketEdit[0].event_date}</b>
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
                                                    type="text"
                                                    className="form-control"
                                                    id="exampleFormControlInput1"
                                                    value={
                                                        ticketEdit[0]
                                                            .tickets_available
                                                    }
                                                    onChange={(e) =>
                                                        handleTicketEditChange(
                                                            ticketEdit[0]
                                                                .listing_id,
                                                            ticketEdit[0]
                                                                .listing_id,
                                                            "available_tickets",
                                                            e.target.value
                                                        )
                                                    }
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
                                                    onChange={(e)=>handleTicketEditChange(
                                                        ticketEdit[0]
                                                            .listing_id,
                                                        ticketEdit[0]
                                                            .listing_id,
                                                        "ticket_separation",
                                                        e.target.value
                                                    )}
                                                    value={ticketEdit[0].ticket_separation === null ? "" : ticketEdit[0].ticket_separation}
                                                >
                                                    <option value="any">Any</option>
                                                    {ticketEdit[0].ticket_separation === null ? <option defaultValue>None</option> : <option>None</option>}

                                                    <option value="Avoid leaving one ticket">
                                                        Avoid leaving one ticket
                                                    </option>
                                                    <option value="Avoid leaving one or
                                                        three tickets">
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
                                                    type="text"
                                                    className="form-control"
                                                    id="exampleFormControlInput1"
                                                    value={
                                                        ticketEdit[0]
                                                            .tickets_sold
                                                    }
                                                    onChange={(e) =>
                                                        handleTicketEditChange(
                                                            ticketEdit[0]
                                                                .listing_id,
                                                            ticketEdit[0]
                                                                .listing_id,
                                                            "tickets_sold",
                                                            e.target.value
                                                        )
                                                    }
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
                                                    value={
                                                        ticketEdit[0].section
                                                    }
                                                    onChange={(e) =>
                                                        handleTicketEditChange(
                                                            ticketEdit[0]
                                                                .listing_id,
                                                            ticketEdit[0]
                                                                .listing_id,
                                                            "section",
                                                            e.target.value
                                                        )
                                                    }
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
                                                    value={ticketEdit[0].row}
                                                    onChange={(e) =>
                                                        handleTicketEditChange(
                                                            ticketEdit[0]
                                                                .listing_id,
                                                            ticketEdit[0]
                                                                .listing_id,
                                                            "row",
                                                            e.target.value
                                                        )
                                                    }
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
                                                            ticketEdit[0].seats_from
                                                        }
                                                        onChange={(e) =>
                                                            handleTicketEditChange(
                                                                ticketEdit[0]
                                                                    .listing_id,
                                                                ticketEdit[0]
                                                                    .listing_id,
                                                                "seats_from",
                                                                e.target.value
                                                            )
                                                        }
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
                                                        value={ticketEdit[0].seats_to}
                                                        onChange={(e) =>
                                                            handleTicketEditChange(
                                                                ticketEdit[0]
                                                                    .listing_id,
                                                                ticketEdit[0]
                                                                    .listing_id,
                                                                "seats_to",
                                                                e.target.value
                                                            )
                                                        }
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
                                                        type="text"
                                                        className="form-control"
                                                        id="inlineFormInputGroupUsername"
                                                        value={
                                                            ticketEdit[0].price
                                                        }
                                                        onChange={(e) =>
                                                            handleTicketEditChange(
                                                                ticketEdit[0]
                                                                    .listing_id,
                                                                ticketEdit[0]
                                                                    .listing_id,
                                                                "price",
                                                                e.target.value
                                                            )
                                                        }
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
                                                                    {ticketRestrictionEdit.length &
                                                                    ticketRestrictionEdit.filter(
                                                                        (
                                                                            restrict
                                                                        ) =>
                                                                            (restrict.restriction_id ===
                                                                                restriction.restriction_id) &
                                                                            restrict.isChecked
                                                                    ).length ? (
                                                                        <>
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                id={`restriction${restriction.restriction_id}`}
                                                                                checked
                                                                                onChange={() =>
                                                                                    handleTicketEditChange(
                                                                                        ticketEdit[0]
                                                                                            .listing_id,
                                                                                        restriction.restriction_id,
                                                                                        "restriction"
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
                                                                    ) : (
                                                                        <>
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                id={`restriction${restriction.restriction_id}`}
                                                                                checked={
                                                                                    restriction.isChecked |
                                                                                    ticketRestrictionEdit.filter(
                                                                                        (
                                                                                            restrict
                                                                                        ) =>
                                                                                            (restrict.restriction_id ===
                                                                                                restriction.restriction_id) &
                                                                                            restrict.isChecked
                                                                                    )
                                                                                        .length
                                                                                }
                                                                                onChange={() =>
                                                                                    handleTicketEditChange(
                                                                                        ticketEdit[0]
                                                                                            .listing_id,
                                                                                        restriction.restriction_id,
                                                                                        "restriction"
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
                                                                    )}
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
                                                                    {ticketListingNoteEdit.length &
                                                                    ticketListingNoteEdit.filter(
                                                                        (
                                                                            listnote
                                                                        ) =>
                                                                            (listnote.listing_note_id ===
                                                                                listingNote.listing_note_id) &
                                                                            listnote.isChecked
                                                                    ).length ? (
                                                                        <>
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                id={`listingnote${listingNote.listing_note_id}`}
                                                                                checked
                                                                                onChange={() =>
                                                                                    handleTicketEditChange(
                                                                                        ticketEdit[0]
                                                                                            .listing_id,
                                                                                        listingNote.listing_note_id,
                                                                                        "listing_note"
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
                                                                        </>
                                                                    ) : (
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
                                                                                    listingNote.isChecked |
                                                                                    ticketListingNoteEdit.filter(
                                                                                        (
                                                                                            listnote
                                                                                        ) =>
                                                                                            (listnote.listing_note_id ===
                                                                                                listingNote.listing_note_id) &
                                                                                            listnote.isChecked
                                                                                    )
                                                                                        .length
                                                                                }
                                                                                onChange={() =>
                                                                                    handleTicketEditChange(
                                                                                        ticketEdit[0]
                                                                                            .listing_id,
                                                                                        listingNote.listing_note_id,
                                                                                        "listing_note"
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
                                                                    )}
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
                                        {ticketEdit[0].is_published === 1 ? (
                                            <input
                                                className="form-check-input ms-auto"
                                                type="checkbox"
                                                role="switch"
                                                id={
                                                    "flexSwitchCheckDefault " +
                                                    ticketEdit[0].status
                                                }
                                                checked
                                                onChange={() =>
                                                    handleTicketEditChange(
                                                        ticketEdit[0]
                                                            .listing_id,
                                                        "",
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
                                                    ticketEdit[0].is_published
                                                }
                                                checked={false}
                                                onChange={() =>
                                                    handleTicketEditChange(
                                                        ticketEdit[0]
                                                            .listing_id,
                                                        "",
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
                                            Sold Status
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            value={ticketEdit[0].tickets_available===0 ? 'Fully Sold' : ""}
                                            readOnly
                                        />
                                        <br />
                                    </div>
                                    <div className="border p-1">
                                        <label
                                            className="form-label"
                                            htmlFor=""
                                        >
                                            Listing ID
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            value={ticketEdit[0].listing_id}
                                            readOnly
                                        />
                                        <br />
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
                                            value={ticketTypes.filter((type)=>type.ticket_type_id===ticketEdit[0].ticket_type_id)[0].ticket_type | ""}
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Modal footer --> */}
                            <div className="modal-footer">
                                <p className="text-success">{successMsg}</p>
                                <button
                                    type="button"
                                    className="btn btn-light float-sm-start"
                                    data-bs-toggle="modal"
                                    data-bs-target="#clone"
                                >
                                    Clone
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger float-sm-start"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete"

                                >
                                    Delete
                                </button>
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
                                            ticketEditUpdate(
                                                ticketEdit[0],
                                                restrictions,
                                                ticketRestrictionEdit,
                                                listingNotes,
                                                ticketListingNoteEdit
                                            )
                                        }
                                    >
                                        Save
                                    </button>
                                )}

                                {/* <p className="float-sm-start">Saving...</p> */}
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

export default ListingEditTicket;
