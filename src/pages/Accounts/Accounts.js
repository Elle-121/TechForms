import MainContainer from "../../components/MainContainer";
import { dummyAccounts } from "./dummyData";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SearchBar from "./components/searchBar";

export default function Accounts(){

    return (
        <MainContainer>
            <div className="mx-5 my-3">
                <h1 className="text-label text-tforange">Account Management</h1>
                <div className="d-flex justify-content-between">
                    <Tabs defaultActiveKey="all" class="mb-3 nav nav-tabs">
                        <Tab eventkey="all" title="All" class="filter-role">All</Tab>
                        <Tab eventkey="hr" title="HR" class="filter-role">HR</Tab>
                        <Tab eventkey="employee" title="Employee" class="filter-role">Employee</Tab>
                    </Tabs>
                    <SearchBar/>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone No.</th>
                            <th scope="col">Username</th>
                            <th scope="col">Department</th>
                            <th scope="col">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                         {
                            dummyAccounts.map(item =>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.firstName + " " + item.lastName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phoneNo}</td>
                                    <td>{item.username}</td>
                                    <td>{item.department}</td>
                                    <td>{item.role}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </MainContainer>
    );
}