
export default function listAccounts({data, role}) {

    return (
        <table className="table">
            <thead>
                <tr>
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
                    data.filter(item => role ? item.role===role : item.role).map(item =>
                        <tr>
                            <td>{item.firstName + " " + item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.username}</td>
                            <td>{item.department}</td>
                            <td>{item.role}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};