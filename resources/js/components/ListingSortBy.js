import React from "react";

const ListingSortBy = ({sortAllListing, sortEligibleLastMinuteSales, sortActive, sortInactive, setSortAllListing, setSortEligibleLastMinuteSales, setSortActive, setSortInactive, handleSort,
    sortAllListingActive, sortEligibleLastMinuteSalesActive, sortActiveActive, sortInactiveActive, setSortAllListingActive, setSortEligibleLastMinuteSalesActive, setSortActiveActive, setSortInactiveActive}) => {
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
                                id="All Listing"
                                checked={sortAllListingActive}
                                onChange={() => (!sortEligibleLastMinuteSalesActive & !sortActiveActive & !sortInactiveActive) && setSortAllListingActive(!sortAllListingActive)}
                            />
                            <label
                                className="form-check-label"
                                htmlFor="All Listing"
                            >
                                Show All Listings
                            </label>
                        </div>
                        <div className="form-check form-check-inline text-light col">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="EligibleLastMinuteSales"
                                checked={sortEligibleLastMinuteSalesActive}
                                onChange={() => setSortEligibleLastMinuteSalesActive(!sortEligibleLastMinuteSalesActive)}
                            />
                            <label
                                className="form-check-label"
                                htmlFor="EligibleLastMinuteSales"
                            >
                                Show Listings Eligible For Last Minute Sales
                            </label>
                        </div>
                        <div className="form-check form-check-inline text-light col">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="Active Listing"
                                checked={sortActiveActive}
                                onChange={() => setSortActiveActive(!sortActiveActive)}
                            />
                            <label
                                className="form-check-label"
                                htmlFor="Active Listing"
                            >
                                Show Active Listings
                            </label>
                        </div>
                        <div className="form-check form-check-inline text-light col">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="Inactive"
                                checked={sortInactiveActive}
                                onChange={() => setSortInactiveActive(!sortInactiveActive)}
                            />
                            <label
                                className="form-check-label"
                                htmlFor="Inactive"
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
        </>
    );
};

export default ListingSortBy;
