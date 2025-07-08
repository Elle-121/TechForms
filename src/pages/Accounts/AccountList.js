import editicon from '../../assets/EditIcon.svg';

export default function AccountList({data, setEditView, setAccountId}) {

    const handleEdit = (idx) => {
        setAccountId(idx);
        setEditView(true);
    }

    const smallIconSize = 20;
    const ButtonGroup = ({ onClick, buttonicon }) => (
        <span onClick={onClick} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <img src={buttonicon} width={smallIconSize} height={smallIconSize} />
        </span>
    );

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
                {data.map((item, idx) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.firstName + " " + item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.username}</td>
                            <td>{item.department}</td>
                            <td>{item.role}</td>
                            <ButtonGroup onClick={() => handleEdit(idx)} buttonicon={editicon} />
                        </tr>
                    )
                })}
            </tbody>
        </table>
        
    );
};