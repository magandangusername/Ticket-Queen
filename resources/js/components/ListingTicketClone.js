import React from "react";

const ListingTicketClone = () => {
    return (
        <div className="modal fade container-fluid" id="clone">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div
                        className="modal-header p-2"
                        style={{background: "#424549", color: "#edf6ff"}}
                    >
                        <b>
                            <h4 className="modal-title">Clone Listing</h4>
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
                            By cloning this listing you are confirming that all
                            information provided about the listings you want to
                            create, except the fields you explicitly change, are
                            the same.
                        </p>
                        <h4>Stereophonics</h4>
                        <p>
                            <b>Friday, 01 April 2022</b>
                            <br />
                            The O2, London, United Kingdom
                        </p>
                        <table className="container form bg-light text-dark border">
                            <div>
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
                                <tr className="p-2">
                                    <td>
                                        <select
                                            className="form-control"
                                            id="exampleFormControlSelect1"
                                        >
                                            <i className="fa-regular fa-chevron-down"></i>
                                            <option selected>Choose one</option>
                                            <option>Lounge</option>
                                            <option>417</option>
                                            <option>Lower Tier</option>
                                            <option>Upper Tier</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select
                                            className="form-control"
                                            id="exampleFormControlSelect1"
                                        >
                                            <option>A</option>
                                            <option>B</option>
                                            <option selected>P</option>
                                            <option>C</option>
                                            <option>D</option>
                                            <i className="fa-regular fa-chevron-down"></i>
                                        </select>
                                    </td>

                                    <td>
                                        <input
                                            type="seatfrom"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="seatto"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="webprice"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="proceeds"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="availtick"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                        />
                                    </td>
                                    <td className="text-justify">
                                        <i
                                            className="fa text-danger fa-times-circle"
                                            aria-hidden="true"
                                        ></i>
                                    </td>
                                </tr>
                            </div>
                        </table>
                    </div>

                    <div className="modal-footer m-1 p-2 justify-content-between">
                        <button type="button" className="btn btn-light">
                            + Add another clone
                        </button>
                        <div>
                            <button type="button" className="btn btn-light">
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
                </div>
            </div>
        </div>
    );
};

export default ListingTicketClone;
