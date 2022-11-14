import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUsers, getUserPaginate } from "../../../services/apiService";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [shoModalViewUser, setShowModalViewUser] = useState(false);

    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);

    const [listUsers, setLisUsers] = useState([]);
    const [dataUpdate, setDataUpdate] = useState({});
    const [dataView, setDataView] = useState({});
    const [dataDelete, setDataDelete] = useState({});

    const [pageCount, setPageCount] = useState(0);
    const LIMIT_USER = 2;
    const [currentPage, setCurrentPage] = useState(1);

    const handleClickbtnUpdate = (user) => {
        setShowModalUpdateUser(true);
        setDataUpdate(user);
    }

    const handleClickbtnView = (user) => {
        setShowModalViewUser(true);
        setDataView(user);
    }

    const handleClickbtnDelete = (user) => {
        setShowModalDeleteUser(true);
        setDataDelete(user);
    }

    const resetUpdateData = () => {
        setDataUpdate({});
    }

    const resetViewData = () => {
        setDataView({});
    }

    useEffect(() => {
        // fetchListUsers();
        fetchListUsersPaginate(1);
    }, []);

    const fetchListUsers = async () => {
        let res = await getAllUsers();
        if (res.EC === 0) {
            setLisUsers(res.DT)
        }
    }

    const fetchListUsersPaginate = async (page) => {
        let res = await getUserPaginate(page, LIMIT_USER);
        if (res.EC === 0) {
            setLisUsers(res.DT.users);
            setPageCount(res.DT.totalPages)
        }
    }

    return (
        <div className="manage-user-container">
            <div className="title">ManageUser</div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary" onClick={() => setShowModalCreateUser(true)}><FcPlus />Add new users</button>
                </div>
            </div>
            <div className="table-users-container">
                {/* <TableUser
                    listUsers={listUsers}
                    handleClickbtnUpdate={handleClickbtnUpdate}
                    handleClickbtnView={handleClickbtnView}
                    handleClickbtnDelete={handleClickbtnDelete} /> */}
                <TableUserPaginate
                    listUsers={listUsers}
                    handleClickbtnUpdate={handleClickbtnUpdate}
                    handleClickbtnView={handleClickbtnView}
                    handleClickbtnDelete={handleClickbtnDelete}
                    fetchListUsersPaginate={fetchListUsersPaginate}
                    pageCount={pageCount}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />

            </div>
            <ModalCreateUser
                show={showModalCreateUser}
                setShow={setShowModalCreateUser}
                fetchListUsers={fetchListUsers}
                fetchListUsersPaginate={fetchListUsersPaginate}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage} />
            <ModalUpdateUser
                show={showModalUpdateUser}
                setShow={setShowModalUpdateUser}
                dataUpdate={dataUpdate}
                fetchListUsers={fetchListUsers}
                fetchListUsersPaginate={fetchListUsersPaginate}
                resetUpdateData={resetUpdateData}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            <ModalViewUser
                show={shoModalViewUser}
                setShow={setShowModalViewUser}
                dataView={dataView}
                resetViewData={resetViewData}
            />
            <ModalDeleteUser
                show={showModalDeleteUser}
                setShow={setShowModalDeleteUser}
                fetchListUsers={fetchListUsers}
                dataDelete={dataDelete}
                fetchListUsersPaginate={fetchListUsersPaginate}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    )
}

export default ManageUser;