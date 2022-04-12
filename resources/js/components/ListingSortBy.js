import React from "react";

const ListingSortBy = ({sortAllListing, sortEligibleLastMinuteSales, sortActive, sortInactive, setSortAllListing, setSortEligibleLastMinuteSales, setSortActive, setSortInactive, handleSort,
    sortAllListingActive, sortEligibleLastMinuteSalesActive, sortActiveActive, sortInactiveActive, setSortAllListingActive, setSortEligibleLastMinuteSalesActive, setSortActiveActive, setSortInactiveActive, setSearch, search}) => {
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
                        <div className="form-check form-check-inline text-light col-2">
                            <input
                                className="form-check-input mt-2 ms-1"
                                type="checkbox"
                                id="All Listing"
                                checked={sortAllListingActive}
                                onChange={() => (sortEligibleLastMinuteSalesActive || sortActiveActive || sortInactiveActive) && setSortAllListingActive(!sortAllListingActive)}
                            />
                            <label
                                className="form-check-label mt-1 text-dark fw-bold"
                                htmlFor="All Listing"
                            >
                                Show All Listings
                            </label>
                        </div>
                        <div className="form-check form-check-inline text-light col">
                            <input
                                className="form-check-input mt-2"
                                type="checkbox"
                                value=""
                                id="EligibleLastMinuteSales"
                                checked={sortEligibleLastMinuteSalesActive}
                                onChange={() => setSortEligibleLastMinuteSalesActive(!sortEligibleLastMinuteSalesActive)}
                            />
                            <label
                                className="form-check-label mt-1 text-dark fw-bold"
                                htmlFor="EligibleLastMinuteSales"
                            >
                                Show Listings Eligible For Last Minute Sales
                            </label>
                        </div>
                        <div className="form-check form-check-inline text-light col">
                            <input
                                className="form-check-input mt-2 ms-1"
                                type="checkbox"
                                value=""
                                id="Active Listing"
                                checked={sortActiveActive}
                                onChange={() => setSortActiveActive(!sortActiveActive)}
                            />
                            <label
                                className="form-check-label mt-1 text-dark fw-bold"
                                htmlFor="Active Listing"
                            >
                                Show Active Listings
                            </label>
                        </div>
                        <div className="form-check form-check-inline text-light col">
                            <input
                                className="form-check-input mt-2 ms-1 text-dark"
                                type="checkbox"
                                value=""
                                id="Inactive"
                                checked={sortInactiveActive}
                                onChange={() => setSortInactiveActive(!sortInactiveActive)}
                            />
                            <label
                                className="form-check-label mt-1 text-dark fw-bold"
                                htmlFor="Inactive"
                            >
                                Show Inactive Listings
                            </label>
                        </div>
                        <div className="form-check form-check-inline text-light col w-50">

                            <form className="form-control d-flex w-100 m-auto justify-content-evenly" method="get" onSubmit={(e)=>e.preventDefault()}>
                                <input id="tableSearch" value={search} onChange={(e)=>setSearch(e.target.value)} className="w-100 d-flex justify-content-center" type="text" placeholder="Search.." name="search2"/>
                                <button type="submit"><i className="fa fa-search d-flex justify-content-center"></i></button>
                            </form>

                        </div>
                    </div>
                    <div id="Tools" className="z-indexes"></div>
                </div>
            </div>
        </>
    );
};

export default ListingSortBy;
