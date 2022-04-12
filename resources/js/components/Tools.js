import React from "react";

const Tools = ({
    visible,
    handleTicketDeleteSelected,
    handleTicketPublishSelected,
    handleTicketUnpublishSelected,
    handleTicketToPaperSelected,
    handleTicketToESelected
}) => {
    return (
        <>
            {visible && (
                <div className="container-fluid position-fixed position-absolute bottom-0 start-50 translate-middle-x">
                    <hr className="bg-information border-2 border-top border-information" />
                    <div className="container-fluid row col-md-auto">
                        <div className="d-inline col container-fluid">
                            <a
                                className="text-decoration-none col tools"
                                href=""
                                onClick={(e) => {handleTicketPublishSelected(); e.preventDefault()}}
                            >
                                Publish All Selected
                            </a>
                        </div>
                        <div className="d-inline col">
                            <a
                                className="text-decoration-none col tools"
                                href=""
                                onClick={(e) => {handleTicketUnpublishSelected(); e.preventDefault()}}
                            >
                                Unpublish All Selected
                            </a>
                        </div>
                        <div className="col">
                            <a
                                className="text-decoration-none col tools"
                                href=""
                                onClick={(e) => {
                                    handleTicketDeleteSelected();
                                    e.preventDefault();
                                }}
                            >
                                Delete All Selected
                            </a>
                        </div>
                        <div className="d-inline col">
                            <a
                                className="text-decoration-none col tools"
                                href=""
                                onClick={(e) => {handleTicketToPaperSelected(); e.preventDefault()}}
                            >
                                Change to Paper Tickets
                            </a>
                        </div>
                        <div className="d-inline col">
                            <a
                                className="text-decoration-none col tools"
                                href=""
                                onClick={(e) => {handleTicketToESelected(); e.preventDefault()}}
                            >
                                Change to E-Tickets
                            </a>
                        </div>
                        <div className="col">
                            <a
                                className="text-decoration-none col tools"
                                href=""
                            >
                                Opt In to Last Minute Sales All Selected
                            </a>
                        </div>
                        <div className="col">
                            <a
                                className="text-decoration-none col tools"
                                href=""
                            >
                                Opt Out of Last Minute Sales All Selected
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Tools;

// if (document.getElementById("Tools")) {
//     ReactDOM.render(<Tools />, document.getElementById("Tools"));
// }
