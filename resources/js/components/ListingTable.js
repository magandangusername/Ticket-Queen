import axios from "axios";
import { constant, functionsIn, initial } from "lodash";
import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ListingConcerts from "./ListingConcerts";
import Tools from "./Tools";
import ListingSortBy from "./ListingSortBy";
import ListingEditTicket from "./ListingEditTicket";

const ListingTable = () => {
    const [concerts, setConcerts] = useState([]);
    const [tickets, setTickets] = useState([]);
    const [fetchError, setFetchError] = useState("");
    const [isConcertsLoading, setIsConcertsLoading] = useState(true);
    const [isTicketsLoading, setIsTicketsLoading] = useState(true);
    const [visible, setVisible] = useState(false);
    const [sortAllListing, setSortAllListing] = useState([]);
    const [sortEligibleLastMinuteSales, setSortEligibleLastMinuteSales] =
        useState([]);
    const [sortActive, setSortActive] = useState([]);
    const [sortInactive, setSortInactive] = useState([]);
    const [sortAllListingActive, setSortAllListingActive] = useState(true);
    const [
        sortEligibleLastMinuteSalesActive,
        setSortEligibleLastMinuteSalesActive,
    ] = useState(false);
    const [sortActiveActive, setSortActiveActive] = useState(false);
    const [sortInactiveActive, setSortInactiveActive] = useState(false);
    const [sort, setSort] = useState([]);
    const [ticketEdit, setTicketEdit] = useState([{
        Available_Tickets: "",
        ConcertID: "",
        Expiration: "",
        Listing_ID: "",
        Price: "",
        Row: "",
        Seats: "",
        Section: "",
        Ticket_Sold: "",
        Ticket_Type: "",
        created_at: "",
        isAvailableTicketSelected: "",
        isPriceSelected: "",
        isSelected: "",
        status: ""

    }]);
    const [restrictions, setRestrictions] = useState([]);
    const [listingNotes, setListingNotes] = useState([]);
    const [isRestrictionsLoading, setIsRestrictionsLoading] = useState(true);

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

            const restrictions = await axios.get("/api/restrictions");
            setRestrictions(response.data);
            const notes = await axios.get("/api/listing_notes");
            setListingNotes(notes.data);
        } catch (error) {
            setFetchError(error.message);
        } finally {
            setIsTicketsLoading(false);
            setIsRestrictionsLoading(false);
        }
    };

    useEffect(() => {
        fetchConcert();
        fetchTicket();

        // setSortAllListing(concerts);
        // const inactiveList = concerts.filter(
        //     (concert) => concert.status === "expired"
        // );
        // setSortInactive(inactiveList);
        // const activeList = concerts.filter(
        //     (concert) => concert.status === "active"
        // );
        // setSortActive(activeList);

        // handleSort();
    }, []);

    useEffect(() => {
        const selected = tickets.filter((ticket) => ticket.isSelected === true);

        if (selected.length > 0) setVisible(true);
        else setVisible(false);

        // console.log(tickets);
    }, [tickets]);

    // for logging purposes
    // useEffect(() => {
    //     console.log(concerts);
    // }, [concerts]);

    useEffect(() => {
        if (
            sortEligibleLastMinuteSalesActive ||
            sortActiveActive ||
            sortInactiveActive
        )
            setSortAllListingActive(false);
        else if (
            !sortEligibleLastMinuteSalesActive &&
            !sortActiveActive &&
            !sortInactiveActive
        )
            setSortAllListingActive(true);
        // else if (sortAllListingActive) {
        //     setSortAllListingActive(false);
        // }

        // console.log(sortEligibleLastMinuteSales);
        // console.log(sortActive);
        // console.log(sortInactive);
        // console.log(sortAllListing);

        // handleSort();
    }, [
        sortEligibleLastMinuteSalesActive,
        sortActiveActive,
        sortInactiveActive,
        sortAllListingActive,
    ]);

    useEffect(() => {
        if (sortAllListingActive) {
            setSortEligibleLastMinuteSalesActive(false);
            setSortActiveActive(false);
            setSortInactiveActive(false);
            console.log("all active effect");
        }
    }, [sortAllListingActive]);

    // useEffect(() => {
    //     //sorting

    //     if (sortAllListingActive) {
    //         setSortAllListing(concerts);
    //     } else {
    //         setSortAllListing([]);
    //     }
    //     if (sortInactiveActive) {
    //         const inactiveList = concerts.filter(
    //             (concert) => concert.status === "expired"
    //         );
    //         setSortInactive(inactiveList);
    //     } else {
    //         setSortInactive([]);
    //     }
    //     if (sortActiveActive) {
    //         const activeList = concerts.filter(
    //             (concert) => concert.status === "active"
    //         );
    //         setSortActive(activeList);
    //     } else {
    //         setSortActive([]);
    //     }

    //     // console.log(sortAllListing);
    //     // console.log(sortActive);
    //     // console.log(sortInactive);

    //     handleSort();
    //     // console.log("combined active effect");
    // }, [
    //     sortEligibleLastMinuteSalesActive,
    //     sortActiveActive,
    //     sortInactiveActive,
    //     sortAllListingActive,
    //     concerts,
    // ]);

    // useEffect(() => {
    //     console.log(sort);
    // }, [sort]);

    // const handleSort = () => {
    //     var al;
    //     var merged;
    //     var merged2;
    //     if (sortActiveActive) {
    //         al = new Set(sort.map((x) => x.ConcertID));
    //         merged = [
    //             ...sort,
    //             ...sortActive.filter((x) => !al.has(x.ConcertID)),
    //         ];
    //         // console.log(merged);
    //         setSort(merged);
    //     }

    //     // var al = new Set(sortAllListing.map((x) => x.ConcertID));
    //     // var merged = [
    //     //     ...sortAllListing,
    //     //     ...sortInactive.filter((x) => !al.has(x.ConcertID)),
    //     // ];

    //     if (sortInactiveActive) {
    //         al = new Set(sort.map((x) => x.ConcertID));
    //         vmerged2 = [
    //             ...sort,
    //             ...sortActive.filter((x) => !al.has(x.ConcertID)),
    //         ];
    //         // console.log(merged);
    //         setSort(merged2);
    //     }

    //     if(sortAllListingActive) {

    //         setSort(concerts);
    //     }
    //     // var al = new Set(merged.map((x) => x.ConcertID));
    //     // var merged2 = [
    //     //     ...merged,
    //     //     ...sortActive.filter((x) => !al.has(x.ConcertID)),
    //     // ];

    //     // setSort(merged2);
    // };

    // useEffect(() => {
    //   console.log(ticketEdit)
    // }, [ticketEdit])


    const handleCheck = async (id) => {
        //finds the set of data from the list and set its value
        const listTickets = tickets.map((ticket) =>
            ticket.Listing_ID === id
                ? { ...ticket, isSelected: !ticket.isSelected }
                : ticket
        );
        setTicketEdit(listTickets);
    };

    const handleTicketEdit = async (id) => {
        const editList = tickets.filter((ticket) => ticket.Listing_ID === id);
        setTicketEdit(editList);
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
            <React.StrictMode>
                {isConcertsLoading && isTicketsLoading && isRestrictionsLoading && (
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

                {!fetchError && !isConcertsLoading && !isTicketsLoading && !isRestrictionsLoading && (
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
                            // handleSort={handleSort}
                            sortAllListingActive={sortAllListingActive}
                            sortEligibleLastMinuteSalesActive={
                                sortEligibleLastMinuteSalesActive
                            }
                            sortActiveActive={sortActiveActive}
                            sortInactiveActive={sortInactiveActive}
                            setSortAllListingActive={setSortAllListingActive}
                            setSortEligibleLastMinuteSalesActive={
                                setSortEligibleLastMinuteSalesActive
                            }
                            setSortActiveActive={setSortActiveActive}
                            setSortInactiveActive={setSortInactiveActive}
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
                                            <td
                                                colSpan={10}
                                                style={{
                                                    textAlign: "center",
                                                    color: "white",
                                                }}
                                            >
                                                No data to show
                                            </td>
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
                                                    handleTicketEdit={
                                                        handleTicketEdit
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

                {/* This thing still works with errors */}
                {ticketEdit.length ? (
                    <ListingEditTicket ticketEdit={ticketEdit} restrictions={restrictions} />
                ) : null}
            </React.StrictMode>
        </>
    );
};
//by [w@r.fr{e}(97),k]
export default ListingTable;

if (document.getElementById("ListingTable")) {
    ReactDOM.render(<ListingTable />, document.getElementById("ListingTable"));
}
