import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from 'react-icons/fc';
// import hinhthe from './../../../assets/anh-the-1.jpg';
import axios from 'axios';

const ModalCreateUser = (props) => {
    const { show, setShow } = props;

    const handleClose = () => {
        setShow(false);
        setEmail("");
        setPassword("");
        setUsername("");
        setRole("USER");
        setImage("");
        setPreviewImg("");
    };

    const handleSubmitCreateUser = async () => {
        const data = new FormData();
        data.append('email', email);
        data.append('password', password);
        data.append('username', username);
        data.append('role', role);
        data.append('userImage', image); //lay ben postman (api)

        let res = await axios.post('http://localhost:8081/api/v1/participant', data)
        console.log(">>> check respont: ", res)
    }

    const handleLoadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImg(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0]);
        }
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('USER');
    const [image, setImage] = useState('');
    const [previewImg, setPreviewImg] = useState('');

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Guest Infomation Check
            </Button> */}

            <Modal
                className='modal-add-user'
                show={show}
                onHide={handleClose}
                size='xl'
                backdrop='static'>
                <Modal.Header closeButton>
                    <Modal.Title>Đăng ký thông tin</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <form class="row g-3">
                        <div className='col-sm-2 img-preview' onClick={handleLoadImage} >
                            <label htmlFor='LoadImage'>Ảnh 3x4</label>
                            <input id='LoadImage' type="file" hidden />
                            <img src={hinhthe} />
                        </div>
                        <div class="col-md-12">
                            <label for="inputEmail4" class="form-label">Họ và Tên</label>
                            <input type="text" class="form-control" id="inputEmail4" placeholder="Nhập Họ và Tên" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Ngày sinh</label>
                            <input type="tex" class="form-control" id="inputPassword4" placeholder="dd/MM/yyyy" />
                        </div>
                        <div class="col-6">
                            <label for="inputAddress" class="form-label">Số CMT/CCCD</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="Nhập số CMT/CCCD" />
                        </div>
                        <div class="col-6">
                            <label for="inputAddress" class="form-label">Số điện thoại</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="Nhập số điện thoại" />
                        </div>
                        <div class="col-12">
                            <label for="inputAddress2" class="form-label">Địa chỉ</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Nhập địa chỉ" />
                        </div>
                        <div class="col-md-12">
                            <label for="inputState" class="form-label">Tỉnh/Thành phố</label>
                            <select id="inputState" class="form-select">
                                <option selected>Chọn Tỉnh/Thành phố...</option>
                                <option>Hà Nội</option>
                                <option>Hồ Chí Minh</option>
                                <option>Biên Hoà</option>
                                <option>Bình Dương</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label for="inputState" class="form-label">Quận/Huyện</label>
                            <select id="inputState" class="form-select">
                                <option selected>Chọn Quận/Huyện...</option>
                                <option>Quận 1</option>
                                <option>Quận 2</option>
                                <option>Quận 3</option>
                                <option>Quận 12</option>
                                <option>Quận Tân Phú</option>
                                <option>Quận Bình Tân</option>
                                <option>Huyện Nhà Bè</option>
                                <option>Huyện Bình Chánh</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label for="inputState" class="form-label">Phường/Xã</label>
                            <select id="inputState" class="form-select">
                                <option selected>Chọn Phường/Xã...</option>
                                <option>Phường 1</option>
                                <option>Phường 2</option>
                                <option>Phường 3</option>
                                <option>Phường 12</option>
                            </select>
                        </div>

                    </form> */}
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" value={email} onChange={(event) => setEmail(event.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" value={password} onChange={(event) => setPassword(event.target.value)} />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">User Name</label>
                            <input type="text" className="form-control" value={username} onChange={(event) => setUsername(event.target.value)} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select className="form-select"
                                onChange={(event) => setRole(event.target.value)}
                                value={role}>
                                <option value='USER'>USER</option>
                                <option value='ADMIN'>ADMIN</option>
                            </select>
                        </div>
                        <div className='col-md-12'>
                            <label htmlFor='UploadImage' className="form-label label-upload"><FcPlus />Upload File Image</label>
                            <input id='UploadImage' type='file' hidden onChange={(event) => handleLoadImage(event)} ></input>
                        </div>
                        <div className='col-md-12 img-preview'>
                            {previewImg ? <img src={previewImg} /> : <span>Preview Image</span>}
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmitCreateUser()}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalCreateUser;