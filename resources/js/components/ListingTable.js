import axios from "axios";
import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ListingConcerts from "./ListingConcerts";
// import Tools from "./Tools";

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
                    o.isSelected = false;
                    return o;
                });
                console.log(result);
                setConcerts(result);
            } catch (error) {
                setFetchError(err.message);
            }
        };
        const fetchTicket = async () => {
            try {
                const response = await axios.get("/api/tickets");
                setTickets(response.data);

                var arrOfObj = response.data;

                var result = arrOfObj.map(function (el) {
                    var o = Object.assign({}, el);
                    o.isSelected = false;
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

    //not finished, to be continued
    const handleCheck = async (id) => {
        //finds the set of data from the list and set its value
        const listTickets = tickets.map((ticket) =>
            ticket.Listing_ID === id
                ? { ...ticket, isSelected: !ticket.isSelected }
                : ticket
        );
        setTickets(listTickets);
        console.log(tickets);

        const selected = tickets.filter(ticket => ticket.isSelected === true)

        // if (tickets.length > 0) setVisible(true);
        // const myTicket = listTickets.filter((ticket) => ticket.Listing_ID === id);
        // const updateOptions = {
        //     method: "PATCH",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({ checked: myItem[0].checked }),
        // };
        // const reqUrl = `api/ticket/${id}`;
        // const result = await apiRequest(reqUrl, updateOptions);
        // if (result) setFetchError(result);
    };

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
                                        setTickets={setTickets}
                                        handleCheck={handleCheck}
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
//by [w@r.fr{e}(97),k]
export default ListingTable;

if (document.getElementById("ListingTable")) {
    ReactDOM.render(<ListingTable />, document.getElementById("ListingTable"));
}
