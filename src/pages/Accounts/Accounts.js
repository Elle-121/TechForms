import MainContainer from "../../components/MainContainer";
import { dummyAccounts } from "./dummyData";

export default function Accounts(){

    return (
        <MainContainer>
            <h1>Account Management</h1>
            <div>
                <div>
                    <button>All</button>
                    <button>HR</button>
                    <button>Employee</button>
                </div>
                <div>
                    <div>Search Bar</div>
                    <div>Filter</div>
                </div>
            </div>
            <table>
                <thead>
                    <th>ID</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Phone No.</th>
                    <th>Username</th>
                    <th>Department</th>
                    <th>Role</th>
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
        </MainContainer>
    );
}