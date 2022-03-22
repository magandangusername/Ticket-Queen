import axios from "axios";
import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ListingConcerts from "./ListingConcerts";

const ListingTable = () => {
    const [concerts, setConcerts] = useState([]);
    const [tickets, setTickets] = useState([]);
    const [fetchError, setFetchError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    // gets data when opening/refreshing the page
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
                setFetchError(err.message);
            } finally {
                setIsLoading(false);
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
                setFetchError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchConcert();
        fetchTicket();
    }, []);

    return (
        <>
            {isLoading && (
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Loading Items...</th>
                        </tr>
                    </thead>
                </table>
            )}
            {fetchError && (
                <table className="table">
                    <thead className="thead-light">
                        <th>
                            <p
                                style={{ color: "red" }}
                            >{`Error: ${fetchError}`}</p>
                        </th>
                    </thead>
                </table>
            )}
            {!fetchError && !isLoading && (
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
                        {concerts.length && (
                            <>
                                {concerts.map((concert) => (
                                    <ListingConcerts
                                        key={concert.ConcertID}
                                        concert={concert}
                                        tickets={tickets}
                                    />
                                ))}
                            </>
                        )}
                    </tbody>
                </table>
            )}
        </>
    );
};

export default ListingTable;

if (document.getElementById("ListingTable")) {
    ReactDOM.render(<ListingTable />, document.getElementById("ListingTable"));
}
