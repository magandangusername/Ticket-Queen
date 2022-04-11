import React from "react";
import dateFormat from 'dateformat';

const ListingNew = ({ concerts }) => {
    return (
        <div className="modal w-100" id="ListingModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    {/* <!-- Modal Header --> */}
                    <div className="modal-header m-1 p-2">
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
                                />
                            </div>
                        </form>
                        <table className="table">
                            {concerts.length ? (
                                <tbody>
                                    {concerts.map((concert) => (
                                        <tr key={concert.ConcertID} onClick={()=>console.log('test')} data-bs-toggle="modal" data-bs-target="#tiktypes">
                                            <td>
                                            {/* dateFormat("2019-04-30T08:59:00.000Z", "dddd, mmmm dS, yyyy") to get Tuesday, April 30th, 2019. */}
                                                {dateFormat(concert.ConcertDate, "dddd")}
                                                <br />
                                                {dateFormat(concert.ConcertDate, "dd, mmmm yyyy")}
                                                <br />
                                                {/* 19:00 */}
                                            </td>
                                            <td>
                                                {concert.ConcertName}
                                                <br />
                                                {concert.Location}
                                                <br />
                                                {/* Nanterre */}
                                            </td>
                                        </tr>
                                    ))}
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
