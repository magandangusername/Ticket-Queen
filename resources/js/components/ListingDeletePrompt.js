import React from "react";

const ListingDeletePrompt = ({ handleTicketDelete, ticketEdit }) => {
    return (
        <div className="modal right fade" id="delete">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div
                        className="modal-header p-2"
                        style={{ background: "#424549", color: "#edf6ff" }}
                    >
                        <h4 className="modal-title" id="staticBackdropLabel">
                            Delete Someting
                        </h4>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <p>
                                Are you sure you want to delete this ticket?
                            </p>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button
                            className="btn btn-default"
                            data-bs-toggle="modal"
                            data-bs-target="#myModal"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                            onClick={() => handleTicketDelete(ticketEdit[0])}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingDeletePrompt;
