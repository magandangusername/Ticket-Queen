import React from "react";
import dateFormat from "dateformat";

const ListingNew = ({
    concerts,
    handleTicketNew,
    newListingSearch,
    setNewListingSearch,
}) => {
    return (
        <div className="modal w-100" id="ListingModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    {/* <!-- Modal Header --> */}
                    <div
                        className="modal-header p-2"
                        style={{ background: "#424549", color: "#edf6ff" }}
                    >
                        <h4>Create New Listing</h4>

                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                        ></button>
                    </div>

                    {/* <!-- Modal body --> */}
                    <div className="m-1 p-2">
                        <div className="box">
                            <input
                                type="text"
                                className="form-control"
                                name=""
                                placeholder="Search by Event, Venue, City"
                                value={newListingSearch.search}
                                onChange={(e) =>
                                    setNewListingSearch({
                                        ...newListingSearch,
                                        search: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <form action="" className="row">
                            <div className="col">
                                <label htmlFor="date">From</label>
                                <br />
                                <input
                                    className="form-control"
                                    type="date"
                                    id="date"
                                    name="date"
                                    value={newListingSearch.from}
                                    onChange={(e) =>
                                        setNewListingSearch({
                                            ...newListingSearch,
                                            from: e.target.value,
                                        })
                                    }
                                    min={dateFormat(
                                        new Date(),
                                        "yyyy-mm-dd"
                                    )}
                                />
                            </div>

                            <br />
                            <div className="col">
                                <label htmlFor="date">To</label>
                                <br />
                                <input
                                    className="form-control"
                                    type="date"
                                    id="date"
                                    name="date"
                                    value={newListingSearch.to}
                                    onChange={(e) =>
                                        setNewListingSearch({
                                            ...newListingSearch,
                                            to: e.target.value,
                                        })
                                    }
                                    min={dateFormat(
                                        new Date(),
                                        "yyyy-mm-dd"
                                    )}
                                />
                            </div>
                        </form>
                        <table className="table">
                            {concerts.length ? (
                                <tbody>
                                    {concerts.map((concert) =>
                                        ((concert.event_name.toLowerCase().includes(newListingSearch.search.toLowerCase()) |
                                        concert.event_venue.toLowerCase().includes(newListingSearch.search.toLowerCase()) |
                                        concert.event_city.toLowerCase().includes(newListingSearch.search.toLowerCase())
                                        ) & (
                                        (newListingSearch.from !== "" ?
                                        new Date(concert.event_date) >=
                                            new Date(newListingSearch.from):true)
                                        &
                                        (newListingSearch.to !== "" ?
                                        new Date(concert.event_date) <=
                                            new Date(newListingSearch.to):true))) ? (
                                            <tr
                                                key={concert.event_id}
                                                data-bs-toggle="modal"
                                                data-bs-target="#tiktypes"
                                                onClick={() =>
                                                    handleTicketNew(concert)
                                                }
                                            >
                                                <td>
                                                    {/* dateFormat("2019-04-30T08:59:00.000Z", "dddd, mmmm dS, yyyy") to get Tuesday, April 30th, 2019. */}
                                                    {dateFormat(
                                                        concert.event_date,
                                                        "dddd"
                                                    )}
                                                    <br />
                                                    {dateFormat(
                                                        concert.event_date,
                                                        "dd, mmmm yyyy"
                                                    )}
                                                    <br />
                                                    {/* 19:00 */}
                                                </td>
                                                <td>
                                                    {concert.event_name}
                                                    <br />
                                                    {concert.event_city},{" "}
                                                    {concert.event_venue}
                                                    <br />
                                                    {/* Nanterre */}
                                                </td>
                                            </tr>
                                        ) : newListingSearch.from === "" & newListingSearch.from === ""? (
                                            <tr
                                                key={concert.event_id}
                                                data-bs-toggle="modal"
                                                data-bs-target="#tiktypes"
                                                onClick={() =>
                                                    handleTicketNew(concert)
                                                }
                                            >
                                                <td>
                                                    {dateFormat(
                                                        concert.event_date,
                                                        "dddd"
                                                    )}
                                                    <br />
                                                    {dateFormat(
                                                        concert.event_date,
                                                        "dd, mmmm yyyy"
                                                    )}
                                                    <br />
                                                    {/* 19:00 */}
                                                </td>
                                                <td>
                                                    {concert.event_name}
                                                    <br />
                                                    {concert.event_city},{" "}
                                                    {concert.event_venue}
                                                    <br />
                                                    {/* Nanterre */}
                                                </td>
                                            </tr>
                                        ) : null
                                    )}
                                </tbody>
                            ) : null}
                            {/* <tbody>
                                <tr>
                                    <td>
                                        Thu
                                        <br />
                                        17 Mar 2022
                                        <br />
                                        19:00
                                    </td>
                                    <td>
                                        Genesis
                                        <br />
                                        Paris La Defense Arena
                                        <br />
                                        Nanterre
                                    </td>
                                </tr>
                                </tbody> */}
                        </table>
                        <br />
                    </div>

                    {/* <!-- Modal footer --> */}
                    <div className="modal-footer m-1 p-2">
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#ReqEventModal"
                        >
                            + Request an event
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingNew;
