import React from 'react';
import { useState } from "react";
import MainContainer from "../../components/MainContainer";

// components
import SearchBar from "../../components/SearchBar";
import Pagination from '../../components/Pagination';
import AccountList from "./AccountList";

// data
import { dummyData } from "./dummyData";
import RegisterForm from './components/RegisterForm';

export default function Accounts(){

    const [formView, setFormView] = useState(false)
    
    const openFormView = () => {
        setFormView(true);
    }

    // State for roles
    const [role, setRole] = useState();

    // State for pagination
    const [currentPage, setCurrentPage] = React.useState(1);
    const requestsPerPage = 10;
    const totalPages = Math.ceil(dummyData.length / requestsPerPage);

    const paginatedRequests = dummyData.slice(
    (currentPage - 1) * requestsPerPage,
    currentPage * requestsPerPage
    );

    return (
        <MainContainer>
            <div className="mx-5 my-3">
                <h1 className="tf-header">Account Management</h1>
                
                <div className="d-flex justify-content-between mb-3">
                    <div className="btn-group-role">
                        <button onClick={()=>setRole()} autoFocus>All</button>
                        <button onClick={()=>setRole("HR")}>HR</button>
                        <button onClick={()=>setRole("Employee")}>Employee</button>
                    </div>
                    <SearchBar/>
                </div>

                <AccountList data={paginatedRequests} role={role}/>

                <div className="border-black  d-flex justify-content-center" style={{ padding: 5, marginTop: 'auto'}}>
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage}/>
                </div>
            </div>

            <button onClick={openFormView} className="btn rounded-circle position-fixed" style={{ color:'white', bottom: '20px', right: '20px', width: '50px', height: '50px', fontSize: '24px', backgroundColor: 'var(--tforange-color)'}}>+</button>
            <RegisterForm view={formView} setFormView={setFormView} />
        
        </MainContainer>
    );
}