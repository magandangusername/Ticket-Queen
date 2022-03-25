import React from "react";

const ListingSortBy = () => {
    return (
        <>
            <div className="container-fluid d-flex justify-content-center">
                <div
                    className="container-fluid bg-image position-fixed"
                    style={{
                        zIndex: 500,
                        background:
                            ("linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
                            "url('https://queenoftickets.com/wp-content/uploads/2021/12/header-8.jpeg')"),
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                >
                    <div className="checkboxes container-fluid row">
                        <div className="form-check form-check-inline text-light col">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck1"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="defaultCheck1"
                            >
                                Show All Listings
                            </label>
                        </div>
                        <div className="form-check form-check-inline text-light col">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck1"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="defaultCheck1"
                            >
                                Show Listings Eligible For Last Minute Sales
                            </label>
                        </div>
                        <div className="form-check form-check-inline text-light col">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck1"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="defaultCheck1"
                            >
                                Show Active Listings
                            </label>
                        </div>
                        <div className="form-check form-check-inline text-light col">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck1"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="defaultCheck1"
                            >
                                Show Inactive Listings
                            </label>
                        </div>
                    </div>
                    <div id="Tools" className="z-indexes"></div>
                </div>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </>
    );
};

export default ListingSortBy;
