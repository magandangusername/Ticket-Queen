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
}) => {
    return (
        <div className="modal" id="myModal">
            <div
                className="modal-dialog modal-lg"
                style={{ overflowY: "initial !important" }}
            >
                <div className="modal-content">
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
                                            type="email"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            value={
                                                ticketEdit[0].Available_Tickets
                                            }
                                            readOnly
                                        />
                                    </div>

                                    <div className="form-group col">
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
                                                Avoid leaving one or three
                                                tickets
                                            </option>
                                            <option>Avoid odd numbers</option>
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
                                            value={ticketEdit[0].Ticket_Sold}
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
                                            type="email"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            value={ticketEdit[0].Section}
                                            readOnly
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
                                            readOnly
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
                                                value={ticketEdit[0].Seats}
                                                readOnly
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
                                                readOnly
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
                                                value={ticketEdit[0].Price}
                                                readOnly
                                            />
                                        </div>
                                    </div>

                                    <div className="col">
                                        <label htmlFor="exampleFormControlSelect1">
                                            Ticket Separation
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
                                        <b>Select Restrictions on Use</b>
                                        <br />
                                        If any of the following conditions apply
                                        to your tickets, please select them from
                                        the list below. If there is a
                                        restriction on the use of your ticket
                                        not shown here, please stop listing and
                                        contact us.
                                        <br />
                                    </p>
                                </div>
                                <div className="row">
                                    <div className="listboxes col">
                                        {restrictions.map(
                                            (restriction, index) => (
                                                <div
                                                    className="form-check"
                                                    key={
                                                        restriction.Restriction_ID
                                                    }
                                                >
                                                    {ticketRestrictionEdit.length ? (
                                                        ticketRestrictionEdit.map(
                                                            (restrict) =>
                                                                restrict.Restriction_ID ===
                                                                restriction.Restriction_ID ? (
                                                                    <>
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            id={`restriction${index}`}
                                                                            checked
                                                                        />
                                                                        <label
                                                                            className="form-check-label"
                                                                            htmlFor={`restriction${index}`}
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
                                                                            id={`restriction${index}`}
                                                                        />
                                                                        <label
                                                                            className="form-check-label"
                                                                            htmlFor={`restriction${index}`}
                                                                        >
                                                                            {
                                                                                restriction.Restriction
                                                                            }
                                                                        </label>{" "}
                                                                    </>
                                                                )
                                                        )
                                                    ) : (
                                                        <>
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                id={`restriction${index}`}
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor={`restriction${index}`}
                                                            >
                                                                {
                                                                    restriction.Restriction
                                                                }
                                                            </label>{" "}
                                                        </>
                                                    )}
                                                </div>

                                                // && index % 9 === 0 && </div><div className="listboxes col">
                                            )
                                        )}
                                    </div>
                                </div>
                                <div className="row">
                                    <b>Listing notes</b>
                                </div>

                                <div className="row">
                                    <div className="listboxes col">
                                        {listingNotes.map(
                                            (listingNote, index) => (
                                                <div
                                                    className="form-check"
                                                    key={index}
                                                >
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id={`restriction${index}`}
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor={`restriction${index}`}
                                                    >
                                                        {
                                                            listingNote.Listing_note
                                                        }
                                                    </label>
                                                </div>

                                                // && index % 9 === 0 && </div><div className="listboxes col">
                                            )
                                        )}
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-3">
                            <div className="form-check form-switch border p-1">
                                <input
                                    className="form-check-input ms-auto"
                                    type="checkbox"
                                    role="switch"
                                    id="flexSwitchCheckDefault"
                                />
                                <label
                                    className="form-check-label ms-5"
                                    htmlFor="flexSwitchCheckDefault"
                                >
                                    Publish
                                </label>
                            </div>
                            <div className="border p-1">
                                <label className="form-label" htmlFor="">
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
                                <label className="form-label" htmlFor="">
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
                                <label className="form-label" htmlFor="">
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
                        <button
                            type="button"
                            className="btn btn-light float-sm-start"
                        >
                            Clone
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger float-sm-start"
                            data-bs-dismiss="modal"
                            onClick={() => handleTicketDelete(ticketEdit[0])}
                        >
                            Delete
                        </button>
                        <button
                            type="button"
                            className="btn btn-success float-sm-end"
                        >
                            Save
                        </button>
                        {/* <p className="float-sm-start">Saving...</p> */}
                        <button
                            type="button"
                            className="btn btn-secondary float-sm-end"
                            data-bs-dismiss="modal"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingEditTicket;
