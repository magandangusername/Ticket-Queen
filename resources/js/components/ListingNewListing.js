import { create, set } from "lodash";
import React from "react";

const ListingNewListing = ({
    createConcert,
    setCreateConcert,
    eventNewUpdate,
}) => {
    return (
        <div className="modal container-fluid" id="ReqEventModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div
                        className="modal-header "
                        style={{ background: "#424549", color: "#edf6ff" }}
                    >
                        <div className="justify-content-between-center">
                            <h4 className="m-1 p-2">Request an event </h4>

                            <p className="m-1 p-2">
                                Can't find the event you're looking for? Enter
                                the details below and you can start listing
                                immediately. Once our support team approves the
                                event, your tickets will become active on our
                                website.
                            </p>
                        </div>
                    </div>

                    <div className="modal-body form-group m-auto p-4">
                        <form>
                            <div className="row mb-2">
                                <label htmlFor="exampleFormControlInput1">
                                    Artist, Home Team, Tournament, Festival or
                                    Show*
                                </label>
                                <input
                                    type="show"
                                    className=""
                                    id="exampleFormControlInput1"
                                    placeholder="Search"
                                    readOnly
                                />
                            </div>
                            <div className="row mb-2">
                                <label htmlFor="exampleFormControlSelect1">
                                    Event*
                                </label>
                                <input
                                    type="text"
                                    className=""
                                    id="exampleFormControlInput1"
                                    value={createConcert.event_name}
                                    onChange={(e) =>
                                        setCreateConcert({
                                            ...createConcert,
                                            event_name: e.target.value,
                                        })
                                    }
                                    required
                                />
                            </div>
                            <div className="row mb-2">
                                <label htmlFor="date">Event Date/Time*</label>
                                <input
                                    type="date"
                                    className="col me-1"
                                    id="date"
                                    name="date"
                                    value={createConcert.event_date}
                                    onChange={(e) =>
                                        setCreateConcert({
                                            ...createConcert,
                                            event_date: e.target.value,
                                        })
                                    }
                                    required
                                />
                                <input
                                    type="time"
                                    name="time"
                                    id="time"
                                    className="col ms-1"
                                    value={createConcert.event_time}
                                    onChange={(e) =>
                                        setCreateConcert({
                                            ...createConcert,
                                            event_time: e.target.value,
                                        })
                                    }
                                    required
                                />
                            </div>
                            <div className="row mb-2">
                                <label htmlFor="exampleFormControlInput1">
                                    Venue*
                                </label>
                                <input
                                    type="text"
                                    className=""
                                    placeholder="Search"
                                    value={createConcert.event_venue}
                                    onChange={(e) =>
                                        setCreateConcert({
                                            ...createConcert,
                                            event_venue: e.target.value,
                                        })
                                    }
                                    required
                                />
                            </div>
                            <div className="row mb-2">
                                <label htmlFor="exampleFormControlInput1">
                                    City*
                                </label>
                                <input
                                    type="text"
                                    className=" "
                                    value={createConcert.event_city}
                                    onChange={(e) =>
                                        setCreateConcert({
                                            ...createConcert,
                                            event_city: e.target.value,
                                        })
                                    }
                                    required
                                />
                            </div>
                            <div className="row mb-2">
                                <label htmlFor="exampleFormControlSelect1">
                                    Country*
                                </label>
                                <select
                                    className=""
                                    id="exampleFormControlSelect1"
                                    value={createConcert.event_country}
                                    onChange={(e) =>
                                        setCreateConcert({
                                            ...createConcert,
                                            event_country: e.target.value,
                                        })
                                    }
                                    required
                                >
                                    <option value="Albania" defaultValue>
                                        Albania
                                    </option>
                                    <option value="Algeria">Algeria</option>
                                    <option value="American Samoa">
                                        American Samoa
                                    </option>
                                    <option value="Andorra">Andorra</option>
                                    <option value="Angola">Angola</option>
                                </select>
                            </div>
                            <div className="row mb-2">
                                <label htmlFor="exampleFormControlInput1">
                                    Onsale
                                </label>
                                <input
                                    type="datetime-local"
                                    className="col me-1"
                                    id="date"
                                    name="date"
                                    value={createConcert.event_onsale_date_time}
                                    onChange={(e) =>
                                        setCreateConcert({
                                            ...createConcert,
                                            event_onsale_date_time:
                                                e.target.value,
                                        })
                                    }
                                    required
                                />

                                {/* <input type="time" name="time" id="time"
                                value={createConcert.event_time}
                                onChange={(e)=>setCreateConcert({...createConcert, event_onsale_time: e.target.value})}
                                /> */}
                            </div>
                            <div className="row mb-2">
                                <label htmlFor="exampleFormControlInput1">
                                    Face Value
                                </label>
                                <select
                                    className="col me-1"
                                    id="exampleFormControlSelect1"
                                    value={
                                        createConcert.event_face_value_currency
                                    }
                                    onChange={(e) =>
                                        setCreateConcert({
                                            ...createConcert,
                                            event_face_value_currency:
                                                e.target.value,
                                        })
                                    }
                                    required
                                >
                                    <option value="Euro" defaultValue>
                                        Euro
                                    </option>
                                    <option value="Hong Kong Dollar">
                                        Hong Kong Dollar
                                    </option>
                                    <option value="Croatian Kuna">
                                        Croatian Kuna
                                    </option>
                                    <option value="Japanese Yen">
                                        Japanese Yen
                                    </option>
                                    <option value="South Korean Won">
                                        South Korean Won
                                    </option>
                                </select>
                                <input
                                    type="number"
                                    className="col mx-1"
                                    id="exampleFormControlInput1"
                                    placeholder="Face Value Min"
                                    value={
                                        createConcert.event_face_value_min === "NaN"
                                            ? 0
                                            : Number(
                                                createConcert.event_face_value_min
                                              ).toString()
                                    }
                                    onChange={(e) =>
                                        e.target.value === ""
                                            ? setCreateConcert({
                                                  ...createConcert,
                                                  event_face_value_min: 0,
                                              })
                                            : setCreateConcert({
                                                  ...createConcert,
                                                  event_face_value_min: parseFloat(
                                                      e.target.value
                                                  ).toFixed(2),
                                              })
                                    }
                                    required
                                />
                                <input
                                    type="number"
                                    className="col ms-1"
                                    id="exampleFormControlInput1"
                                    placeholder="Face Value Max"
                                    value={
                                        createConcert.event_face_value_max === "NaN"
                                            ? 0
                                            : Number(
                                                createConcert.event_face_value_max
                                              ).toString()
                                    }
                                    onChange={(e) =>
                                        e.target.value === ""
                                            ? setCreateConcert({
                                                  ...createConcert,
                                                  event_face_value_max: 0,
                                              })
                                            : setCreateConcert({
                                                  ...createConcert,
                                                  event_face_value_max: parseFloat(
                                                      e.target.value
                                                  ).toFixed(2),
                                              })
                                    }
                                    required
                                />
                            </div>
                            <div className="row mb-2">
                                <label htmlFor="exampleFormControlInput1">
                                    Event Url and Notes*
                                </label>
                                <input
                                    type="text"
                                    className=""
                                    id="exampleFormControlInput1"
                                    value={createConcert.event_url_notes}
                                    onChange={(e) =>
                                        setCreateConcert({
                                            ...createConcert,
                                            event_url_notes: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer m-1 p-2">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-toggle="modal"
                            data-bs-target="#ListingModal"
                        >
                            <b>Back</b>
                        </button>
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => eventNewUpdate()}
                            data-bs-dismiss="modal"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingNewListing;
