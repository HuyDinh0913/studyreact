import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';

const ManageUser = (props) => {
    return (
        <div className="manage-user-container">
            <div className="title">Register</div>
            <div className="users-content">
                {/* <button>Add new users</button> */}
            </div>
            <div>
                {/* table users */}

            </div>
            <ModalCreateUser />
        </div>
    )
}

export default ManageUser;