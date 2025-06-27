import React, { useEffect, useState } from "react";
import DashboardFilter from './components/homeFilter'

function Home(){

    const [filterView, setFilterView] = useState(false)

    const openFilterView = () => {
        setFilterView(true);
    }

    return (
        <div>
            <h1>Home Page</h1>
            <p>Welcome to the home page!</p>

            <DashboardFilter view={filterView} setFilterView={setFilterView}/>
            
            <div>
                <button onClick={openFilterView}>Contact Us</button>
            </div>

        </div>
    );
}

export default Home;
