import MainContainer from "../../components/MainContainer";
import { dummyAccounts } from "./dummyData";
import { useState } from "react";
import SearchBar from "../../components/SearchBar";

export default function Accounts(){

    const [role, setRole] = useState()


    // const filterData = (value) =>{
    //     return dummyAccounts.filter(item => {item.role===value})
    // }

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
                            dummyAccounts.filter(item=> role ? item.role===role : item.role).map(item =>
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