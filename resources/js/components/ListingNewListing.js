import React from "react";
import dateFormat from "dateformat";

const ListingNewListing = ({
    createConcert,
    setCreateConcert,
    eventNewUpdate,
    inputError
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
                                    type="text"
                                    className=""
                                    id="exampleFormControlInput1"
                                    placeholder="Search"
                                    disabled
                                />
                            </div>
                            <div className="row mb-2">
                                <label htmlFor="exampleFormControlSelect1">
                                    Event*
                                </label>
                                <input
                                    type="text"
                                    className={
                                        inputError.some(
                                            (e) =>
                                                e.input ===
                                                "event_name"
                                        )
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
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
                                <p
                                    className="invalid-feedback"
                                >
                                    {inputError.map(e=>e.input==="event_name" ? e.msg : null)}
                                </p>
                            </div>
                            <div className="row mb-2">
                                <label htmlFor="date">Event Date/Time*</label>
                                <input
                                    type="date"
                                    className={
                                        inputError.some(
                                            (e) =>
                                                e.input ===
                                                "event_date"
                                        )
                                            ? "form-control col me-1 is-invalid"
                                            : "form-control col me-1"
                                    }
                                    id="date"
                                    name="date"
                                    value={createConcert.event_date}
                                    onChange={(e) =>
                                        setCreateConcert({
                                            ...createConcert,
                                            event_date: e.target.value,
                                        })
                                    }
                                    min={dateFormat(
                                        new Date(),
                                        "yyyy-mm-dd"
                                    )}
                                    required
                                />
                                <p
                                    className="invalid-feedback"
                                >
                                    {inputError.map(e=>e.input==="event_date" ? e.msg : null)}
                                </p>
                                <input
                                    type="time"
                                    name="time"
                                    id="time"
                                    className={
                                        inputError.some(
                                            (e) =>
                                                e.input ===
                                                "event_time"
                                        )
                                            ? "form-control col ms-1 is-invalid"
                                            : "form-control col ms-1"
                                    }
                                    value={createConcert.event_time}
                                    onChange={(e) =>
                                        setCreateConcert({
                                            ...createConcert,
                                            event_time: e.target.value,
                                        })
                                    }
                                    required
                                />
                                <p
                                    className="invalid-feedback"
                                >
                                    {inputError.map(e=>e.input==="event_time" ? e.msg : null)}
                                </p>
                            </div>
                            <div className="row mb-2">
                                <label htmlFor="exampleFormControlInput1">
                                    Venue*
                                </label>
                                <input
                                    type="text"
                                    className={
                                        inputError.some(
                                            (e) =>
                                                e.input ===
                                                "event_venue"
                                        )
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
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
                                <p
                                    className="invalid-feedback"
                                >
                                    {inputError.map(e=>e.input==="event_venue" ? e.msg : null)}
                                </p>
                            </div>
                            <div className="row mb-2">
                                <label htmlFor="exampleFormControlInput1">
                                    City*
                                </label>
                                <input
                                    type="text"
                                    className={
                                        inputError.some(
                                            (e) =>
                                                e.input ===
                                                "event_city"
                                        )
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                    value={createConcert.event_city}
                                    onChange={(e) =>
                                        setCreateConcert({
                                            ...createConcert,
                                            event_city: e.target.value,
                                        })
                                    }
                                    required
                                />
                                <p
                                    className="invalid-feedback"
                                >
                                    {inputError.map(e=>e.input==="event_city" ? e.msg : null)}
                                </p>
                            </div>
                            <div className="row mb-2">
                                <label htmlFor="exampleFormControlSelect1">
                                    Country*
                                </label>
                                <select
                                    className={
                                        inputError.some(
                                            (e) =>
                                                e.input ===
                                                "event_country"
                                        )
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
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
                                <p
                                    className="invalid-feedback"
                                >
                                    {inputError.map(e=>e.input==="event_country" ? e.msg : null)}
                                </p>
                            </div>
                            <div className="row mb-2">
                                <label htmlFor="exampleFormControlInput1">
                                    Onsale
                                </label>
                                <input
                                    type="datetime-local"
                                    className={
                                        inputError.some(
                                            (e) =>
                                                e.input ===
                                                "event_onsale_date_time"
                                        )
                                            ? "form-control col me-1 is-invalid"
                                            : "form-control col me-1"
                                    }
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
                                    min={dateFormat(
                                        new Date(),
                                        'yyyy-mm-dd"T"hh:mm'
                                    )}
                                    required
                                />
                                <p
                                    className="invalid-feedback"
                                >
                                    {inputError.map(e=>e.input==="event_event_onsale_date_timecountry" ? e.msg : null)}
                                </p>
                            </div>
                            <div className="row mb-2">
                                <label htmlFor="exampleFormControlInput1">
                                    Face Value
                                </label>
                                <select
                                    className={
                                        inputError.some(
                                            (e) =>
                                                e.input ===
                                                "event_face_value_currency"
                                        )
                                            ? "form-control col me-1 is-invalid"
                                            : "form-control col me-1"
                                    }
                                    id="FaceValueCurrencyCode"
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
                                    placeholder="Currency"
                                    required
                                >
                                    <option value="AED">
                                        United Arab Emirates Dirham
                                    </option>
                                    <option value="ARS">Argentine Peso</option>
                                    <option value="AUD">
                                        Australian Dollar
                                    </option>
                                    <option value="BRL">Brazilian Real</option>
                                    <option value="CAD">Canadian Dollar</option>
                                    <option value="CHF">Swiss Franc</option>
                                    <option value="CLP">Chilean Peso</option>
                                    <option value="COP">Colombian Peso</option>
                                    <option value="CZK">
                                        Czech Republic Koruna
                                    </option>
                                    <option value="DKK">Danish Krone</option>
                                    <option value="EUR">Euro</option>
                                    <option value="GBP">
                                        British Pound Sterling
                                    </option>
                                    <option value="HKD">
                                        Hong Kong Dollar
                                    </option>
                                    <option value="HRK">Croatian Kuna</option>
                                    <option value="HUF">
                                        Hungarian Forint
                                    </option>
                                    <option value="IDR">
                                        Indonesian Rupiah
                                    </option>
                                    <option value="ILS">
                                        Israeli New Shekel
                                    </option>
                                    <option value="ISK">Icelandic Kr??na</option>
                                    <option value="JPY">Japanese Yen</option>
                                    <option value="KRW">
                                        South Korean Won
                                    </option>
                                    <option value="MUR">Mauritian Rupee</option>
                                    <option value="MXN">Mexican Peso</option>
                                    <option value="MYR">
                                        Malaysian Ringgit
                                    </option>
                                    <option value="NOK">Norwegian Krone</option>
                                    <option value="NZD">
                                        New Zealand Dollar
                                    </option>
                                    <option value="PEN">
                                        Peruvian Nuevo Sol
                                    </option>
                                    <option value="PHP">Philippine Peso</option>
                                    <option value="PLN">Polish Zloty</option>
                                    <option value="RON">Romanian Leu</option>
                                    <option value="RUB">Russian Ruble</option>
                                    <option value="SEK">Swedish Krona</option>
                                    <option value="SGD">
                                        Singapore Dollar
                                    </option>
                                    <option value="THB">Thai Baht</option>
                                    <option value="TRY">Turkish Lira</option>
                                    <option value="TWD">
                                        New Taiwan Dollar
                                    </option>
                                    <option value="UAH">
                                        Ukrainian Hryvnia
                                    </option>
                                    <option value="USD">
                                        United States Dollar
                                    </option>
                                    <option value="ZAR">
                                        South African Rand
                                    </option>
                                </select>
                                <p
                                    className="invalid-feedback"
                                >
                                    {inputError.map(e=>e.input==="event_face_value_currency" ? e.msg : null)}
                                </p>
                                <input
                                    type="number"
                                    className={
                                        inputError.some(
                                            (e) =>
                                                e.input ===
                                                "event_face_value_min"
                                        )
                                            ? "form-control col mx-1 is-invalid"
                                            : "form-control col mx-1"
                                    }
                                    id="exampleFormControlInput1"
                                    placeholder="Face Value Min"
                                    value={
                                        createConcert.event_face_value_min ===
                                        "NaN"
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
                                            :
                                            createConcert.event_face_value_max >= Number(e.target.value) ?
                                            setCreateConcert({
                                                  ...createConcert,
                                                  event_face_value_min:
                                                      parseFloat(
                                                          e.target.value
                                                      ).toFixed(2),
                                              }) : setCreateConcert({
                                                ...createConcert,
                                                event_face_value_min:
                                                    parseFloat(
                                                        e.target.value
                                                    ).toFixed(2),
                                                event_face_value_max:
                                                    parseFloat(
                                                        e.target.value
                                                    ).toFixed(2),
                                            })
                                    }
                                    required
                                />
                                <p
                                    className="invalid-feedback"
                                >
                                    {inputError.map(e=>e.input==="event_face_value_min" ? e.msg : null)}
                                </p>
                                <input
                                    type="number"
                                    className={
                                        inputError.some(
                                            (e) =>
                                                e.input ===
                                                "event_face_value_max"
                                        )
                                            ? "form-control col ms-1 is-invalid"
                                            : "form-control col ms-1"
                                    }
                                    id="exampleFormControlInput1"
                                    placeholder="Face Value Max"
                                    value={
                                        createConcert.event_face_value_max ===
                                        "NaN"
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
                                            : createConcert.event_face_value_min <= Number(e.target.value) ?
                                            setCreateConcert({
                                                  ...createConcert,
                                                  event_face_value_max:
                                                      parseFloat(
                                                          e.target.value
                                                      ).toFixed(2),
                                              }) : setCreateConcert({
                                                ...createConcert,
                                                event_face_value_min:
                                                    parseFloat(
                                                        e.target.value
                                                    ).toFixed(2),
                                                event_face_value_max:
                                                    parseFloat(
                                                        e.target.value
                                                    ).toFixed(2),
                                            })
                                    }
                                    required
                                />
                                <p
                                    className="invalid-feedback"
                                >
                                    {inputError.map(e=>e.input==="event_face_value_max" ? e.msg : null)}
                                </p>
                            </div>
                            <div className="row mb-2">
                                <label htmlFor="exampleFormControlInput1">
                                    Event Url and Notes*
                                </label>
                                <input
                                    type="text"
                                    className="form-controrl"
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
                        >
                            Submit
                        </button>
                        <button
                            id="closenewlistingmodal"
                            data-bs-dismiss="modal"
                            hidden
                        ></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingNewListing;
