import { useState } from 'react';
import './Regis.scss';
import { useNavigate } from 'react-router-dom';
import { postRegis } from '../../services/apiService';
import { toast } from 'react-toastify';
import { IconName, VscEye, VscEyeClosed } from "react-icons/vsc";

const Regis = (props) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleRegis = async (email, username, password) => {
        //validate
        const isValidEmail = validateEmail(email);
        if (!isValidEmail) {
            toast.error('Invalid Email');
            return;
        }
        if (!password) {
            toast.error('Invalid Password');
            return;
        }

        //submit api
        let data = await postRegis(email, username, password);

        if (data && data.EC === 0) {
            toast.success(data.EM)
            navigate('/login');
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM)
        }
    }

    const [passwordType, setPasswordType] = useState("password");
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    return (
        <div className='regis-container'>
            <div className='header'>
                <span>Already have an account?</span>
                <button onClick={() => { navigate('/login') }}>Log in</button>
            </div>
            <div className='title col-4 mx-auto'>
                TodoQuez
            </div>
            <div className='welcome col-4 mx-auto'>
                Start your journey?
            </div>
            <div className='content-form col-4 mx-auto'>
                <div className='form-group'>
                    <label>Email (*)</label>
                    <input
                        type={'email'}
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className='form-group pass-group'>
                    <label>Password (*)</label>
                    <input
                        type={passwordType}
                        className='form-control'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />

                    {passwordType == "password" ?
                        <span
                            onClick={togglePassword}
                            className='icons-eye'>
                            <VscEye />
                        </span>
                        :
                        <span
                            onClick={togglePassword}
                            className='icons-eye'>
                            <VscEyeClosed />
                        </span>}

                </div>
                <div className='form-group'>
                    <label>Username</label>
                    <input
                        type={'text'}
                        className='form-control'
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div>
                    <button
                        onClick={() => handleRegis(email, username, password)}
                        className='btn-submit'>Create my free account</button>
                    <div className='text-center'>
                        <span className='back' onClick={() => { navigate('/') }}> &#60;&#60; Go to Homepage</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Regis;