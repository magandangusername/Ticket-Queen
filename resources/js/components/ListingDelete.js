import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";

class ListingDelete extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<ListingDelete />, document.getElementById("listingDelete"));
