import React from "react";

const ListingSortBy = ({
    sortAllListingActive,
    sortEligibleLastMinuteSalesActive,
    sortActiveActive,
    sortInactiveActive,
    setSortAllListingActive,
    setSortEligibleLastMinuteSalesActive,
    setSortActiveActive,
    setSortInactiveActive,
    setSearch,
    search,
}) => {
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
                    <div className="checkboxes container-fluid row justify-content-center">
                        <div className="form-check form-check-inline text-light col-2 d-flex justify-content-center">
                            <input
                                className="form-check-input ms-1"
                                type="checkbox"
                                id="All Listing"
                                checked={sortAllListingActive}
                                onChange={() =>
                                    (sortEligibleLastMinuteSalesActive ||
                                        sortActiveActive ||
                                        sortInactiveActive) &&
                                    setSortAllListingActive(
                                        !sortAllListingActive
                                    )
                                }
                            />
                            <label
                                className="form-check-label text-dark fw-bold"
                                htmlFor="All Listing"
                            >
                                Show All Listings
                            </label>
                        </div>
                        <div className="form-check form-check-inline text-light col d-flex justify-content-center">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="EligibleLastMinuteSales"
                                checked={sortEligibleLastMinuteSalesActive}
                                onChange={() => {
                                    setSortEligibleLastMinuteSalesActive(
                                        !sortEligibleLastMinuteSalesActive
                                    );
                                    alert(
                                        "Eligible Last Minute Sales is temporarily unavailable"
                                    );
                                }}
                            />
                            <label
                                className="form-check-label text-dark fw-bold"
                                htmlFor="EligibleLastMinuteSales"
                            >
                                Show Listings Eligible For Last Minute Sales
                            </label>
                        </div>
                        <div className="form-check form-check-inline text-light col d-flex justify-content-center">
                            <input
                                className="form-check-input ms-1"
                                type="checkbox"
                                value=""
                                id="Active Listing"
                                checked={sortActiveActive}
                                onChange={() =>
                                    setSortActiveActive(!sortActiveActive)
                                }
                            />
                            <label
                                className="form-check-label text-dark fw-bold"
                                htmlFor="Active Listing"
                            >
                                Show Active Listings
                            </label>
                        </div>
                        <div className="form-check form-check-inline text-light col d-flex justify-content-center">
                            <input
                                className="form-check-input ms-1 text-dark"
                                type="checkbox"
                                value=""
                                id="Inactive"
                                checked={sortInactiveActive}
                                onChange={() =>
                                    setSortInactiveActive(!sortInactiveActive)
                                }
                            />
                            <label
                                className="form-check-label text-dark fw-bold"
                                htmlFor="Inactive"
                            >
                                Show Inactive Listings
                            </label>
                        </div>
                        <div className="form-check form-check-inline text-light col w-50 d-flex justify-content-center mt-1">
                            <input
                                type="text"
                                className="form-control d-flex m-auto justify-content-evenly"
                                placeholder="Search.."
                                id="tableSearch"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                name="search2"
                            />
                        </div>
                    </div>
                    <div id="Tools" className="z-indexes"></div>
                </div>
            </div>
        </>
    );
};

export default ListingSortBy;
