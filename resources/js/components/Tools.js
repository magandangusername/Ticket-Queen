import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListingDelete from "./ListingDelete";

class Tools extends Component {
    render() {
        return (
            <BrowserRouter>
                <hr class="bg-information border-2 border-top border-information" />
                <div class="container-fluid row col-md-auto">
                    <div class="d-inline col container-fluid">
                        <a
                            class="text-decoration-none col tools"
                            href=""
                            onclick="event.preventDefault()"
                        >
                            Publish All Selected
                        </a>
                    </div>
                    <div class="d-inline col">
                        <a class="text-decoration-none col tools" href="">
                            Unpublish All Selected
                        </a>
                    </div>
                    <div class="col">
                        <a class="text-decoration-none col tools" href="">
                            Delete All Selected
                        </a>
                    </div>
                    <div class="d-inline col">
                        <a class="text-decoration-none col tools" href="">
                            Change to Paper Tickets
                        </a>
                    </div>
                    <div class="d-inline col">
                        <a class="text-decoration-none col tools" href="">
                            Change to E-Tickets
                        </a>
                    </div>
                    <div class="col">
                        <a class="text-decoration-none col tools" href="">
                            Opt In to Last Minute Sales All Selected
                        </a>
                    </div>
                    <div class="col">
                        <a class="text-decoration-none col tools" href="">
                            Opt Out of Last Minute Sales All Selected
                        </a>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<Tools />, document.getElementById("Tools"));
