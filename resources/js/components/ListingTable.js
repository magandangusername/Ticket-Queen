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
    const [ticketEdit, setTicketEdit] = useState([]);

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
        const editList = tickets.filter((ticket) => tickets.Listing_ID === id);
        setTicketEdit(editList);
        console.log(editList);
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

                {ticketEdit.length ? (
                    <ListingEditTicket ticketEdit={ticketEdit} />
                ) : (
                    <div className="modal" id="myModal">
                        <div
                            className="modal-dialog modal-lg"
                            // style=" overflow-y: initial !important"
                            style={{overflowY: "initial !important"}}
                        >
                            <div className="modal-content">
                                {/* <!-- Modal Header --> */}
                                <div className="modal-header">
                                    <h4>Concert name</h4>
                                    <p>
                                        <b>Date</b>
                                        <br />
                                    </p>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                    ></button>
                                </div>

                                {/* <!-- Modal body --> */}
                                <div className="row modal-body" style={{height: 90 + "vh"}}>
                                    <div
                                        className="container-fluid col"
                                        style={{overflowY: "scroll", maxHeight: 100 + "%"}}
                                    >
                                        <form>
                                            <div className="row">
                                                <div className="form-group col">
                                                    <label  className="exampleFormControlInput1">
                                                        Available Tickets*
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="exampleFormControlInput1"
                                                    />
                                                </div>

                                                <div className="form-group col">
                                                    <label  className="exampleFormControlSelect1">
                                                        Ticket Separation
                                                    </label>
                                                    <select
                                                        className="form-control"
                                                        id="exampleFormControlSelect1"
                                                    >
                                                        <option>Any</option>
                                                        <option>None</option>
                                                        <option defaultValue>
                                                            Avoid leaving one ticket
                                                        </option>
                                                        <option>
                                                            Avoid leaving one or three
                                                            tickets
                                                        </option>
                                                        <option>Avoid odd numbers</option>
                                                    </select>
                                                </div>
                                                <div className="form-group col">
                                                    <label  className="exampleFormControlInput1">
                                                        Quantity Sold
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="exampleFormControlInput1"
                                                    />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="form-group col">
                                                    <label  className="exampleFormControlInput1">
                                                        Section*
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="exampleFormControlInput1"
                                                    />
                                                </div>

                                                <div className="form-group col">
                                                    <label  className="exampleFormControlInput1">
                                                        Row
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="exampleFormControlInput1"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <label
                                                        className=""
                                                         className="#inlineFormInputGroupUsername"
                                                    >
                                                        Seats
                                                    </label>
                                                    <div className="input-group">
                                                        {/* this needs to be fixed in the database */}
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="inlineFormInputGroupMinimum"
                                                        />
                                                        <div className="input-group-prepend">
                                                            <div className="input-group-text">
                                                                To
                                                            </div>
                                                        </div>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="inlineFormInputGroupMaximum"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row my-1">
                                                <div className="col">
                                                    <label
                                                        className=""
                                                         className="inlineFormInputGroupUsername"
                                                    >
                                                        Website Price*
                                                    </label>
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <div className="input-group-text">
                                                                A$
                                                            </div>
                                                        </div>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="inlineFormInputGroupUsername"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col">
                                                    <label
                                                        className=""
                                                         className="inlineFormInputGroupUsername"
                                                    >
                                                        Proceeds*
                                                    </label>
                                                    <div className="input-group ">
                                                        <div className="input-group-prepend">
                                                            <div className="input-group-text">
                                                                A$
                                                            </div>
                                                        </div>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="inlineFormInputGroupUsername"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <label  className="exampleFormControlSelect1">
                                                        Ticket Separation
                                                    </label>
                                                    <select
                                                        className="form-control"
                                                        id="exampleFormControlSelect1"
                                                    >
                                                        <option>AUD</option>
                                                        <option>AED</option>
                                                        <option>ARS</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="form-group col">
                                                    <label  className="exampleFormControlInput1">
                                                        Face Value*
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="exampleFormControlInput1"
                                                    />
                                                </div>

                                                <div className="form-group col">
                                                    <label  className="exampleFormControlInput1">
                                                        Max Display Quantity*
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="exampleFormControlInput1"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <br />
                                                <p>
                                                    <b>Select Restrictions on Use</b>
                                                    <br />
                                                    If any of the following conditions apply
                                                    to your tickets, please select them from
                                                    the list below. If there is a
                                                    restriction on the use of your ticket
                                                    not shown here, please stop listing and
                                                    contact us.
                                                    <br />
                                                </p>
                                            </div>
                                            <div className="row">
                                                <div className="listboxes col">
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            id="defaultCheck1"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                             className="defaultCheck1"
                                                        >
                                                            Show All Listings
                                                        </label>
                                                    </div>
                                                    <div className="form-check ">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            id="defaultCheck1"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                             className="defaultCheck1"
                                                        >
                                                            Show Listings Eligible For Last
                                                            Minute Sales
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            id="defaultCheck1"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                             className="defaultCheck1"
                                                        >
                                                            Show Active Listings
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            id="defaultCheck1"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                             className="defaultCheck1"
                                                        >
                                                            Show Inactive Listings
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            id="defaultCheck1"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                             className="defaultCheck1"
                                                        >
                                                            Show All Listings
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            id="defaultCheck1"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                             className="defaultCheck1"
                                                        >
                                                            Show Listings Eligible For Last
                                                            Minute Sales
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            id="defaultCheck1"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                             className="defaultCheck1"
                                                        >
                                                            Show Active Listings
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            id="defaultCheck1"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                             className="defaultCheck1"
                                                        >
                                                            Show Inactive Listings
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            id="defaultCheck1"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                             className="defaultCheck1"
                                                        >
                                                            Show Inactive Listings
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="listboxes col">
                                                    <div className="form-check ">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            id="defaultCheck1"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                             className="defaultCheck1"
                                                        >
                                                            Show All Listings
                                                        </label>
                                                    </div>
                                                    <div className="form-check ">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            id="defaultCheck1"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                             className="defaultCheck1"
                                                        >
                                                            Show Listings Eligible For Last
                                                            Minute Sales
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            id="defaultCheck1"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                             className="defaultCheck1"
                                                        >
                                                            Show Active Listings
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            id="defaultCheck1"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                             className="defaultCheck1"
                                                        >
                                                            Show Inactive Listings
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            id="defaultCheck1"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                             className="defaultCheck1"
                                                        >
                                                            Show All Listings
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            id="defaultCheck1"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                             className="defaultCheck1"
                                                        >
                                                            Show Listings Eligible For Last
                                                            Minute Sales
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            id="defaultCheck1"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                             className="defaultCheck1"
                                                        >
                                                            Show Active Listings
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            id="defaultCheck1"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                             className="defaultCheck1"
                                                        >
                                                            Show Inactive Listings
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <b>Listing notes</b>
                                            </div>

                                            <div className="row">
                                                <div className="listboxes col">
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            id="defaultCheck2"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                             className="defaultCheck1"
                                                        >
                                                            Show All Listings
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            id="defaultCheck2"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                             className="defaultCheck1"
                                                        >
                                                            Show Listings Eligible For Last
                                                            Minute Sales
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            id="defaultCheck2"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                             className="defaultCheck1"
                                                        >
                                                            Show Active Listings
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            id="defaultCheck2"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                             className="defaultCheck1"
                                                        >
                                                            Show Inactive Listings
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            id="defaultCheck2"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                             className="defaultCheck1"
                                                        >
                                                            Show All Listings
                                                        </label>
                                                    </div>
                                                    <div className="form-check ">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            id="defaultCheck2"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                             className="defaultCheck1"
                                                        >
                                                            Show Listings Eligible For Last
                                                            Minute Sales
                                                        </label>
                                                    </div>
                                                    <div className="form-check ">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            id="defaultCheck2"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                             className="defaultCheck1"
                                                        >
                                                            Show Active Listings
                                                        </label>
                                                    </div>
                                                    <div className="form-check ">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            id="defaultCheck2"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                             className="defaultCheck1"
                                                        >
                                                            Show Inactive Listings
                                                        </label>
                                                    </div>
                                                    <div className="form-check ">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            id="defaultCheck2"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                             className="defaultCheck1"
                                                        >
                                                            Show Inactive Listings
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="listboxes col">
                                                    <div className="form-check ">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            id="defaultCheck2"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                             className="defaultCheck1"
                                                        >
                                                            Show All Listings
                                                        </label>
                                                    </div>
                                                    <div className="form-check ">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            id="defaultCheck2"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                             className="defaultCheck1"
                                                        >
                                                            Show Listings Eligible For Last
                                                            Minute Sales
                                                        </label>
                                                    </div>
                                                    <div className="form-check ">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            id="defaultCheck2"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                             className="defaultCheck1"
                                                        >
                                                            Show Active Listings
                                                        </label>
                                                    </div>
                                                    <div className="form-check ">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            id="defaultCheck2"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                             className="defaultCheck1"
                                                        >
                                                            Show Inactive Listings
                                                        </label>
                                                    </div>
                                                    <div className="form-check ">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            id="defaultCheck2"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                             className="defaultCheck1"
                                                        >
                                                            Show All Listings
                                                        </label>
                                                    </div>
                                                    <div className="form-check ">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            id="defaultCheck2"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                             className="defaultCheck1"
                                                        >
                                                            Show Listings Eligible For Last
                                                            Minute Sales
                                                        </label>
                                                    </div>
                                                    <div className="form-check ">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            id="defaultCheck2"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                             className="defaultCheck1"
                                                        >
                                                            Show Active Listings
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            id="defaultCheck2"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                             className="defaultCheck1"
                                                        >
                                                            Show Inactive Listings
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-3">
                                        <div className="form-check form-switch border p-1">
                                            <input
                                                className="form-check-input ms-auto"
                                                type="checkbox"
                                                role="switch"
                                                id="flexSwitchCheckDefault"
                                            />
                                            <label
                                                className="form-check-label ms-5"
                                                 className="flexSwitchCheckDefault"
                                            >
                                                Publish
                                            </label>
                                        </div>
                                        <div className="border p-1">
                                            <label className="form-label"  className="">
                                                Sold Status
                                            </label>
                                            <br />
                                            <label className="form-label"  className="">
                                                blah blah
                                            </label>
                                        </div>
                                        <div className="border p-1">
                                            <label className="form-label"  className="">
                                                Listing ID
                                            </label>
                                            <br />
                                            <label className="form-label"  className="">
                                                1232132131
                                            </label>
                                        </div>
                                        <div className="border p-1">
                                            <label className="form-label"  className="">
                                                Ticket Type
                                            </label>
                                            <br />
                                            <label className="form-label"  className="">
                                                E-ticket
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Modal footer --> */}
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-light float-sm-start"
                                    >
                                        Clone
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-danger float-sm-start"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-success float-sm-end"
                                    >
                                        Save
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-secondary float-sm-end"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </React.StrictMode>
        </>
    );
};
//by [w@r.fr{e}(97),k]
export default ListingTable;

if (document.getElementById("ListingTable")) {
    ReactDOM.render(<ListingTable />, document.getElementById("ListingTable"));
}
