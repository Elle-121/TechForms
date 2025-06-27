import React, { useEffect, useState } from "react";
import FilterModal from './components/FilterModal';

function Accounts(){

    const [filterView, setFilterView] = useState(false);

    const openFilter = () => {
        setFilterView(true);
    }

    return (
        <div>
            <h1>Accounts Page</h1>
            <p>Welcome to the Accounts page!</p>
            <FilterModal view={filterView} setFilterView={setFilterView}/>
            <button type='button' onClick={openFilter}>Open Filter</button>
        </div>
    );
}

export default Accounts;