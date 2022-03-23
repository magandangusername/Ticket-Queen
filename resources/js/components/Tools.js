import React, { useState, Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListingDelete from "./ListingDelete";

const Tools = () => {


    return (
        <>
            {visible && (
                <div>
                    <hr className="bg-information border-2 border-top border-information" />
                    <div className="container-fluid row col-md-auto">
                        <div className="d-inline col container-fluid">
                            <a
                                className="text-decoration-none col tools"
                                href=""
                                onClick={(e) => e.preventDefault()}
                            >
                                Publish All Selected
                            </a>
                        </div>
                        <div className="d-inline col">
                            <a
                                className="text-decoration-none col tools"
                                href=""
                            >
                                Unpublish All Selected
                            </a>
                        </div>
                        <div className="col">
                            <a
                                className="text-decoration-none col tools"
                                href=""
                            >
                                Delete All Selected
                            </a>
                        </div>
                        <div className="d-inline col">
                            <a
                                className="text-decoration-none col tools"
                                href=""
                            >
                                Change to Paper Tickets
                            </a>
                        </div>
                        <div className="d-inline col">
                            <a
                                className="text-decoration-none col tools"
                                href=""
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
