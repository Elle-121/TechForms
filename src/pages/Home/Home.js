

// export default Home;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainContainer from '../../components/MainContainer';
import SearchBarFilter from '../../components/SearchBarFilter';
import Pagination from '../../components/Pagination'; // Assuming you have a Pagination component
import RequestList from './RequestList'; // Assuming you have a RequestList component

import dummyData from './dummyData';

function Home() {

    const [currentPage, setCurrentPage] = React.useState(1);
    const requestsPerPage = 10;
    const totalPages = Math.ceil(dummyData.length / requestsPerPage);

    const paginatedRequests = dummyData.slice(
    (currentPage - 1) * requestsPerPage,
    currentPage * requestsPerPage
    );

    return (
        <MainContainer>
        <div className="row h-100 m-0">
            {/* Left Side */}
            <div className="col-md-3 col-lg-2 h-100 overflow-auto"  style={{ width: '30%', borderRight: '5px solid var(--tforange-color)' }}>

            </div>

            {/* Right Content */}
            <div className=" p-4 h-100 overflow-auto border"  style={{ width: '70%' }}>
                {/* Filters */}
                {/* <Row class="border border-black">
                    Button 1
                    Button 2
                    Button 3
                    Button 4
                </Row> */}

                {/* Header - Requests + Searchbar + Filter */}
                <div className="d-flex justify-content-between align-items-center pb-2" style={{ borderBottom: '2px solid #ccc' }}>
                    <h4 className="tf-header">Requests</h4>
                    <SearchBarFilter />
                </div>
                
                <RequestList data={paginatedRequests} />

                <div className='border border-black' style={{ padding: 5, marginTop: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </div>

            </div>
        </div>



        {/* Floating Action Button */}
        <button className="btn btn-warning rounded-circle position-fixed" style={{ bottom: '20px', right: '20px', width: '50px', height: '50px', fontSize: '24px' }}>+</button>
        </MainContainer>
    );
}

export default Home;
