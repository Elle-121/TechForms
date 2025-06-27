// import MainContainer from "../../components/MainContainer";

// function Home(){
//     return (
//         <MainContainer>
//         <div className="d-flex" style={{height:'100vh', overflowY:'auto'}}>
//             <div class="border" style={{width:'30%'}}>
//                 Left


//             </div>


//             <div class="border" style={{width:'70%'  }}> 
//                 Right


//             </div>
//         </div>
//         </MainContainer>
//     );
// }

// export default Home;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainContainer from '../../components/MainContainer';
import SearchBar from '../../components/searchbar';
import { Row } from 'react-bootstrap';

function Dashboard() {
  return (
    <MainContainer>
      <div className="row h-100 m-0">
        {/* Left Side */}
        <div className="col-md-3 col-lg-2 h-100 overflow-auto"  style={{ width: '30%', borderRight: '5px solid #EE9337' }}>

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

            {/* Request filter */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                 <SearchBar />
            </div>
            

            { /* Scrollable list of Requests*/}
            {/* <div className="border border-black">
                Item 1
                Item 2
                Item 3
                Item 4
                Item 5
            </div> */}


        </div>
      </div>



      {/* Floating Action Button */}
      <button className="btn btn-warning rounded-circle position-fixed" style={{ bottom: '20px', right: '20px', width: '50px', height: '50px', fontSize: '24px' }}>+</button>
    </MainContainer>
  );
}

export default Dashboard;
