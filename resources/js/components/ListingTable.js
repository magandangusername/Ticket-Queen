import axios from "axios";
import { constant, functionsIn } from "lodash";
import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ListingConcerts from "./ListingConcerts";
import Tools from "./Tools";
import ListingSortBy from "./ListingSortBy";

const ListingTable = () => {
    const [concerts, setConcerts] = useState([]);
    const [tickets, setTickets] = useState([]);
    const [fetchError, setFetchError] = useState("");
    const [isConcertsLoading, setIsConcertsLoading] = useState(true);
    const [isTicketsLoading, setIsTicketsLoading] = useState(true);
    const [visible, setVisible] = useState(false);
    const [sortAllListing, setSortAllListing] = useState(true);
    const [sortEligibleLastMinuteSales, setSortEligibleLastMinuteSales] =
        useState(false);
    const [sortActive, setSortActive] = useState(false);
    const [sortInactive, setSortInactive] = useState(false);

    // gets data when opening/refreshing the page
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
            setConcerts(result);

            // p.s. to myself: add a condition for active/expired concert in the future
        } catch (error) {
            setFetchError(error.message);
        } finally {
            setIsConcertsLoading(false);
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
                o.isPriceSelected = false;
                o.isAvailableTicketSelected = false;
                return o;
            });
            setTickets(result);
        } catch (error) {
            setFetchError(error.message);
        } finally {
            setIsTicketsLoading(false);
        }
    };

    useEffect(() => {
        fetchConcert();
        fetchTicket();
    }, []);

    useEffect(() => {
        const selected = tickets.filter((ticket) => ticket.isSelected === true);

        if (selected.length > 0) setVisible(true);
        else setVisible(false);

        // console.log(tickets);
    }, [tickets]);

    // for logging purposes
    useEffect(() => {
        console.log(concerts);
    }, [concerts]);

    useEffect(() => {
        if (sortEligibleLastMinuteSales || sortActive || sortInactive)
            setSortAllListing(false);
        else if (!sortEligibleLastMinuteSales && !sortActive && !sortInactive)
            setSortAllListing(true);

        // handleSort();
    }, [sortEligibleLastMinuteSales, sortActive, sortInactive]);

    useEffect(() => {
        if (sortAllListing) {
            setSortEligibleLastMinuteSales(false);
            setSortActive(false);
            setSortInactive(false);
        } else if (
            !sortAllListing &&
            !sortEligibleLastMinuteSales &&
            !sortActive &&
            !sortInactive
        ) {
            setSortAllListing(true);
        }
        // handleSort();
    }, [sortAllListing]);

    const handleSort = async () => {
        if (sortAllListing) {
            setIsConcertsLoading(true);
            setIsTicketsLoading(true);
            fetchConcert();
            fetchTicket();
        }
        if (sortEligibleLastMinuteSales) {
            const listConcerts = concerts.filter(
                (concert) => concert.ConcertID === concert.ConcertID
            );
            setConcerts(listConcerts);
        }
        if (sortActive) {
            const listConcerts = concerts.filter(
                (concert) => concert.status === "active"
            );
            setConcerts(listConcerts);
        }
        if (sortInactive) {
            const listConcerts = concerts.filter(
                (concert) =>
                    concert.status === "expired" ||
                    concert.status === "disabled"
            );
            setConcerts(listConcerts);
        }
    };

    const handleCheck = async (id) => {
        //finds the set of data from the list and set its value
        const listTickets = tickets.map((ticket) =>
            ticket.Listing_ID === id
                ? { ...ticket, isSelected: !ticket.isSelected }
                : ticket
        );
        setTickets(listTickets);
    };

    const handlePriceSelect = async (id) => {
        const listTickets = tickets.map((ticket) =>
            ticket.Listing_ID === id
                ? { ...ticket, isPriceSelected: !ticket.isPriceSelected }
                : ticket
        );
        setTickets(listTickets);

        const ticket = tickets.filter((ticket) => ticket.Listing_ID === id);

        if (ticket[0].isPriceSelected === true) {
            ticketUpdate(ticket);
        }
    };

    const handlePriceChange = async (id, val, key) => {
        const listTickets = tickets.map((ticket) =>
            ticket.Listing_ID === id ? { ...ticket, Price: val } : ticket
        );

        setTickets(listTickets);
    };

    const handleAvailableTicketSelect = async (id) => {
        const listTickets = tickets.map((ticket) =>
            ticket.Listing_ID === id
                ? {
                      ...ticket,
                      isAvailableTicketSelected:
                          !ticket.isAvailableTicketSelected,
                  }
                : ticket
        );
        setTickets(listTickets);

        const ticket = tickets.filter((ticket) => ticket.Listing_ID === id);

        if (ticket[0].isAvailableTicketSelected !== false) {
            ticketUpdate(ticket);
        }
    };

    const handleAvailableTicketChange = async (id, val, key) => {
        const listTickets = tickets.map((ticket) =>
            ticket.Listing_ID === id
                ? { ...ticket, Available_Tickets: val }
                : ticket
        );
        setTickets(listTickets);
    };

    const ticketUpdate = async (ticket) => {
        const ticket_info = {
            Listing_ID: ticket[0].Listing_ID,
            ConcertID: ticket[0].ConcertID,
            Section: ticket[0].Section,
            Row: ticket[0].Row,
            Seats: ticket[0].Seats,
            Ticket_Type: ticket[0].Ticket_Type,
            Price: ticket[0].Price,
            Available_Tickets: ticket[0].Available_Tickets,
            Expiration: ticket[0].Expiration,
            status: ticket[0].status,
        };
        axios
            .post("/api/tickets/update", ticket_info)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error.response);
                setFetchError(error.message);
            });
    };

    // This is the display code
    return (
        <>
            {isConcertsLoading && isTicketsLoading && (
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

            {!fetchError && !isConcertsLoading && !isTicketsLoading && (
                <>
                    <ListingSortBy
                        sortAllListing={sortAllListing}
                        sortEligibleLastMinuteSales={
                            sortEligibleLastMinuteSales
                        }
                        sortActive={sortActive}
                        sortInactive={sortInactive}
                        setSortAllListing={setSortAllListing}
                        setSortEligibleLastMinuteSales={
                            setSortEligibleLastMinuteSales
                        }
                        setSortActive={setSortActive}
                        setSortInactive={setSortInactive}
                        handleSort={handleSort}
                    />
                    <div className="container-fluid">
                        <br />
                        <br />
                        <br />

                        <table className="table border">
                            <thead className="thead-light">
                                <tr>
                                    <th></th>
                                    <th className="text-center border-dark border-4">
                                        Ticket Details
                                    </th>
                                    <th className="text-center border-dark border-4"></th>
                                    <th className="text-center border-dark border-4">
                                        Available Ticket
                                    </th>
                                    <th className="text-center border-dark border-4">
                                        Ticket Sold
                                    </th>
                                    <th className="text-center border-dark border-4"></th>
                                    <th className="text-center border-dark border-4">
                                        Days
                                    </th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody id="tabletickets">
                                {!concerts.length && (
                                    <tr>
                                        <td colSpan={10} style={{textAlign: "center", color: "white"}}>No data to show</td>
                                    </tr>
                                )}
                                {concerts.length ? (
                                    <>
                                        {concerts.map((concert) => (
                                            <ListingConcerts
                                                key={concert.ConcertID}
                                                concert={concert}
                                                tickets={tickets}
                                                setTickets={setTickets}
                                                handleCheck={handleCheck}
                                                handlePriceSelect={
                                                    handlePriceSelect
                                                }
                                                handlePriceChange={
                                                    handlePriceChange
                                                }
                                                handleAvailableTicketSelect={
                                                    handleAvailableTicketSelect
                                                }
                                                handleAvailableTicketChange={
                                                    handleAvailableTicketChange
                                                }
                                            />
                                        ))}
                                    </>
                                ) : null}
                            </tbody>
                        </table>
                        <Tools visible={visible} />
                    </div>
                </>
            )}
        </>
    );
};
//by [w@r.fr{e}(97),k]
export default ListingTable;

if (document.getElementById("ListingTable")) {
    ReactDOM.render(<ListingTable />, document.getElementById("ListingTable"));
}
