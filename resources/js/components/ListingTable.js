import axios from "axios";
import { constant, functionsIn, initial } from "lodash";
import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ListingConcerts from "./ListingConcerts";
import Tools from "./Tools";
import ListingSortBy from "./ListingSortBy";
import ListingEditTicket from "./ListingEditTicket";
import ListingNew from "./ListingNew";
import { list } from "postcss";

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
    const [ticketEdit, setTicketEdit] = useState([
        {
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
            status: "",
        },
    ]);
    const [ticketRestrictionEdit, setTicketRestrictionEdit] = useState([]);
    const [ticketListingNoteEdit, setTicketListingNoteEdit] = useState([]);
    const [restrictions, setRestrictions] = useState([]);
    const [listingNotes, setListingNotes] = useState([]);
    const [isRestrictionsLoading, setIsRestrictionsLoading] = useState(true);
    const [isTicketEditLoading, setIsTicketEditLoading] = useState(true);

    // gets the concert data from the database
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

    // gets the ticket, restrictions, listing notes data from the database
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
            arrOfObj = restrictions.data;
            result = arrOfObj.map(function (el) {
                var o = Object.assign({}, el);
                o.isChecked = false;
                return o;
            });
            setRestrictions(result);
            const notes = await axios.get("/api/listing_notes");
            arrOfObj = notes.data;
            result = arrOfObj.map(function (el) {
                var o = Object.assign({}, el);
                o.isChecked = false;
                return o;
            });
            setListingNotes(result);
        } catch (error) {
            setFetchError(error.message);
        } finally {
            setIsTicketsLoading(false);
            setIsRestrictionsLoading(false);
        }
    };

    // gets data when opening/refreshing the page
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

    // displays the tool when one or more tickets are selected
    useEffect(() => {
        const selected = tickets.filter((ticket) => ticket.isSelected === true);

        if (selected.length > 0) setVisible(true);
        else setVisible(false);

        // console.log(tickets);
    }, [tickets]);

    // sorting options interaction
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

    // sorting options interaction
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

    // updating the which tickets are selected
    const handleCheck = async (id) => {
        //finds the set of data from the list and set its value
        const listTickets = tickets.map((ticket) =>
            ticket.Listing_ID === id
                ? { ...ticket, isSelected: !ticket.isSelected }
                : ticket
        );
        setTickets(listTickets);
    };

    // handles getting the ticket data from the database to the modal for editting
    const handleTicketEdit = async (id, concert) => {
        try {
            setIsTicketEditLoading(true);
            var editList = tickets.filter((ticket) => ticket.Listing_ID === id);
            // editList = [{...editList, concert}];

            var arrOfObj = editList;

            var result = arrOfObj.map(function (el) {
                var o = Object.assign({}, el);
                o.ConcertID = concert.ConcertID;
                o.ConcertName = concert.ConcertName;
                o.ConcertDate = concert.ConcertDate;
                o.Location = concert.Location;
                o.Total_Available = concert.Total_Available;
                // o.status = concert.status;
                return o;
            });

            setTicketEdit(result);

            const restricts = await axios.get("/api/restrictions/" + id);
            arrOfObj = restricts.data;
            result = arrOfObj.map(function (el) {
                var o = Object.assign({}, el);
                o.isChecked = true;
                return o;
            });
            setTicketRestrictionEdit(result);

            const listnotes = await axios.get("/api/listing_notes/" + id);
            arrOfObj = restricts.data;
            result = arrOfObj.map(function (el) {
                var o = Object.assign({}, el);
                o.isChecked = true;
                return o;
            });
            setTicketListingNoteEdit(result);
        } catch (error) {
            setFetchError(error.message);
        } finally {
            setIsTicketEditLoading(false);
        }
    };

    // updating the ticket input values
    // this function may not be the best, but its the best i could think of.
    const handleTicketEditChange = async (id, input_id, input_type, val = "") => {
        if (input_type === "restriction") {
            var len = ticketRestrictionEdit.filter(
                (ticketrestriction) =>
                    (ticketrestriction.Restriction_ID === input_id) &
                    (ticketrestriction.Listing_ID === id)
            );
            if (len.length > 0) {
                var ticketRestrictEdit = ticketRestrictionEdit.map(
                    (ticketrestrict) =>
                        ticketrestrict.Restriction_ID === input_id
                            ? {
                                  ...ticketrestrict,
                                  isChecked: !ticketrestrict.isChecked,
                              }
                            : ticketrestrict
                );
                setTicketRestrictionEdit(ticketRestrictEdit);
            } else if (len.length === 0) {
                var ticketRestrictEdit = restrictions.map((ticketrestrict) =>
                    ticketrestrict.Restriction_ID === input_id
                        ? {
                              ...ticketrestrict,
                              isChecked: !ticketrestrict.isChecked,
                          }
                        : ticketrestrict
                );
                setRestrictions(ticketRestrictEdit);
            }
        } else if (input_type === "listing_note") {
            var len = ticketListingNoteEdit.filter(
                (ticketlistingnote) =>
                    (ticketlistingnote.Listing_note_ID === input_id) &
                    (ticketlistingnote.Listing_ID === id)
            );
            if (len.length > 0) {
                var ticketListNoteEdit = ticketListingNoteEdit.map(
                    (ticketlistnote) =>
                        ticketlistnote.Listing_note_ID === input_id
                            ? {
                                  ...ticketlistnote,
                                  isChecked: !ticketlistnote.isChecked,
                              }
                            : ticketlistnote
                );
                setTicketListingNoteEdit(ticketListNoteEdit);
            } else if (len.length === 0) {
                var ticketListNoteEdit = listingNotes.map((ticketlistnote) =>
                    ticketlistnote.Listing_note_ID === input_id
                        ? {
                              ...ticketlistnote,
                              isChecked: !ticketlistnote.isChecked,
                          }
                        : ticketlistnote
                );
                setListingNotes(ticketListNoteEdit);
            }
        } else if (input_type === "available_tickets") {
            var ticketinput = ticketEdit.map((ticket) =>
                ticket.Listing_ID === id
                    ? { ...ticket, Available_Tickets: val }
                    : ticket
            );
            setTicketEdit(ticketinput);
        } else if (input_type === "Ticket_Sold") {
            var ticketinput = ticketEdit.map((ticket) =>
                ticket.Listing_ID === id
                    ? { ...ticket, Ticket_Sold: val }
                    : ticket
            );
            setTicketEdit(ticketinput);
        } else if (input_type === "Section") {
            var ticketinput = ticketEdit.map((ticket) =>
                ticket.Listing_ID === id ? { ...ticket, Section: val } : ticket
            );
            setTicketEdit(ticketinput);
        } else if (input_type === "Row") {
            var ticketinput = ticketEdit.map((ticket) =>
                ticket.Listing_ID === id ? { ...ticket, Row: val } : ticket
            );
            setTicketEdit(ticketinput);
        } else if (input_type === "Seats") {
            var ticketinput = ticketEdit.map((ticket) =>
                ticket.Listing_ID === id ? { ...ticket, Seats: val } : ticket
            );
            setTicketEdit(ticketinput);
        } else if (input_type === "Price") {
            var ticketinput = ticketEdit.map((ticket) =>
                ticket.Listing_ID === id ? { ...ticket, Price: val } : ticket
            );
            setTicketEdit(ticketinput);
        } else if (input_type === "publish") {
            if (ticketEdit[0].status === "active") {
                var ticketinput = ticketEdit.map((ticket) =>
                    ticket.Listing_ID === id
                        ? { ...ticket, publish: "disabled" }
                        : ticket
                );
            } else if (ticketEdit[0].status === "disabled") {
                var ticketinput = ticketEdit.map((ticket) =>
                    ticket.Listing_ID === id
                        ? { ...ticket, publish: "active" }
                        : ticket
                );
            }
            setTicketEdit(ticketinput);
        }
    };

    // for logging only in the console
    useEffect(() => {
        console.log(ticketEdit);
    }, [ticketEdit]);

    // setting interaction for price input when focused
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

    // updating the price input value
    const handlePriceChange = async (id, val, key) => {
        const listTickets = tickets.map((ticket) =>
            ticket.Listing_ID === id ? { ...ticket, Price: val } : ticket
        );

        setTickets(listTickets);
    };

    // setting interaction for available ticket input when focused
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

    // updating the available ticket input value
    const handleAvailableTicketChange = async (id, val, key) => {
        const listTickets = tickets.map((ticket) =>
            ticket.Listing_ID === id
                ? { ...ticket, Available_Tickets: val }
                : ticket
        );
        setTickets(listTickets);
    };

    // set publish status of ticket
    const handleTicketPublishChange = async (id) => {
        const listTickets = tickets.map((ticket) =>
            ticket.Listing_ID === id & ticket.status === "active"
                ? { ...ticket, status: "disabled" }
                : ticket.Listing_ID === id & ticket.status === "disabled" ? { ...ticket, status: "active" } : ticket
        );
        setTickets(listTickets);

        const ticket = listTickets.filter((ticket) => ticket.Listing_ID === id);
        ticketUpdate(ticket);
    };

    // update ticket to the database
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

    // for deleting ticket
    const handleTicketDelete = async (ticket) => {
        const ticket_info = {
            Listing_ID: ticket.Listing_ID,
            ConcertID: ticket.ConcertID,
            Section: ticket.Section,
            Row: ticket.Row,
            Seats: ticket.Seats,
            Ticket_Type: ticket.Ticket_Type,
            Price: ticket.Price,
            Available_Tickets: ticket.Available_Tickets,
            Expiration: ticket.Expiration,
            status: ticket.status,
        };
        axios
            .post("/api/tickets/destroy", ticket_info)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error.response);
                setFetchError(error.message);
            });

        var newtickets = tickets.filter(
            (ticket) => ticket.Listing_ID !== ticket_info.Listing_ID
        );

        setTickets(newtickets);
    };

    // This is the display code
    return (
        <>
            <React.StrictMode>
                {isConcertsLoading &&
                    isTicketsLoading &&
                    isRestrictionsLoading && (
                        <table className="">
                            <thead className="w-auto position-absolute top-50 start-50 translate-middle">
                                <tr className="w-auto">
                                    <td>
                                        <div
                                            className="spinner-border text-info"
                                            role="status"
                                        >
                                            <span className="visually-hidden">
                                                Loading...
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-inline text-white">
                                            <h2 className="ps-2">
                                                LOADING ITEMS...
                                            </h2>
                                        </div>
                                    </td>
                                </tr>
                            </thead>
                        </table>
                    )}
                {fetchError && (
                    <table className="table">
                        <thead className="thead-lights bg-color">
                            <tr>
                                <td>
                                    <p
                                        style={{ color: "red" }}
                                    >{`Error: ${fetchError}`}</p>
                                </td>
                            </tr>
                        </thead>
                    </table>
                )}

                {!fetchError &&
                    !isConcertsLoading &&
                    !isTicketsLoading &&
                    !isRestrictionsLoading && (
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
                                setSortAllListingActive={
                                    setSortAllListingActive
                                }
                                setSortEligibleLastMinuteSalesActive={
                                    setSortEligibleLastMinuteSalesActive
                                }
                                setSortActiveActive={setSortActiveActive}
                                setSortInactiveActive={setSortInactiveActive}
                            />
                            <div className="container-fluid overflow-auto table-heights position-absolute top-50 start-50 translate-middle mt-1">
                                <table className="table">
                                    <thead className="thead-lights bg-color sticky-top">
                                        <tr>
                                            <th className="text-center"></th>
                                            <th className="text-center text-dark">
                                                Ticket Details
                                            </th>
                                            <th className="text-center text-dark"></th>
                                            <th className="text-center text-dark">
                                                Available Ticket
                                            </th>
                                            <th className="text-center text-dark">
                                                Ticket Sold
                                            </th>
                                            <th className="text-center"></th>
                                            <th className="text-center text-dark">
                                                Days
                                            </th>
                                            <th className="text-center"></th>
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
                                                        handleCheck={
                                                            handleCheck
                                                        }
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
                                                        handleTicketPublishChange={handleTicketPublishChange}
                                                    />
                                                ))}
                                            </>
                                        ) : null}
                                    </tbody>
                                </table>
                            </div>
                            <Tools visible={visible} />
                        </>
                    )}

                {/* This thing still works but with errors */}
                {ticketEdit.length ? (
                    <ListingEditTicket
                        ticketEdit={ticketEdit}
                        restrictions={restrictions}
                        listingNotes={listingNotes}
                        handleTicketDelete={handleTicketDelete}
                        isTicketEditLoading={isTicketEditLoading}
                        setIsTicketEditLoading={setIsTicketEditLoading}
                        ticketRestrictionEdit={ticketRestrictionEdit}
                        ticketListingNoteEdit={ticketListingNoteEdit}
                        setTicketRestrictionEdit={setTicketRestrictionEdit}
                        setTicketListingNoteEdit={setTicketListingNoteEdit}
                        handleTicketEditChange={handleTicketEditChange}
                    />
                ) : null}
                <ListingNew concerts={concerts} />
            </React.StrictMode>
        </>
    );
};

export default ListingTable;

if (document.getElementById("ListingTable")) {
    ReactDOM.render(<ListingTable />, document.getElementById("ListingTable"));
}
