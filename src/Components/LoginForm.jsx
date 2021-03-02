import axios from 'axios';
import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { Input } from 'antd';
import { UserOutlined, SecurityScanFilled } from '@ant-design/icons';
import "antd/dist/antd.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const LoginForm = () => {

    const [form, setForm] = useState({
        username : '',
        password : ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('hola')
        const authObject = {
            "Project-ID" : "550afb2b-f5b4-4ab0-a9f6-a7e4f5b69270",
            "User-Name" : form.username,
            "User-Secret" : form.password
        };

        axios.get('https://api.chatengine.io/chats', { headers : authObject })
        .then(data => {
            localStorage.setItem('username', form.username);
            localStorage.setItem('pass', form.password);
            window.location.reload();
        })
        .catch(error => toast.error('Non-existent user, try again'));
    }

    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    return (
        <div className='wrapper'>
            <div className='wrapper-image'>
                <img src={`${process.env.PUBLIC_URL}/assets/animated-gif.gif`}/>
            </div>
            <div className='form'>
                <h1 className='title'>Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <Input
                        size="large"
                        type='text'
                        placeholder='Username'
                        name='username'
                        value={form.username}
                        onChange={handleInputChange}
                        prefix={<UserOutlined />}
                    />
                    
                    <Input
                        size="large"
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={form.password}
                        onChange={handleInputChange}
                        prefix={<SecurityScanFilled />}
                    />
                        
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Start Chat
                    </Button>
                </form>
                <ToastContainer 
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
        </div>
    )
}
