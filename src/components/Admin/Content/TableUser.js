import { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiService";

const TableUser = (props) => {

    const [lisUsers, setLisUsers] = useState([]);

    useEffect(() => {
        fetchListUsers();
    }, []);

    const fetchListUsers = async () => {
        let res = await getAllUsers();
        if (res.EC === 0) {
            setLisUsers(res.DT)
        }
    }
    return (
        <>
            <table className="table table-hover table-bordered ">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {lisUsers && lisUsers.length > 0 && lisUsers.map((item, index) => {
                        return (
                            <tr key={`table-users-${index}`}>
                                <td>{index + 1}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.role}</td>
                                <td>
                                    <button className="btn btn-secondary">View</button>
                                    <button className="btn btn-warning mx-3">Update</button>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                    {lisUsers && lisUsers.length === 0 &&
                        <tr>
                            <td colSpan={'4'}>No found data</td>
                        </tr>
                    }
                </tbody>
            </table>
        </>
    )
}

export default TableUser;