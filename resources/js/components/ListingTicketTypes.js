import React from "react";

const ListingTicketTypes = () => {
    return (
        <div className="modal fade container-fluid" id="tiktypes">
            <div className="modal-dialog modal-sm">
                <div className="modal-content text-center">
                    <div
                        className="modal-header p-2"
                        style={{ background: "#424549", color: "#edf6ff" }}
                    >
                        <b>
                            <h4 className="modal-title">Select Ticket Type</h4>
                        </b>

                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                        ></button>
                    </div>

                    <div className="form-group modal-body m-1 p-3">
                        <button type="button" className="btn btn-light p-2">
                            Name of Ticket Type
                        </button>
                    </div>
                    <div className="modal-footer m-1 p-2 justify-content-between">
                        <button
                            type="button"
                            className="btn btn-secondary "
                            data-bs-toggle="modal"
                            data-bs-target="#ListingModal"
                            style={{ float: "left" }}
                        >
                            Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingTicketTypes;
