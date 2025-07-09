import { useState } from "react";
import MainContainer from "../../components/MainContainer";

// components
import SearchBar from "../../components/SearchBar";
import Pagination from '../../components/Pagination';
import AccountList from "./AccountList";
import EditForm from "./components/EditForm";

// data
import { dummyData } from "./dummyData";
import RegisterForm from './components/RegisterForm';

export default function Accounts(){

    const [formView, setFormView] = useState(false);
    const [editView, setEditView] = useState(false);
    const [accountId, setAccountId] = useState(false);
    
    const openFormView = () => {
        setFormView(true);
    }

    // State for role and search
    const [searchValue, setSearchValue] = useState('');
    const [role, setRole] = useState();

    // State for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const requestsPerPage = 10;

    // Filter Data
    const filteredData = dummyData.filter(item => role ? item.role===role : item.role).filter(item => {
        const fullname = `${item.firstName} ${item.lastName}`;
        return !searchValue || fullname.toLowerCase().includes(searchValue.toLowerCase()) || item.department.toLowerCase().includes(searchValue.toLowerCase())
    });

    const totalPages = Math.ceil(filteredData.length / requestsPerPage);

    const paginatedRequests = filteredData.slice(
    (currentPage - 1) * requestsPerPage,
    currentPage * requestsPerPage
    );

    const handleSubmitRole = (selectedRole) => {
        setCurrentPage(1); // Reset to first page when role changes
        setRole(selectedRole);
    }

    return (
        <MainContainer>
            <div className="mx-5 my-3">
                <h1 className="tf-header">Account Management</h1>
                
                <div className="d-flex justify-content-between mb-3">
                    <div>
                        <button onClick={()=>handleSubmitRole()} className={`btn-role ${!role ? "btn-role--selected" : ""}`}>All</button>
                        <button onClick={()=>handleSubmitRole("HR")} className={`btn-role ${role==="HR" ? "btn-role--selected" : ""}`}>HR</button>
                        <button onClick={()=>handleSubmitRole("Employee")} className={`btn-role ${role==="Employee" ? "btn-role--selected" : ""}`}>Employee</button>
                    </div>
                    <SearchBar setSearchValue={setSearchValue} setCurrentPage={setCurrentPage}/>
                </div>

                <AccountList data={paginatedRequests} setEditView={setEditView} setAccountId={setAccountId} />
                <EditForm view={editView} setEditView={setEditView} data={dummyData[accountId]} />

                <div className="border-black  d-flex justify-content-center" style={{ padding: 5, marginTop: 'auto'}}>
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage}/>
                </div>
            </div>

            <button onClick={openFormView} className="btn rounded-circle position-fixed" style={{ color:'white', bottom: '20px', right: '20px', width: '50px', height: '50px', fontSize: '24px', backgroundColor: 'var(--tforange-color)'}}>+</button>
            <RegisterForm view={formView} setFormView={setFormView} />
        
        </MainContainer>
    );
}