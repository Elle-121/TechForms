import React, { useEffect, useState } from "react";
import DashboardFilter from './components/homeFilter'
import MainContainer from "../../components/MainContainer";

function Home(){

    const [filterView, setFilterView] = useState(false)

    const openFilterView = () => {
        setFilterView(true);
    }

    return (
        <MainContainer>
            <h1>Home Page</h1>
            <p>Welcome to the home page!</p>

            <DashboardFilter view={filterView} setFilterView={setFilterView}/>
            
            <div>
                <button onClick={openFilterView}>Contact Us</button>
            </div>

        </MainContainer>
    );
}

export default Home;
