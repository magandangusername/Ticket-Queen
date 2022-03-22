import axios from "axios";
import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ListingConcerts from "./ListingConcerts";

const ListingTable = () => {
    const [concerts, setConcerts] = useState([]);
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        const fetchConcert = async () => {
            try {
                const response = await axios.get("/api/concerts");
                setConcerts(response.data);

                var arrOfObj = response.data;

                var result = arrOfObj.map(function (el) {
                    var o = Object.assign({}, el);
                    o.isActive = false;
                    return o;
                });
                console.log(result);
                setConcerts(result);
            } catch (error) {
                if (error.response) {
                    // Not in the 200 response range
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else {
                    console.log(`Error: ${error.message}`);
                }
            }
        };
        const fetchTicket = async () => {
            try {
                const response = await axios.get("/api/tickets");
                setTickets(response.data);

                var arrOfObj = response.data;

                var result = arrOfObj.map(function (el) {
                    var o = Object.assign({}, el);
                    o.isActive = false;
                    return o;
                });
                console.log(result);
                setTickets(result);
            } catch (error) {
                if (error.response) {
                    // Not in the 200 response range
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else {
                    console.log(`Error: ${error.message}`);
                }
            }
        };

        fetchConcert();
        fetchTicket();
    }, []);

    return (
        <table className="table">
            <thead className="thead-light">
                <tr>
                    <th></th>
                    <th className="text-center">Ticket Details</th>
                    <th className="text-center"></th>
                    <th className="text-center">Available Tickets</th>
                    <th className="text-center">Ticket Sold</th>
                    <th className="text-center"></th>
                    <th className="text-center">Days</th>
                    <th></th>
                </tr>
            </thead>

            <tbody id="tabletickets">
                {concerts.length ? (
                    <>
                        {concerts.map((concert) => (
                            <ListingConcerts
                                key={concert.ConcertID}
                                concert={concert}
                                tickets={tickets}
                            />
                        ))}
                    </>
                ) : (
                    <tr style={{ marginTop: "2rem" }}>
                        <td>Nothing to display.</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default ListingTable;

if (document.getElementById("ListingTable")) {
    ReactDOM.render(<ListingTable />, document.getElementById("ListingTable"));
}
