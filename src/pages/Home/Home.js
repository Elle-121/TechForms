

import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainContainer from '../../components/MainContainer';

// Components
import SearchBar from '../../components/SearchBar';
import Pagination from '../../components/Pagination'; // Assuming you have a Pagination component
import RequestList from './RequestList'; // Assuming you have a RequestList component
import FilterPanel from './FilterPanel'; // Assuming you have a FilterPanel component
import Calendar from './Calendar';

// Popup Modal
import DashboardFilter from './components/homeFilter';


// Dummy Data
import dummyData from './dummyData';

function Home() {

    // Function to open the filter view
    const [filterView, setFilterView] = useState(false)
    const openFilterView = () => {
        setFilterView(true);
    }

    // State for pagination
    const [currentPage, setCurrentPage] = React.useState(1);
    const requestsPerPage = 10;
    const totalPages = Math.ceil(dummyData.length / requestsPerPage);

    // Paginate the requests based on the current page [0-10] Requests for page 1, [10-20] Requests for page 2, etc.
    const paginatedRequests = dummyData.slice(
        (currentPage - 1) * requestsPerPage,
        currentPage * requestsPerPage
    );


    return (
    <MainContainer>
        <div className="row h-100 m-0">
            {/* Left Side */}
            
            <div className="p-4 col-md-3 col-lg-2 h-100 overflow-auto  " style={{width: '30%', display: 'flex', flexDirection: 'column', borderRight: '5px solid var(--tforange-color)'}}>
                <Calendar />
            </div>

            {/* Right Content */}
            <div className="p-4 h-100 overflow-auto " style={{width: '70%',display: 'flex',flexDirection: 'column',}}>
             
                {/* Filters */}
                <FilterPanel />

                {/* Header - Requests + Searchbar + Filter */}
                <div
                    className="d-flex justify-content-between align-items-center pb-3"
                    style={{ borderBottom: '2px solid #C8C8C8' }}
                    >
                    <h2 className="tf-header">Requests</h2>
                    <div className="d-flex align-items-center" style={{ gap: '12px' }}>
                        <SearchBar />

                        <button
                            type="button"
                            onClick={openFilterView}
                            style={{
                                background: 'none',
                                border: 'none',
                                padding: 0,
                                margin: 0,
                                cursor: 'pointer',
                                outline: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                position: 'relative',
                            }}
                            className="hover-underline"
                            >
                            <span style={{ color: '#555', fontSize: '14px' }}>Filter by</span>
                            <i className="bi bi-filter" style={{ fontSize: '18px', color: '#555' }}></i>
                            </button>

                        <DashboardFilter view={filterView} setFilterView={setFilterView}/>
                    </div>
                </div>

                <RequestList data={paginatedRequests} />

                <div className="border-black  d-flex justify-content-center" style={{ padding: 5, marginTop: 'auto'}}>
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage}/>
                </div>
            </div>

        </div>

        {/* Floating Action Button */}
        <button className="btn rounded-circle position-fixed" style={{ color:'white', bottom: '20px', right: '20px', width: '50px', height: '50px', fontSize: '24px', backgroundColor: 'var(--tforange-color)'}}>+</button>
    </MainContainer>
    );
}

export default Home;
