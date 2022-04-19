import axios from "axios";
import React, { useState, useEffect } from "react";
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
import ListingNewTicket from "./ListingNewTicket";
import { sortedLastIndex, toInteger } from "lodash";

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
            tickets_available: "",
            event_id: "",
            listing_id: "",
            price: "",
            row: "",
            seats_from: "",
            section: "",
            tickets_sold: "",
            ticket_type_id: "",
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
    const [isTicketSaving, setIsTicketSaving] = useState(false);
    const [successMsg, setSuccessMsg] = useState(null);
    const [ticketClone, setTicketClone] = useState([]);
    const [createConcert, setCreateConcert] = useState({
        event_name: "",
        event_venue: "",
    });
    const [ticketTypes, setTicketTypes] = useState([]);
    const [ticketTypeSelected, setTicketTypeSelected] = useState("");
    const [search, setSearch] = useState("");
    const [newTicket, setNewTicket] = useState([]);
    const [selectedTicketType, setSelectedTicketType] = useState("");
    const [isTicketNewLoading, setIsTicketNewLoading] = useState(true);
    // var ticketTypeSelected = "";

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

            // p.s. to myself: add a condition for active/inactive concert in the future
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
            const ticket_types = await axios.get("/api/ticket_types");
            setTicketTypes(ticket_types.data);
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
        //     (concert) => concert.status === "inactive"
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
    }, [tickets]);

    // for logging only in the console. testing purpose only
    useEffect(() => {
        console.log(sort);
    }, [sort]);

    // sorting options interaction
    useEffect(() => {
        var filter = [];
        var activecombinedList = [];
        var inactivecombinedList = [];
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
        if (!sortActiveActive) {
            filter = sort.filter((remove) => remove.event_status != "active");
        }
        if (!sortInactiveActive) {
            filter = sort.filter((remove) => remove.event_status != "inactive");
        }

        if (sortActiveActive) {
            const activeList = concerts.filter(
                (concert) => concert.event_status === "active"
            );
            activecombinedList = [...new Set([...activeList, ...filter])];
        }
        if (sortInactiveActive) {
            const inactiveList = concerts.filter(
                (concert) => concert.event_status === "inactive"
            );
            inactivecombinedList = [...new Set([...inactiveList, ...filter])];
        }

        setSort([...new Set([...activecombinedList, ...inactivecombinedList])]);
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
        }
    }, [sortAllListingActive]);

    // handles the search
    useEffect(() => {
        const search_result = concerts.map((concert) =>
            concert.event_name.toLowerCase().includes(search.toLowerCase()) |
            String(concert.event_id).includes(String(search))
                ? { ...concert, isVisible: true }
                : { ...concert, isVisible: false }
        );
        setConcerts(search_result);
    }, [search]);

    // for sorting to all listing
    const handleAllListing = async () => {
        const activeList = concerts;
        setSort([]);
        // console.log(activeList);
    };

    // updating the which tickets are selected
    const handleCheck = async (id) => {
        const listTickets = tickets.map((ticket) =>
            ticket.listing_id === id
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
            var editList = tickets.filter((ticket) => ticket.listing_id === id);
            // editList = [{...editList, concert}];

            var arrOfObj = editList;

            var result = arrOfObj.map(function (el) {
                var o = Object.assign({}, el);
                o.event_id = concert.event_id;
                o.event_name = concert.event_name;
                o.event_date = concert.event_date;
                o.event_time = concert.event_time;
                o.event_venue = concert.event_venue;
                // o.Total_Available = concert.Total_Available;
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

    // handles data to pass/update during creation of ticket
    const handleTicketNew = async (concert) => {
        try {
            setIsTicketNewLoading(true);
            setSuccessMsg(null);

            var arrOfObj = {
                tickets_available: 0,
                ticket_separation: "Any",
                tickets_sold: 0,
                // ticket_type_id
                section: "",
                row: "",
                seats_from: "",
                seats_to: "",
                price: "",
                currency: "AUD",
                is_published: 0,
                event_id: concert.event_id,
                event_name: concert.event_name,
                event_date: concert.event_date,
                event_time: concert.event_time,
                event_venue: concert.event_venue,
            };

            setNewTicket(arrOfObj);

            const restrictionset = restrictions.map((restriction) =>
                true ? { ...restriction, isChecked: false } : restriction
            );

            setRestrictions(restrictionset);

            const listingnoteset = listingNotes.map((listingnote) =>
                true ? { ...listingnote, isChecked: false } : listingnote
            );

            setListingNotes(listingnoteset);
        } catch (error) {
            setFetchError(error.message);
        } finally {
            setIsTicketNewLoading(false);
        }
    };

    // updating the ticket input values
    // this function may not be the best, but its the best i could think of.
    const handleTicketNewChange = async (
        // id,
        // input_id,
        input_type,
        val = ""
    ) => {
        if (input_type === "restriction") {
            var ticketRestrictEdit = restrictions.map((ticketrestrict) =>
                ticketrestrict.restriction_id === val
                    ? {
                          ...ticketrestrict,
                          isChecked: !ticketrestrict.isChecked,
                      }
                    : ticketrestrict
            );
            setRestrictions(ticketRestrictEdit);
        } else if (input_type === "listing_note") {
            var ticketListNoteEdit = listingNotes.map((ticketlistnote) =>
                ticketlistnote.listing_note_id === val
                    ? {
                          ...ticketlistnote,
                          isChecked: !ticketlistnote.isChecked,
                      }
                    : ticketlistnote
            );
            setListingNotes(ticketListNoteEdit);
        } else if (input_type === "available_tickets") {
            var ticketinput = { ...newTicket, tickets_available: val };
            setNewTicket(ticketinput);
        } else if (input_type === "ticket_separation") {
            var ticketinput = { ...newTicket, ticket_separation: val };
            setNewTicket(ticketinput);
        } else if (input_type === "tickets_sold") {
            var ticketinput = { ...newTicket, tickets_sold: val };
            setNewTicket(ticketinput);
        } else if (input_type === "section") {
            var ticketinput = { ...newTicket, section: val };
            setNewTicket(ticketinput);
        } else if (input_type === "row") {
            var ticketinput = { ...newTicket, row: val };
            setNewTicket(ticketinput);
        } else if (input_type === "seats_from") {
            var ticketinput = { ...newTicket, seats_from: val };
            setNewTicket(ticketinput);
        } else if (input_type === "seats_to") {
            var ticketinput = { ...newTicket, seats_to: val };
            setNewTicket(ticketinput);
        } else if (input_type === "price") {
            var ticketinput = { ...newTicket, price: val };
            setNewTicket(ticketinput);
        } else if (input_type === "publish") {
            if (newTicket.is_published === 1) {
                var ticketinput = { ...newTicket, is_published: 0 };
            } else if (newTicket.is_published === 0) {
                var ticketinput = { ...newTicket, is_published: 1 };
            }
            setNewTicket(ticketinput);
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
                    (ticketrestriction.restriction_id === input_id) &
                    (ticketrestriction.listing_id === id)
            );
            if (len.length > 0) {
                var ticketRestrictEdit = ticketRestrictionEdit.map(
                    (ticketrestrict) =>
                        ticketrestrict.restriction_id === input_id
                            ? {
                                  ...ticketrestrict,
                                  isChecked: !ticketrestrict.isChecked,
                              }
                            : ticketrestrict
                );
                setTicketRestrictionEdit(ticketRestrictEdit);
                // var ticketRestrictEdit = restrictions.map((ticketrestrict) =>
                //     ticketrestrict.restriction_id === input_id
                //         ? {
                //               ...ticketrestrict,
                //               isChecked: !ticketrestrict.isChecked,
                //           }
                //         : ticketrestrict
                // );
                // setRestrictions(ticketRestrictEdit);
            } else if (len.length === 0) {
                var ticketRestrictEdit = restrictions.map((ticketrestrict) =>
                    ticketrestrict.restriction_id === input_id
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
                    (ticketlistingnote.listing_note_id === input_id) &
                    (ticketlistingnote.listing_id === id)
            );
            if (len.length > 0) {
                var ticketListNoteEdit = ticketListingNoteEdit.map(
                    (ticketlistnote) =>
                        ticketlistnote.listing_note_id === input_id
                            ? {
                                  ...ticketlistnote,
                                  isChecked: !ticketlistnote.isChecked,
                              }
                            : ticketlistnote
                );
                setTicketListingNoteEdit(ticketListNoteEdit);
            } else if (len.length === 0) {
                var ticketListNoteEdit = listingNotes.map((ticketlistnote) =>
                    ticketlistnote.listing_note_id === input_id
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
                ticket.listing_id === id
                    ? { ...ticket, tickets_available: val }
                    : ticket
            );
            setTicketEdit(ticketinput);
        } else if (input_type === "ticket_separation") {
            var ticketinput = ticketEdit.map((ticket) =>
                ticket.listing_id === id
                    ? { ...ticket, ticket_separation: val }
                    : ticket
            );
            setTicketEdit(ticketinput);
        } else if (input_type === "tickets_sold") {
            var ticketinput = ticketEdit.map((ticket) =>
                ticket.listing_id === id
                    ? { ...ticket, tickets_sold: val }
                    : ticket
            );
            setTicketEdit(ticketinput);
        } else if (input_type === "section") {
            var ticketinput = ticketEdit.map((ticket) =>
                ticket.listing_id === id ? { ...ticket, section: val } : ticket
            );
            setTicketEdit(ticketinput);
        } else if (input_type === "row") {
            var ticketinput = ticketEdit.map((ticket) =>
                ticket.listing_id === id ? { ...ticket, row: val } : ticket
            );
            setTicketEdit(ticketinput);
        } else if (input_type === "seats_from") {
            var ticketinput = ticketEdit.map((ticket) =>
                ticket.listing_id === id
                    ? { ...ticket, seats_from: val }
                    : ticket
            );
            setTicketEdit(ticketinput);
        } else if (input_type === "seats_to") {
            var ticketinput = ticketEdit.map((ticket) =>
                ticket.listing_id === id ? { ...ticket, seats_to: val } : ticket
            );
            setTicketEdit(ticketinput);
        } else if (input_type === "price") {
            var ticketinput = ticketEdit.map((ticket) =>
                ticket.listing_id === id ? { ...ticket, price: val } : ticket
            );
            setTicketEdit(ticketinput);
        } else if (input_type === "publish") {
            if (ticketEdit[0].is_published === 1) {
                var ticketinput = ticketEdit.map((ticket) =>
                    ticket.listing_id === id
                        ? { ...ticket, is_published: 0 }
                        : ticket
                );
            } else if (ticketEdit[0].is_published === 0) {
                var ticketinput = ticketEdit.map((ticket) =>
                    ticket.listing_id === id
                        ? { ...ticket, is_published: 1 }
                        : ticket
                );
            }
            setTicketEdit(ticketinput);
        }
    };

    // setting interaction for price input when focused
    const handlePriceSelect = async (id) => {
        const listTickets = tickets.map((ticket) =>
            ticket.listing_id === id
                ? { ...ticket, isPriceSelected: !ticket.isPriceSelected }
                : ticket
        );
        setTickets(listTickets);

        const ticket = tickets.filter((ticket) => ticket.listing_id === id);

        if (ticket[0].isPriceSelected === true) {
            ticketUpdate(ticket);
        }
    };

    // updating the price input value
    const handlePriceChange = async (id, val) => {
        const listTickets = tickets.map((ticket) =>
            ticket.listing_id === id ? { ...ticket, price: val } : ticket
        );

        setTickets(listTickets);
    };

    // setting interaction for available ticket input when focused
    const handleAvailableTicketSelect = async (id) => {
        const listTickets = tickets.map((ticket) =>
            ticket.listing_id === id
                ? {
                      ...ticket,
                      isAvailableTicketSelected:
                          !ticket.isAvailableTicketSelected,
                  }
                : ticket
        );
        setTickets(listTickets);

        const ticket = tickets.filter((ticket) => ticket.listing_id === id);

        if (ticket[0].isAvailableTicketSelected !== false) {
            ticketUpdate(ticket);
        }
    };

    // updating the available ticket input value
    const handleAvailableTicketChange = async (id, val) => {
        const listTickets = tickets.map((ticket) =>
            ticket.listing_id === id
                ? { ...ticket, tickets_available: val }
                : ticket
        );
        setTickets(listTickets);
    };

    // set publish status of ticket
    const handleTicketPublishChange = async (id) => {
        const listTickets = tickets.map((ticket) =>
            (ticket.listing_id === id) & (ticket.is_published === 1)
                ? { ...ticket, is_published: 0 }
                : (ticket.listing_id === id) & (ticket.is_published === 0)
                ? { ...ticket, is_published: 1 }
                : ticket
        );
        setTickets(listTickets);

        const ticket = listTickets.filter((ticket) => ticket.listing_id === id);
        ticketUpdate(ticket);
    };

    // change the values of cloned tickets
    const handleTicketCloneEdit = async (val, index, input) => {
        var ticketclones = ticketClone;
        if (input === "section") {
            ticketclones = ticketClone.map((clone, cloneindex) =>
                cloneindex === index ? { ...clone, section: val } : clone
            );
        } else if (input === "row") {
            ticketclones = ticketClone.map((clone, cloneindex) =>
                cloneindex === index ? { ...clone, row: val } : clone
            );
        } else if (input === "seats_from") {
            ticketclones = ticketClone.map((clone, cloneindex) =>
                cloneindex === index ? { ...clone, seats_from: val } : clone
            );
        } else if (input === "seats_to") {
            ticketclones = ticketClone.map((clone, cloneindex) =>
                cloneindex === index ? { ...clone, seats_to: val } : clone
            );
        } else if (input === "price") {
            ticketclones = ticketClone.map((clone, cloneindex) =>
                cloneindex === index ? { ...clone, price: val } : clone
            );
        } else if (input === "proceeds") {
            ticketclones = ticketClone.map((clone, cloneindex) =>
                cloneindex === index ? { ...clone, proceeds: val } : clone
            );
        } else if (input === "tickets_available") {
            ticketclones = ticketClone.map((clone, cloneindex) =>
                cloneindex === index
                    ? { ...clone, tickets_available: val }
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
            listing_id: ticketedit.listing_id,
            ticket_type_id: ticketedit.ticket_type_id,
            ticket_separation: ticketedit.ticket_separation,
            tickets_available: ticketedit.tickets_available,
            section: ticketedit.section,
            row: ticketedit.row,
            seats_from: ticketedit.seats_from,
            seats_to: ticketedit.seats_to,
            price: ticketedit.price,
            currency: ticketedit.currency,
            status: ticketedit.status,
            is_published: ticketedit.is_published,
            event_id: ticketedit.event_id,
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
                    ticket.listing_id === ticketedit.listing_id
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
            listing_id: ticket[0].listing_id,
            ticket_type_id: ticket[0].ticket_type_id,
            ticket_separation: ticket[0].ticket_separation,
            tickets_available: ticket[0].tickets_available,
            section: ticket[0].section,
            row: ticket[0].row,
            seats_from: ticket[0].seats_from,
            seats_to: ticket[0].seats_to,
            price: ticket[0].price,
            currency: ticket[0].currency,
            status: ticket[0].status,
            is_published: ticket[0].is_published,
            event_id: ticket[0].event_id,
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
            listing_id: ticket.listing_id,
            event_id: ticket.event_id,
            section: ticket.section,
            row: ticket.row,
            seats_from: ticket.seats_from,
            seats_to: ticket.seats_to,
            ticket_type_id: ticket.ticket_type_id,
            price: ticket.price,
            tickets_available: ticket.tickets_available,
            is_published: ticket.is_published,
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
            (ticket) => ticket.listing_id !== ticket_info.listing_id
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
                            ? { ...ticket, is_published: 1 }
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
                            ? { ...ticket, is_published: 0 }
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
                            ? { ...ticket, ticket_type_id: 1 }
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
                            ? { ...ticket, ticket_type_id: 2 }
                            : ticket
                    )
                );
            })
            .catch((error) => {
                console.log(error.response);
                setFetchError(error.message);
            });
    };

    // get the ramaining day
    const getRemainingDays = (targetdate) => {
        var date1 = new Date();
        var date2 = new Date(targetdate);
        var Difference_In_Time = date2.getTime() - date1.getTime();
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

        return toInteger(Difference_In_Days);
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
                                        <div>
                                            {`Error: ${fetchError}`}{" "}
                                            <a
                                                href=""
                                                onClick={() =>
                                                    window.location.reload(
                                                        false
                                                    )
                                                }
                                            >
                                                Click to reload!
                                            </a>
                                        </div>
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
                                            {sort.length
                                                ? sort.map(
                                                      (concert) =>
                                                          concert.isVisible && (
                                                              <ListingConcerts
                                                                  key={
                                                                      concert.event_id
                                                                  }
                                                                  concert={
                                                                      concert
                                                                  }
                                                                  tickets={
                                                                      tickets
                                                                  }
                                                                  setTickets={
                                                                      setTickets
                                                                  }
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
                                                                  handleTicketPublishChange={
                                                                      handleTicketPublishChange
                                                                  }
                                                                  getRemainingDays={
                                                                      getRemainingDays
                                                                  }
                                                                  ticketTypes={
                                                                      ticketTypes
                                                                  }
                                                              />
                                                          )
                                                  )
                                                : concerts.map(
                                                      (concert) =>
                                                          concert.isVisible && (
                                                              <ListingConcerts
                                                                  key={
                                                                      concert.event_id
                                                                  }
                                                                  concert={
                                                                      concert
                                                                  }
                                                                  tickets={
                                                                      tickets
                                                                  }
                                                                  setTickets={
                                                                      setTickets
                                                                  }
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
                                                                  handleTicketPublishChange={
                                                                      handleTicketPublishChange
                                                                  }
                                                                  getRemainingDays={
                                                                      getRemainingDays
                                                                  }
                                                                  ticketTypes={
                                                                      ticketTypes
                                                                  }
                                                              />
                                                          )
                                                  )}
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
                            handleTicketPublishSelected={
                                handleTicketPublishSelected
                            }
                            handleTicketUnpublishSelected={
                                handleTicketUnpublishSelected
                            }
                            handleTicketToPaperSelected={
                                handleTicketToPaperSelected
                            }
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
                        ticketEditUpdate={ticketEditUpdate}
                        isTicketSaving={isTicketSaving}
                        successMsg={successMsg}
                        setTicketClone={setTicketClone}
                        ticketTypes={ticketTypes}
                    />
                ) : null}
                <ListingNew
                    concerts={concerts}
                    handleTicketNew={handleTicketNew}
                />
                <ListingTicketClone
                    ticketClone={ticketClone}
                    setTicketClone={setTicketClone}
                    isTicketEditLoading={isTicketEditLoading}
                    isTicketSaving={isTicketSaving}
                    handleTicketCloneEdit={handleTicketCloneEdit}
                    handleTicketCloneUpdate={handleTicketCloneUpdate}
                />
                <ListingTicketTypes
                    ticketTypes={ticketTypes}
                    ticketTypeSelected={ticketTypeSelected}
                    setTicketTypeSelected={setTicketTypeSelected}
                />
                <ListingDeletePrompt
                    handleTicketDelete={handleTicketDelete}
                    ticketEdit={ticketEdit}
                />
                <ListingNewListing />

                <ListingNewTicket
                    isTicketNewLoading={isTicketNewLoading}
                    newTicket={newTicket}
                    setNewTicket={setNewTicket}
                    restrictions={restrictions}
                    listingNotes={listingNotes}
                    ticketTypes={ticketTypes}
                    handleTicketNewChange={handleTicketNewChange}
                    ticketTypeSelected={ticketTypeSelected}
                />
            </React.StrictMode>
        </>
    );
};

export default ListingTable;

if (document.getElementById("ListingTable")) {
    ReactDOM.render(<ListingTable />, document.getElementById("ListingTable"));
}
