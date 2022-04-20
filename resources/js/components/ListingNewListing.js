import React from "react";

const ListingNewListing = () => {
    return (
        <div className="modal container-fluid" id="ReqEventModal">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header p-2 "
                    style={{ background: "#424549", color: "#edf6ff"}}
                    >
                        <h4 className="m-1 p-2">Request an event</h4>
                        <p className="m-1 p-2">
                            Can't find the event you're looking for? Enter the
                            details below and you can start listing immediately.
                            Once our support team approves the event, your
                            tickets will become active on our website.
                        </p>

                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                        ></button>
                    </div>

                    <div className="modal-body form-group mx-auto p-1">
                        <form>
                            <div className="row mb-2">
                                <label htmlFor="exampleFormControlInput1">
                                    Artist, Home Team, Tournament, Festival or
                                    Show*
                                </label>
                                <input
                                    type="show"
                                    className=""
                                    id="exampleFormControlInput1"
                                    placeholder="Search"
                                />
                            </div>
                            <div className="row mb-2">
                                <label htmlFor="exampleFormControlSelect1">
                                    Event*
                                </label>
                                <input
                                    type="event"
                                    className=""
                                    id="exampleFormControlInput1"
                                />
                            </div>
                            <div className="row mb-2">
                                <label htmlFor="date">Event Date/Time*</label>
                                <input
                                    type="date"
                                    className="col me-1"
                                    id="date"
                                    name="date"
                                />
                                <select
                                    className="col ms-1"
                                    id="exampleFormControlSelect1"
                                >
                                    <option defaultValue>times</option>
                                </select>
                            </div>
                            <div className="row mb-2">
                                <label htmlFor="exampleFormControlInput1">
                                    Venue*
                                </label>
                                <input
                                    type="venue"
                                    className=""
                                    placeholder="Search"
                                />
                            </div>
                            <div className="row mb-2">
                                <label htmlFor="exampleFormControlInput1">
                                    City*
                                </label>
                                <input type="city" className=" " />
                            </div>
                            <div className="row mb-2">
                                <label htmlFor="exampleFormControlSelect1">
                                    Country*
                                </label>
                                <select className="" id="exampleFormControlSelect1">
                                    <option defaultValue>Albania</option>
                                    <option>Algeria</option>
                                    <option>American Samoa</option>
                                    <option>Andorra</option>
                                    <option>Angola</option>
                                </select>
                            </div>
                            <div className="row mb-2">
                                <label htmlFor="exampleFormControlInput1">
                                    Onsale
                                </label>
                                <input
                                    type="date"
                                    className="col me-1"
                                    id="date"
                                    name="date"
                                />

                                <select
                                    className="col ms-1"
                                    id="exampleFormControlSelect1"
                                >
                                    <option defaultValue>times</option>
                                </select>
                            </div>
                            <div className="row mb-2">
                                <label htmlFor="exampleFormControlInput1">
                                    Face Value
                                </label>
                                <select
                                    className="col me-1"
                                    id="exampleFormControlSelect1"
                                >
                                    <option defaultValue>Euro</option>
                                    <option>Hong Kong Dollar</option>
                                    <option>Croatian Kuna</option>
                                    <option>Japanese Yen</option>
                                    <option>South Korean Won</option>
                                </select>
                                <input
                                    type="valmin"
                                    className="col mx-1"
                                    id="exampleFormControlInput1"
                                    placeholder="Face Value Min"
                                />
                                <input
                                    type="valmax"
                                    className="col ms-1"
                                    id="exampleFormControlInput1"
                                    placeholder="Face Value Max"
                                />
                            </div>
                            <div className="row mb-2">
                                <label htmlFor="exampleFormControlInput1">
                                    Event Url and Notes*
                                </label>
                                <input
                                    type="venue"
                                    className=""
                                    id="exampleFormControlInput1"
                                />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer m-1 p-2 justify-content-between">
                        <button type="button" 
                        data-bs-dismiss="modal"
                        className="btn btn-secondary">
                            <b>Back</b>
                        </button>
                        <button type="button" className="btn btn-success">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingNewListing;
