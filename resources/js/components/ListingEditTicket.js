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
    isTicketEditModalVisible,
    ticketEditUpdate,
    isTicketSaving,
    successMsg
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
                                <h4>{ticketEdit[0].ConcertName}</h4>
                                <p>
                                    <b>{ticketEdit[0].ConcertDate}</b>
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
                                                            .Available_Tickets
                                                    }
                                                    onChange={(e) =>
                                                        handleTicketEditChange(
                                                            ticketEdit[0]
                                                                .Listing_ID,
                                                            ticketEdit[0]
                                                                .Listing_ID,
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
                                                >
                                                    <option>Any</option>
                                                    <option>None</option>
                                                    <option defaultValue>
                                                        Avoid leaving one ticket
                                                    </option>
                                                    <option>
                                                        Avoid leaving one or
                                                        three tickets
                                                    </option>
                                                    <option>
                                                        Avoid odd numbers
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="form-group col">
                                                <label htmlFor="exampleFormControlInput1">
                                                    Quantity Sold
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="exampleFormControlInput1"
                                                    value={
                                                        ticketEdit[0]
                                                            .Ticket_Sold
                                                    }
                                                    onChange={(e) =>
                                                        handleTicketEditChange(
                                                            ticketEdit[0]
                                                                .Listing_ID,
                                                            ticketEdit[0]
                                                                .Listing_ID,
                                                            "Ticket_Sold",
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
                                                    type="email"
                                                    className="form-control"
                                                    id="exampleFormControlInput1"
                                                    value={
                                                        ticketEdit[0].Section
                                                    }
                                                    onChange={(e) =>
                                                        handleTicketEditChange(
                                                            ticketEdit[0]
                                                                .Listing_ID,
                                                            ticketEdit[0]
                                                                .Listing_ID,
                                                            "Section",
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
                                                    type="email"
                                                    className="form-control"
                                                    id="exampleFormControlInput1"
                                                    value={ticketEdit[0].Row}
                                                    onChange={(e) =>
                                                        handleTicketEditChange(
                                                            ticketEdit[0]
                                                                .Listing_ID,
                                                            ticketEdit[0]
                                                                .Listing_ID,
                                                            "Row",
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
                                                            ticketEdit[0].Seats
                                                        }
                                                        onChange={(e) =>
                                                            handleTicketEditChange(
                                                                ticketEdit[0]
                                                                    .Listing_ID,
                                                                ticketEdit[0]
                                                                    .Listing_ID,
                                                                "Seats",
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
                                                        // value={ticketEdit[0].Seats}
                                                        onChange={(e) =>
                                                            handleTicketEditChange(
                                                                ticketEdit[0]
                                                                    .Listing_ID,
                                                                ticketEdit[0]
                                                                    .Listing_ID,
                                                                "Seats",
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
                                                            ticketEdit[0].Price
                                                        }
                                                        onChange={(e) =>
                                                            handleTicketEditChange(
                                                                ticketEdit[0]
                                                                    .Listing_ID,
                                                                ticketEdit[0]
                                                                    .Listing_ID,
                                                                "Price",
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
                                                                        restriction.Restriction_ID
                                                                    }
                                                                >
                                                                    {ticketRestrictionEdit.length &
                                                                    ticketRestrictionEdit.filter(
                                                                        (
                                                                            restrict
                                                                        ) =>
                                                                            (restrict.Restriction_ID ===
                                                                                restriction.Restriction_ID) &
                                                                            restrict.isChecked
                                                                    ).length ? (
                                                                        <>
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                id={`restriction${restriction.Restriction_ID}`}
                                                                                checked
                                                                                onChange={() =>
                                                                                    handleTicketEditChange(
                                                                                        ticketEdit[0]
                                                                                            .Listing_ID,
                                                                                        restriction.Restriction_ID,
                                                                                        "restriction"
                                                                                    )
                                                                                }
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                htmlFor={`restriction${restriction.Restriction_ID}`}
                                                                            >
                                                                                {
                                                                                    restriction.Restriction
                                                                                }
                                                                            </label>
                                                                        </>
                                                                    ) : (
                                                                        <>
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                id={`restriction${restriction.Restriction_ID}`}
                                                                                checked={
                                                                                    restriction.isChecked |
                                                                                    ticketRestrictionEdit.filter(
                                                                                        (
                                                                                            restrict
                                                                                        ) =>
                                                                                            (restrict.Restriction_ID ===
                                                                                                restriction.Restriction_ID) &
                                                                                            restrict.isChecked
                                                                                    )
                                                                                        .length
                                                                                }
                                                                                onChange={() =>
                                                                                    handleTicketEditChange(
                                                                                        ticketEdit[0]
                                                                                            .Listing_ID,
                                                                                        restriction.Restriction_ID,
                                                                                        "restriction"
                                                                                    )
                                                                                }
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                htmlFor={`restriction${restriction.Restriction_ID}`}
                                                                            >
                                                                                {
                                                                                    restriction.Restriction
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
                                                                        listingNote.Listing_note_ID
                                                                    }
                                                                >
                                                                    {ticketListingNoteEdit.length &
                                                                    ticketListingNoteEdit.filter(
                                                                        (
                                                                            listnote
                                                                        ) =>
                                                                            (listnote.Listing_note_ID ===
                                                                                listingNote.Listing_note_ID) &
                                                                            listnote.isChecked
                                                                    ).length ? (
                                                                        <>
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                id={`listingnote${listingNote.Listing_note_ID}`}
                                                                                checked
                                                                                onChange={() =>
                                                                                    handleTicketEditChange(
                                                                                        ticketEdit[0]
                                                                                            .Listing_ID,
                                                                                        listingNote.Listing_note_ID,
                                                                                        "listing_note"
                                                                                    )
                                                                                }
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                htmlFor={`listingnote${listingNote.Listing_note_ID}`}
                                                                            >
                                                                                {
                                                                                    listingNote.Listing_note
                                                                                }
                                                                            </label>
                                                                        </>
                                                                    ) : (
                                                                        <div
                                                                            key={
                                                                                "l" +
                                                                                listingNote.Listing_note_ID
                                                                            }
                                                                        >
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                id={`listingnote${listingNote.Listing_note_ID}`}
                                                                                checked={
                                                                                    listingNote.isChecked |
                                                                                    ticketListingNoteEdit.filter(
                                                                                        (
                                                                                            listnote
                                                                                        ) =>
                                                                                            (listnote.Listing_note_ID ===
                                                                                                listingNote.Listing_note_ID) &
                                                                                            listnote.isChecked
                                                                                    )
                                                                                        .length
                                                                                }
                                                                                onChange={() =>
                                                                                    handleTicketEditChange(
                                                                                        ticketEdit[0]
                                                                                            .Listing_ID,
                                                                                        listingNote.Listing_note_ID,
                                                                                        "listing_note"
                                                                                    )
                                                                                }
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                htmlFor={`listingnote${listingNote.Listing_note_ID}`}
                                                                            >
                                                                                {
                                                                                    listingNote.Listing_note
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
                                        {ticketEdit[0].status === "active" ? (
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
                                                            .Listing_ID,
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
                                                    ticketEdit[0].status
                                                }
                                                checked={false}
                                                onChange={() =>
                                                    handleTicketEditChange(
                                                        ticketEdit[0]
                                                            .Listing_ID,
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
                                            type="email"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            value={ticketEdit[0].status}
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
                                            type="email"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            value={ticketEdit[0].Listing_ID}
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
                                            type="email"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            value={ticketEdit[0].Ticket_Type}
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
                                    data-bs-toggle="modal" data-bs-target="#clone"
                                >
                                    Clone
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger float-sm-start"
                                    data-bs-dismiss="modal"
                                    onClick={() =>
                                        handleTicketDelete(ticketEdit[0])
                                    }
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
