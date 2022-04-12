import axios from "axios";
import { constant, functionsIn, initial } from "lodash";
import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ListingConcerts from "./ListingConcerts";
import Tools from "./Tools";
import ListingSortBy from "./ListingSortBy";
import ListingEditTicket from "./ListingEditTicket";
import ListingNew from "./ListingNew";
import ListingTicketClone from "./ListingTicketClone";
import ListingTicketTypes from "./ListingTicketTypes";
import ListingDeletePrompt from "./ListingDeletePrompt";
import ListingNewListing from "./ListingNewListing";
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
    const [isTicketEditModalVisible, setIsTicketEditModalVisible] =
        useState(false);
    const [isTicketSaving, setIsTicketSaving] = useState(false);
    const [successMsg, setSuccessMsg] = useState(null);
    const [ticketClone, setTicketClone] = useState([]);
    const [createConcert, setCreateConcert] = useState({
        ConcertName: "",
        Location: "",
    });
    const [search, setSearch] = useState("");

    // gets the concert data from the database
    const fetchConcert = async () => {
        try {
            const response = await axios.get("/api/concerts");

            var arrOfObj = response.data;

            var result = arrOfObj.map(function (el) {
                var o = Object.assign({}, el);
                o.isSelected = false;
                o.isVisible = true;
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

    // for logging only in the console
    useEffect(() => {
        console.log(sort);
        // console.log(document.getElementById("tableSearch").value);
    }, [sort]);

    // useEffect(() => {
    //   console.log(document.getElementById("tableSearch").value);
    // }, [(document.getElementById("tableSearch").value)]);

    // const testfunc = () => {
    //     console.log(document.getElementById("tableSearch").value);
    // }


    // sorting options interaction
    useEffect(() => {
        var filter = [];
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

        // prevents duplicates but idk if it works
        // if(!sortActiveActive) {
        //     filter = sort.filter((remove) => remove.status != "active")
        // }
        // if(!sortInactiveActive) {
        //     filter = sort.filter((remove) => remove.status != "expired")
        // }

        // var activecombinedList = [];
        // var inactivecombinedList = [];
        // if (sortActiveActive) {
        //     const activeList = concerts.filter(
        //         (concert) => concert.status === "active"
        //     );
        //     activecombinedList = [...new Set([...activeList ,...filter])];
        // }
        // if (sortInactiveActive) {
        //     const inactiveList = concerts.filter(
        //         (concert) => concert.status === "expired"
        //     );
        //     inactivecombinedList = [...new Set([...inactiveList ,...filter])];

        // }

        // setSort([...new Set([...activecombinedList, ...inactivecombinedList])]);
    }, [
        sortEligibleLastMinuteSalesActive,
        sortActiveActive,
        sortInactiveActive,
        // sortAllListingActive,
    ]);


    // sorting options interaction
    useEffect(() => {
        if (sortAllListingActive) {
            setSortEligibleLastMinuteSalesActive(false);
            setSortActiveActive(false);
            setSortInactiveActive(false);
            handleAllListing();
            // console.log("all active effect");
        }
    }, [sortAllListingActive]);

    //handles the search
    // useEffect(() => {
    //   const search_result = concerts.map((concert)=>(concert.ConcertName.toLowerCase().includes(search.toLowerCase()) | String(concert.ConcertID).includes(String(search))) ?{...concert, isVisible: true}:{...concert, isVisible: false});
    //   setConcerts(search_result);
    // }, [search])



    // for sorting to active listing
    const handleSortActiveListing = async (filter) => {
        const activeList = concerts.filter(
            (concert) => concert.status === "active"
        );
        const combinedList = [...new Set([...activeList ,...filter])];
        setSort(combinedList);
        // console.log(combinedList);
    };

    // for sorting to inactive listing
    const handleSortInactiveListing = async (filter) => {
        const activeList = concerts.filter(
            (concert) => concert.status === "expired"
        );
        const combinedList = [...new Set([...activeList ,...filter])];
        setSort(combinedList);
        // console.log(combinedList);
    };

    // for sorting to all listing
    const handleAllListing = async () => {
        const activeList = concerts;
        setSort([]);
        // console.log(activeList);
    };



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
            setSuccessMsg(null);
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
            setTicketClone(result);

            const restrictionset = restrictions.map((restriction) =>
                true ? { ...restriction, isChecked: false } : restriction
            );

            setRestrictions(restrictionset);

            const listingnoteset = listingNotes.map((listingnote) =>
                true ? { ...listingnote, isChecked: false } : listingnote
            );

            setListingNotes(listingnoteset);

            const restricts = await axios.get("/api/restrictions/" + id);
            arrOfObj = restricts.data;
            result = arrOfObj.map(function (el) {
                var o = Object.assign({}, el);
                o.isChecked = true;
                return o;
            });
            setTicketRestrictionEdit(result);

            const listnotes = await axios.get("/api/listing_notes/" + id);
            arrOfObj = listnotes.data;
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
    const handleTicketEditChange = async (
        id,
        input_id,
        input_type,
        val = ""
    ) => {
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
                // var ticketRestrictEdit = restrictions.map((ticketrestrict) =>
                //     ticketrestrict.Restriction_ID === input_id
                //         ? {
                //               ...ticketrestrict,
                //               isChecked: !ticketrestrict.isChecked,
                //           }
                //         : ticketrestrict
                // );
                // setRestrictions(ticketRestrictEdit);
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
                        ? { ...ticket, status: "disabled" }
                        : ticket
                );
            } else if (ticketEdit[0].status === "disabled") {
                var ticketinput = ticketEdit.map((ticket) =>
                    ticket.Listing_ID === id
                        ? { ...ticket, status: "active" }
                        : ticket
                );
            }
            setTicketEdit(ticketinput);
        }
    };
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
            (ticket.Listing_ID === id) & (ticket.status === "active")
                ? { ...ticket, status: "disabled" }
                : (ticket.Listing_ID === id) & (ticket.status === "disabled")
                ? { ...ticket, status: "active" }
                : ticket
        );
        setTickets(listTickets);

        const ticket = listTickets.filter((ticket) => ticket.Listing_ID === id);
        ticketUpdate(ticket);
    };

    // change the values of cloned tickets
    const handleTicketCloneEdit = async (val, index, input) => {
        var ticketclones = ticketClone;
        if (input === "Section") {
            ticketclones = ticketClone.map((clone, cloneindex) =>
                cloneindex === index ? { ...clone, Section: val } : clone
            );
        } else if (input === "Row") {
            ticketclones = ticketClone.map((clone, cloneindex) =>
                cloneindex === index ? { ...clone, Row: val } : clone
            );
        } else if (input === "Seats") {
            ticketclones = ticketClone.map((clone, cloneindex) =>
                cloneindex === index ? { ...clone, Seats: val } : clone
            );
        } else if (input === "Price") {
            ticketclones = ticketClone.map((clone, cloneindex) =>
                cloneindex === index ? { ...clone, Price: val } : clone
            );
        } else if (input === "Available_Tickets") {
            ticketclones = ticketClone.map((clone, cloneindex) =>
                cloneindex === index
                    ? { ...clone, Available_Tickets: val }
                    : clone
            );
        }
        setTicketClone(ticketclones);
    };

    // updates data from ticket edit modal to the database
    const ticketEditUpdate = async (
        ticketedit,
        restricts,
        ticketrestrictions,
        listingnotes,
        ticketlistingnotes
    ) => {
        setIsTicketSaving(true);
        const ticket = {
            Listing_ID: ticketedit.Listing_ID,
            ConcertID: ticketedit.ConcertID,
            Section: ticketedit.Section,
            Row: ticketedit.Row,
            Seats: ticketedit.Seats,
            Ticket_Type: ticketedit.Ticket_Type,
            Price: ticketedit.Price,
            Available_Tickets: ticketedit.Available_Tickets,
            Ticket_Sold: ticketedit.Ticket_Sold,
            Expiration: ticketedit.Expiration,
            status: ticketedit.status,
        };

        restricts = restricts.filter((restrict) => restrict.isChecked === true);
        ticketrestrictions = ticketrestrictions.filter(
            (restrict) => restrict.isChecked === true
        );
        restricts = restricts.concat(ticketrestrictions);

        listingnotes = listingnotes.filter(
            (listnote) => listnote.isChecked === true
        );
        ticketlistingnotes = ticketlistingnotes.filter(
            (listnote) => listnote.isChecked === true
        );
        listingnotes = listingnotes.concat(ticketlistingnotes);

        setTicketRestrictionEdit(restricts);
        setTicketListingNoteEdit(listingnotes);

        const request = [ticket, restricts, listingnotes];
        console.log(request);

        axios
            .post("/api/tickets/edit/update", request)
            .then((response) => {
                console.log(response);
                const ticketinfo = tickets.map((ticket) =>
                    ticket.Listing_ID === ticketedit.Listing_ID
                        ? { ...ticket, ...ticketedit }
                        : ticket
                );
                setTickets(ticketinfo);
            })
            .catch((error) => {
                console.log(error.response);
                setFetchError(error.message);
            });
        setIsTicketSaving(false);
        setSuccessMsg("Saved");
    };

    const handleTicketCloneUpdate = async () => {
        setIsTicketSaving(true);

        const request = [
            ticketClone,
            ticketRestrictionEdit,
            ticketListingNoteEdit,
        ];
        axios
            .post("/api/tickets/clone/create", request)
            .then((response) => {
                console.log(response);
                // console.log([...tickets, ...ticketClone]);
                // setTickets([...tickets, ...ticketClone]);
                fetchTicket();
            })
            .catch((error) => {
                console.log(error.response);
                setFetchError(error.message);
            });

        setIsTicketSaving(false);
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

    const handleTicketDeleteSelected = async () => {
        const selectedTickets = tickets.filter(
            (ticket) => ticket.isSelected === true
        );
        axios
            .post("/api/tickets/destroyselect", selectedTickets)
            .then((response) => {
                console.log(response);
                setTickets(
                    tickets.filter((ticket) => ticket.isSelected !== true)
                );
            })
            .catch((error) => {
                console.log(error.response);
                setFetchError(error.message);
            });
    };

    const handleTicketPublishSelected = async () => {
        const selectedTickets = tickets.filter(
            (ticket) => ticket.isSelected === true
        );
        axios
            .post("/api/tickets/publishselect", selectedTickets)
            .then((response) => {
                console.log(response);
                setTickets(
                    tickets.map((ticket) =>
                        ticket.isSelected === true
                            ? { ...ticket, status: "active" }
                            : ticket
                    )
                );
            })
            .catch((error) => {
                console.log(error.response);
                setFetchError(error.message);
            });
    };

    const handleTicketUnpublishSelected = async () => {
        const selectedTickets = tickets.filter(
            (ticket) => ticket.isSelected === true
        );
        axios
            .post("/api/tickets/unpublishselect", selectedTickets)
            .then((response) => {
                console.log(response);
                setTickets(
                    tickets.map((ticket) =>
                        ticket.isSelected === true
                            ? { ...ticket, status: "disabled" }
                            : ticket
                    )
                );
            })
            .catch((error) => {
                console.log(error.response);
                setFetchError(error.message);
            });
    };

    const handleTicketToPaperSelected = async () => {
        const selectedTickets = tickets.filter(
            (ticket) => ticket.isSelected === true
        );
        axios
            .post("/api/tickets/topaperselect", selectedTickets)
            .then((response) => {
                console.log(response);
                setTickets(
                    tickets.map((ticket) =>
                        ticket.isSelected === true
                            ? { ...ticket, Ticket_Type: "Paper Ticket" }
                            : ticket
                    )
                );
            })
            .catch((error) => {
                console.log(error.response);
                setFetchError(error.message);
            });
    };

    const handleTicketToESelected = async () => {
        const selectedTickets = tickets.filter(
            (ticket) => ticket.isSelected === true
        );
        axios
            .post("/api/tickets/toeselect", selectedTickets)
            .then((response) => {
                console.log(response);
                setTickets(
                    tickets.map((ticket) =>
                        ticket.isSelected === true
                            ? { ...ticket, Ticket_Type: "E-Ticket" }
                            : ticket
                    )
                );
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
                {isConcertsLoading &
                isTicketsLoading &
                isRestrictionsLoading ? (
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
                ) : null}
                {fetchError ? (
                    <table className="table">
                        <thead className="w-50 justify-content-center">
                            <tr>
                                <td className="justify-content-center">
                                    <div
                                        className="alert alert-danger d-flex align-items-center"
                                        role="alert"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="currentColor"
                                            className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
                                            viewBox="0 0 16 16"
                                            role="img"
                                            aria-label="Warning:"
                                        >
                                            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                        </svg>
                                        <div>{`Error: ${fetchError}`} <a href="" onClick={() => window.location.reload(false)}>Click to reload!</a></div>
                                    </div>
                                </td>
                            </tr>
                        </thead>
                    </table>
                ) : null}

                {!fetchError &
                !isConcertsLoading &
                !isTicketsLoading &
                !isRestrictionsLoading ? (
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
                            search={search}
                            setSearch={setSearch}
                        />
                        <div className="container-fluid overflow-auto table-heights position-absolute top-50 start-50 translate-middle mt-1">
                            <table className="table" id="myTable">
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
                                            {concerts.map((concert) => concert.isVisible && (
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
                                                    handleTicketPublishChange={
                                                        handleTicketPublishChange
                                                    }
                                                />
                                            ))}
                                        </>
                                    ) : null}
                                </tbody>
                            </table>
                        </div>
                        <Tools
                            visible={visible}
                            handleTicketDeleteSelected={
                                handleTicketDeleteSelected
                            }
                            handleTicketPublishSelected={handleTicketPublishSelected}
                            handleTicketUnpublishSelected={handleTicketUnpublishSelected}
                            handleTicketToPaperSelected={handleTicketToPaperSelected}
                            handleTicketToESelected={handleTicketToESelected}
                        />
                    </>
                ) : null}

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
                        isTicketEditModalVisible={isTicketEditModalVisible}
                        ticketEditUpdate={ticketEditUpdate}
                        isTicketSaving={isTicketSaving}
                        successMsg={successMsg}
                        setTicketClone={setTicketClone}
                    />
                ) : null}
                <ListingNew concerts={concerts} />
                <ListingTicketClone
                    ticketClone={ticketClone}
                    setTicketClone={setTicketClone}
                    isTicketEditLoading={isTicketEditLoading}
                    isTicketSaving={isTicketSaving}
                    handleTicketCloneEdit={handleTicketCloneEdit}
                    handleTicketCloneUpdate={handleTicketCloneUpdate}
                />
                <ListingTicketTypes />
                <ListingDeletePrompt
                    handleTicketDelete={handleTicketDelete}
                    ticketEdit={ticketEdit}
                />
                <ListingNewListing />
            </React.StrictMode>
        </>
    );
};

export default ListingTable;

if (document.getElementById("ListingTable")) {
    ReactDOM.render(<ListingTable />, document.getElementById("ListingTable"));
}
