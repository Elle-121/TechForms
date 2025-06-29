

// export default Home;
import { React, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainContainer from '../../components/MainContainer';
import SearchBarFilter from '../../components/SearchBarFilter';
import DashboardFilter from './components/homeFilter';

import RequestList from './RequestList'; // Assuming you have a RequestList component
import { Row } from 'react-bootstrap';

function Home() {
  const [filterView, setFilterView] = useState(false)

    const openFilterView = () => {
        setFilterView(true);
    }

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
                <DashboardFilter view={filterView} setFilterView={setFilterView}/>
                <div>
                  <button onClick={openFilterView}>Filter</button>
                </div>
            </div>

            <RequestList />

        </div>
      </div>



      {/* Floating Action Button */}
      <button className="btn btn-warning rounded-circle position-fixed" style={{ bottom: '20px', right: '20px', width: '50px', height: '50px', fontSize: '24px' }}>+</button>
    </MainContainer>
  );
}

export default Home;
