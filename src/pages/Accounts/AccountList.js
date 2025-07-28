import { ReactComponent as EditIcon } from '../../assets/EditIcon.svg';

export default function AccountList({data, setEditView, setAccountId}) {

    const handleEdit = (idx) => {
        setAccountId(idx);
        setEditView(true);
    }

    var fixedCol = true;

    return (
        <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col" style={ fixedCol ? { width: "200px" } : {}}>Full Name</th>
                        <th scope="col" style={ fixedCol ? { width: "400px" } : {}}>Email</th>
                        <th scope="col" style={ fixedCol ? { width: "150px" } : {}}>Phone No.</th>
                        <th scope="col" style={ fixedCol ? { width: "180px" } : {}}>Username</th>
                        <th scope="col" style={ fixedCol ? { width: "200px" } : {}}>Department</th>
                        <th scope="col" style={ fixedCol ? { width: "110px" } : {}}>Role</th>
                        <th style={ fixedCol ? { width: "36px" } : {}}></th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item, idx) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.first_name + " " + item.last_name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.username}</td>
                                <td>{item.department_name}</td>
                                <td>{item.role_name}</td>
                                <td>
                                    <EditIcon onClick={() => handleEdit(idx)} width={20} height={20} className="btn-edit" />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        
    );
};