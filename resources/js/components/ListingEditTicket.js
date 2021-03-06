import React from "react";
import getSymbolFromCurrency from "currency-symbol-map";
import dateFormat from "dateformat";

const ListingEditTicket = ({
    ticketEdit,
    setTicketEdit,
    restrictions,
    listingNotes,
    isTicketEditLoading,
    ticketRestrictionEdit,
    ticketListingNoteEdit,
    handleTicketEditChange,
    ticketEditUpdate,
    successMsg,
    ticketTypes,
    ticketEditInputError
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
                            <div
                                className="modal-header"
                                style={{
                                    background: "#424549",
                                    color: "#edf6ff",
                                }}
                            >
                                <h4>{ticketEdit.event_name}</h4>
                                <p>
                                    <b>
                                        {dateFormat(
                                            ticketEdit.event_date +
                                                " " +
                                                ticketEdit.event_time,
                                            "ddd dd, mmmm yyyy hh:mm"
                                        )}
                                    </b>
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
                                                    className={
                                                        ticketEditInputError.some(
                                                            (e) =>
                                                                e.input ===
                                                                "tickets_available"
                                                        )
                                                            ? "form-control is-invalid"
                                                            : "form-control"
                                                    }
                                                    id="exampleFormControlInput1"
                                                    value={Number(
                                                        ticketEdit.tickets_available
                                                    ).toString()}
                                                    onChange={(e) =>
                                                        setTicketEdit({
                                                            ...ticketEdit,
                                                            tickets_available:
                                                                e.target.value,
                                                        })
                                                    }
                                                    pattern="[0-9]*"
                                                    required
                                                />
                                                <p
                                                    className="invalid-feedback"
                                                >
                                                    {ticketEditInputError.map(e=>e.input==="tickets_available" ? e.msg : null)}
                                                </p>
                                            </div>

                                            <div className="form-group col">
                                                {/* idk what this thing is in the database*/}
                                                <label htmlFor="exampleFormControlSelect1">
                                                    Ticket Separation
                                                </label>
                                                <select
                                                    className={
                                                        ticketEditInputError.some(
                                                            (e) =>
                                                                e.input ===
                                                                "ticket_separation"
                                                        )
                                                            ? "form-control is-invalid"
                                                            : "form-control"
                                                    }
                                                    id="exampleFormControlSelect1"
                                                    onChange={(e) =>
                                                        setTicketEdit({
                                                            ...ticketEdit,
                                                            ticket_separation:
                                                                e.target.value,
                                                        })
                                                    }
                                                    value={
                                                        ticketEdit.ticket_separation ===
                                                        null
                                                            ? ""
                                                            : ticketEdit.ticket_separation
                                                    }
                                                    required
                                                >
                                                    <option value="any">
                                                        Any
                                                    </option>
                                                    {ticketEdit.ticket_separation ===
                                                    null ? (
                                                        <option defaultValue>
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
                                                <p
                                                    className="invalid-feedback"
                                                >
                                                    {ticketEditInputError.map(e=>e.input==="ticket_separation" ? e.msg : null)}
                                                </p>
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
                                                        ticketEdit.tickets_sold
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
                                                    className={
                                                        ticketEditInputError.some(
                                                            (e) =>
                                                                e.input ===
                                                                "section"
                                                        )
                                                            ? "form-control is-invalid"
                                                            : "form-control"
                                                    }
                                                    id="exampleFormControlInput1"
                                                    value={ticketEdit.section}
                                                    onChange={(e) =>
                                                        setTicketEdit({
                                                            ...ticketEdit,
                                                            section:
                                                                e.target.value,
                                                        })
                                                    }
                                                    required
                                                />
                                                <p
                                                    className="invalid-feedback"
                                                >
                                                    {ticketEditInputError.map(e=>e.input==="section" ? e.msg : null)}
                                                </p>
                                            </div>

                                            <div className="form-group col">
                                                <label htmlFor="exampleFormControlInput1">
                                                    Row
                                                </label>
                                                <input
                                                    type="text"
                                                    className={
                                                        ticketEditInputError.some(
                                                            (e) =>
                                                                e.input ===
                                                                "row"
                                                        )
                                                            ? "form-control is-invalid"
                                                            : "form-control"
                                                    }
                                                    id="exampleFormControlInput1"
                                                    value={ticketEdit.row}
                                                    onChange={(e) =>
                                                        setTicketEdit({
                                                            ...ticketEdit,
                                                            row: e.target.value,
                                                        })
                                                    }
                                                    required
                                                />
                                                <p
                                                    className="invalid-feedback"
                                                >
                                                    {ticketEditInputError.map(e=>e.input==="row" ? e.msg : null)}
                                                </p>
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
                                                    <input
                                                        type="text"
                                                        className={
                                                            ticketEditInputError.some(
                                                                (e) =>
                                                                    e.input ===
                                                                    "seats_from"
                                                            )
                                                                ? "form-control is-invalid"
                                                                : "form-control"
                                                        }
                                                        id="inlineFormInputGroupMinimum"
                                                        value={
                                                            ticketEdit.seats_from
                                                        }
                                                        onChange={(e) =>
                                                            setTicketEdit({
                                                                ...ticketEdit,
                                                                seats_from:
                                                                    e.target
                                                                        .value,
                                                            })
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
                                                        className={
                                                            ticketEditInputError.some(
                                                                (e) =>
                                                                    e.input ===
                                                                    "seats_to"
                                                            )
                                                                ? "form-control is-invalid"
                                                                : "form-control"
                                                        }
                                                        id="inlineFormInputGroupMaximum"
                                                        value={
                                                            ticketEdit.seats_to
                                                        }
                                                        onChange={(e) =>
                                                            setTicketEdit({
                                                                ...ticketEdit,
                                                                seats_to:
                                                                    e.target
                                                                        .value,
                                                            })
                                                        }
                                                        required
                                                    />
                                                    <p
                                                        className="invalid-feedback"
                                                    >
                                                    {ticketEditInputError.map(e=>e.input==="seats_from" ? e.msg + " " : null)}{ticketEditInputError.map(e=>e.input==="seats_to" ? e.msg : null)}
                                                    </p>
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
                                                            {getSymbolFromCurrency(
                                                                ticketEdit.currency
                                                            )}
                                                        </div>
                                                    </div>
                                                    <input
                                                        type="number"
                                                        className={
                                                            ticketEditInputError.some(
                                                                (e) =>
                                                                    e.input ===
                                                                    "price"
                                                            )
                                                                ? "form-control is-invalid"
                                                                : "form-control"
                                                        }
                                                        id="inlineFormInputGroupUsername"
                                                        value={
                                                            ticketEdit.price ===
                                                            "NaN"
                                                                ? 0
                                                                : Number(
                                                                      ticketEdit.price
                                                                  ).toString()
                                                        }
                                                        onChange={(e) =>
                                                            e.target.value ===
                                                            ""
                                                                ? setTicketEdit(
                                                                      {
                                                                          ...ticketEdit,
                                                                          price: 0,
                                                                      }
                                                                  )
                                                                : setTicketEdit(
                                                                      {
                                                                          ...ticketEdit,
                                                                          price: parseFloat(
                                                                              e
                                                                                  .target
                                                                                  .value
                                                                          ).toFixed(
                                                                              2
                                                                          ),
                                                                      }
                                                                  )
                                                        }
                                                        required
                                                    />
                                                    <p
                                                        className="invalid-feedback"
                                                    >
                                                        {ticketEditInputError.map(e=>e.input==="price" ? e.msg : null)}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="col">
                                                <label htmlFor="exampleFormControlSelect1">
                                                    Currency
                                                </label>
                                                <select
                                                    className={
                                                        ticketEditInputError.some(
                                                            (e) =>
                                                                e.input ===
                                                                "currency"
                                                        )
                                                            ? "form-control is-invalid"
                                                            : "form-control"
                                                    }
                                                    id="exampleFormControlSelect1"
                                                    value={ticketEdit.currency}
                                                    onChange={(e) =>
                                                        setTicketEdit({
                                                            ...ticketEdit,
                                                            currency:
                                                                e.target.value,
                                                        })
                                                    }
                                                    placeholder="Currency"
                                                    required
                                                >
                                                    <option value="AED">
                                                        AED
                                                    </option>
                                                    <option value="ARS">
                                                        ARS
                                                    </option>
                                                    <option
                                                        value="AUD"
                                                    >
                                                        AUD
                                                    </option>
                                                    <option value="BRL">
                                                        BRL
                                                    </option>
                                                    <option value="CAD">
                                                        CAD
                                                    </option>
                                                    <option value="CHF">
                                                        CHF
                                                    </option>
                                                    <option value="CLP">
                                                        CLP
                                                    </option>
                                                    <option value="COP">
                                                        COP
                                                    </option>
                                                    <option value="CZK">
                                                        CZK
                                                    </option>
                                                    <option value="DKK">
                                                        DKK
                                                    </option>
                                                    <option value="EUR">
                                                        EUR
                                                    </option>
                                                    <option value="GBP">
                                                        GBP
                                                    </option>
                                                    <option value="HKD">
                                                        HKD
                                                    </option>
                                                    <option value="HRK">
                                                        HRK
                                                    </option>
                                                    <option value="HUF">
                                                        HUF
                                                    </option>
                                                    <option value="IDR">
                                                        IDR
                                                    </option>
                                                    <option value="ILS">
                                                        ILS
                                                    </option>
                                                    <option value="ISK">
                                                        ISK
                                                    </option>
                                                    <option value="JPY">
                                                        JPY
                                                    </option>
                                                    <option value="KRW">
                                                        KRW
                                                    </option>
                                                    <option value="MUR">
                                                        MUR
                                                    </option>
                                                    <option value="MXN">
                                                        MXN
                                                    </option>
                                                    <option value="MYR">
                                                        MYR
                                                    </option>
                                                    <option value="NOK">
                                                        NOK
                                                    </option>
                                                    <option value="NZD">
                                                        NZD
                                                    </option>
                                                    <option value="PEN">
                                                        PEN
                                                    </option>
                                                    <option value="PHP">
                                                        PHP
                                                    </option>
                                                    <option value="PLN">
                                                        PLN
                                                    </option>
                                                    <option value="RON">
                                                        RON
                                                    </option>
                                                    <option value="RUB">
                                                        RUB
                                                    </option>
                                                    <option value="SEK">
                                                        SEK
                                                    </option>
                                                    <option value="SGD">
                                                        SGD
                                                    </option>
                                                    <option value="THB">
                                                        THB
                                                    </option>
                                                    <option value="TRY">
                                                        TRY
                                                    </option>
                                                    <option value="TWD">
                                                        TWD
                                                    </option>
                                                    <option value="UAH">
                                                        UAH
                                                    </option>
                                                    <option value="USD">
                                                        USD
                                                    </option>
                                                    <option value="ZAR">
                                                        ZAR
                                                    </option>
                                                </select>
                                                <p
                                                    className="invalid-feedback"
                                                >
                                                    {ticketEditInputError.map(e=>e.input==="currency" ? e.msg : null)}
                                                </p>
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
                                                                                        ticketEdit.listing_id,
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
                                                                                        ticketEdit.listing_id,
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
                                                                                        ticketEdit.listing_id,
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
                                                                                        ticketEdit.listing_id,
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
                                        {ticketEdit.is_published === 1 ? (
                                            <input
                                                className="form-check-input ms-auto"
                                                type="checkbox"
                                                role="switch"
                                                id={
                                                    "flexSwitchCheckDefault " +
                                                    ticketEdit.is_published
                                                }
                                                checked
                                                onChange={() =>
                                                    setTicketEdit({
                                                        ...ticketEdit,
                                                        is_published: 0,
                                                    })
                                                }
                                            />
                                        ) : (
                                            <input
                                                className="form-check-input ms-auto"
                                                type="checkbox"
                                                role="switch"
                                                id={
                                                    "flexSwitchCheckDefault " +
                                                    ticketEdit.is_published
                                                }
                                                checked={false}
                                                onChange={() =>
                                                    setTicketEdit({
                                                        ...ticketEdit,
                                                        is_published: 1,
                                                    })
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

                                    {(Number(ticketEdit.tickets_available) ===
                                        0) &
                                    (Number(ticketEdit.tickets_sold) > 0) ? (
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
                                                value={
                                                    Number(
                                                        ticketEdit.tickets_available
                                                    ) === 0
                                                        ? "Fully Sold"
                                                        : ""
                                                }
                                                readOnly
                                            />
                                            <br />
                                        </div>
                                    ) : null}

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
                                            value={ticketEdit.listing_id}
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
                                        <select
                                            name="ticket_type"
                                            id="ticket_type"
                                            className="form-control"
                                            value={ticketEdit.ticket_type_id}
                                            onChange={(e) =>
                                                setTicketEdit({
                                                    ...ticketEdit,
                                                    ticket_type_id: Number(
                                                        e.target.value
                                                    ),
                                                })
                                            }
                                            required
                                        >
                                            {ticketTypes.length
                                                ? ticketTypes.map((type) => (
                                                      <option
                                                          key={
                                                              "tt" +
                                                              type.ticket_type_id
                                                          }
                                                          value={
                                                              type.ticket_type_id
                                                          }
                                                          defaultValue={
                                                              ticketEdit.ticket_type_id ===
                                                              type.ticket_type_id
                                                          }
                                                      >
                                                          {type.ticket_type}
                                                      </option>
                                                  ))
                                                : null}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Modal footer --> */}
                            <div className="modal-footer content-justify-between">
                                <div>

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
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        className="btn btn-success float-sm-end"
                                        onClick={() =>
                                            ticketEditUpdate(
                                                ticketEdit,
                                                restrictions,
                                                ticketRestrictionEdit,
                                                listingNotes,
                                                ticketListingNoteEdit
                                            )
                                        }
                                    >
                                        Save
                                    </button>
                                <button
                                    type="button"
                                    className="btn btn-secondary float-sm-end"
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

export default ListingEditTicket;
